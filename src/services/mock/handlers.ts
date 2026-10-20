import { MEMBERS, findMemberById } from "@/data/members";
import { PROJECTS } from "@/data/projects";
import { PUBLICATIONS } from "@/data/publications";
import { RESEARCH_LINES } from "@/data/research-lines";
import type { ListParams } from "@/types/api";
import { normalizeText, paginate } from "./paginate";

/**
 * Backend de mentira: implementa o contrato `/v1` lendo os arquivos de `src/data/`.
 * Usado enquanto `VITE_API_BASE_URL` não estiver configurada.
 */
type Params = Record<string, string | number | undefined>;
type Handler = (match: RegExpMatchArray, params: Params, body?: unknown) => unknown;

function toListParams(params: Params): ListParams {
  return {
    page: params.page ? Number(params.page) : undefined,
    pageSize: params.pageSize ? Number(params.pageSize) : undefined,
    query: params.query ? String(params.query) : undefined,
  };
}

function matchesQuery(text: string, query?: string) {
  return !query || normalizeText(text).includes(normalizeText(query.trim()));
}

const ROUTES: { method: string; pattern: RegExp; handler: Handler }[] = [
  {
    method: "GET",
    pattern: /^\/v1\/research-lines$/,
    handler: (_, params) => {
      const list = toListParams(params);
      const lines = RESEARCH_LINES.filter((line) =>
        matchesQuery(`${line.name} ${line.objective}`, list.query),
      ).map(({ memberIds: _memberIds, ...line }) => line);
      return paginate(lines, list);
    },
  },
  {
    method: "GET",
    pattern: /^\/v1\/research-lines\/([\w-]+)\/members$/,
    handler: (match, params) => {
      const line = RESEARCH_LINES.find((item) => item.id === match[1]);
      const members = (line?.memberIds ?? []).flatMap((id) => findMemberById(id) ?? []);
      return paginate(members, toListParams(params));
    },
  },
  {
    method: "GET",
    pattern: /^\/v1\/projects$/,
    handler: (_, params) => {
      const list = toListParams(params);
      const projects = PROJECTS.filter(
        (project) =>
          (!params.status || project.status === params.status) &&
          matchesQuery(`${project.title} ${project.description}`, list.query),
      );
      return paginate(projects, list);
    },
  },
  {
    method: "GET",
    pattern: /^\/v1\/publications\/years$/,
    handler: () => [...new Set(PUBLICATIONS.map((item) => item.year))].sort((a, b) => b - a),
  },
  {
    method: "GET",
    pattern: /^\/v1\/publications$/,
    handler: (_, params) => {
      const list = toListParams(params);
      const publications = PUBLICATIONS.filter(
        (item) =>
          (!params.year || item.year === Number(params.year)) &&
          matchesQuery(`${item.title} ${item.authors} ${item.venue}`, list.query),
      ).sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
      return paginate(publications, list);
    },
  },
  {
    method: "GET",
    pattern: /^\/v1\/members$/,
    handler: (_, params) => paginate(MEMBERS, toListParams(params)),
  },
  {
    method: "POST",
    pattern: /^\/v1\/contact-messages$/,
    handler: (_match, _params, body) => ({ received: true, body }),
  },
];

export function handleMockRequest(method: string, url: string, params: Params, body?: unknown) {
  const route = ROUTES.find((item) => item.method === method && item.pattern.test(url));
  if (!route) return { status: 404, data: { message: `Rota não encontrada: ${method} ${url}` } };
  return { status: 200, data: route.handler(url.match(route.pattern)!, params, body) };
}
