import type { Member } from "@/types/member";

export const MEMBERS: Member[] = [
  {
    id: "muriel-figueredo-franco",
    name: "Prof. Dr. Muriel Figueredo Franco",
    lattesUrl: "http://lattes.cnpq.br/5417317635081894",
  },
  {
    id: "juliana-silva-herbert",
    name: "Prof Dra. Juliana Silva Herbert",
    lattesUrl: "http://lattes.cnpq.br/7180951922379856",
  },
  {
    id: "raissa-nunes-santos",
    name: "Raíssa Nunes dos Santos",
    lattesUrl: "http://lattes.cnpq.br/2163318737122448",
  },
  {
    id: "isabel-cristina-silva",
    name: "Profa. Dra. Isabel Cristina Siqueira da Silva",
    lattesUrl: "http://lattes.cnpq.br/7221692456270122",
  },
  {
    id: "silvio-cesar-cazella",
    name: "Prof. Dr. Sílvio César Cazella",
    lattesUrl: "http://lattes.cnpq.br/9173977294178020",
  },
  {
    id: "claudio-luiz-salvalaio",
    name: "Cláudio Luiz Salvalaio",
    lattesUrl: "http://lattes.cnpq.br/0550133671937549",
  },
  {
    id: "denise-munchen-brandao",
    name: "Denise Munchen Brandao",
    lattesUrl: "http://lattes.cnpq.br/0103377631480249",
  },
  {
    id: "fernando-barcelos-rosito",
    name: "Fernando Barcelos Rosito",
    lattesUrl: "http://lattes.cnpq.br/8901297427749841",
  },
  {
    id: "vinicius-vicente-soares",
    name: "Vinícius Vicente Soares",
    lattesUrl: "http://lattes.cnpq.br/7547504820935924",
  },
  {
    id: "graciele-fernanda-linch",
    name: "Graciele Fernanda da Costa Linch",
    lattesUrl: "http://lattes.cnpq.br/4314635435676056",
  },
  {
    id: "maria-eugenia-pinto",
    name: "Maria Eugênia Bresolin Pinto",
    lattesUrl: "http://lattes.cnpq.br/9611281263934506",
  },
  {
    id: "alcyr-alves-oliveira",
    name: "Alcyr Alves de Oliveira",
    lattesUrl: "http://lattes.cnpq.br/8243781392342839",
  },
  {
    id: "maria-eduarda-silva",
    name: "Maria Eduarda Machado Silva",
    lattesUrl: "http://lattes.cnpq.br/3316169400498752",
  },
  {
    id: "natalia-castro-dullius",
    name: "Natália Castro Dullius",
    lattesUrl: "http://lattes.cnpq.br/6324478755175042",
  },
  {
    id: "adriana-aparecida-paz",
    name: "Profa. Dra. Adriana Aparecida Paz",
    lattesUrl: "http://lattes.cnpq.br/4155476800472632",
  },
  {
    id: "julyhe-nunes-paulin",
    name: "Julyhe Nunes Paulin",
    lattesUrl: "http://lattes.cnpq.br/0056150305269769",
  },
  {
    id: "jose-antonio-burmann",
    name: "José Antônio Linch Burmann",
    lattesUrl: "http://lattes.cnpq.br/5817399860875888",
  },
];

export function findMemberById(id: string): Member | undefined {
  return MEMBERS.find((member) => member.id === id);
}
