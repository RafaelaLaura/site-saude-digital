import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  Microscope,
  Users,
  FileText,
  Brain,
  Cpu,
  Dna,
  LineChart,
} from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo de Pesquisa Horizonte — UFCSPA" },
      {
        name: "description",
        content:
          "Grupo de Pesquisa Horizonte: pesquisa aplicada em ciência de dados, saúde e inovação na Universidade Federal de Ciências da Saúde de Porto Alegre.",
      },
      { property: "og:title", content: "Grupo de Pesquisa Horizonte — UFCSPA" },
      {
        property: "og:description",
        content:
          "Pesquisa aplicada em ciência de dados, saúde e inovação na UFCSPA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { id: "grupo", label: "O Grupo" },
  { id: "equipe", label: "Equipe" },
  { id: "linhas", label: "Linhas de Pesquisa" },
  { id: "projetos", label: "Projetos" },
  { id: "publicacoes", label: "Publicações" },
  { id: "contato", label: "Contato" },
];

const TEAM = [
  { name: "Dra. Helena Vasconcelos", role: "Coordenadora · Ciência de Dados", initials: "HV" },
  { name: "Dr. Rafael Ximenes", role: "Vice-coordenador · Bioinformática", initials: "RX" },
  { name: "Dra. Marina Coelho", role: "Pesquisadora · Saúde Pública", initials: "MC" },
  { name: "Dr. Bruno Aguiar", role: "Pesquisador · IA Aplicada", initials: "BA" },
  { name: "Luísa Menezes", role: "Doutoranda · Epidemiologia", initials: "LM" },
  { name: "Thiago Rocha", role: "Mestrando · Aprendizado de Máquina", initials: "TR" },
];

const LINHAS = [
  {
    icon: Brain,
    title: "Inteligência Artificial em Saúde",
    text: "Modelos preditivos para diagnóstico, triagem e apoio à decisão clínica.",
  },
  {
    icon: Dna,
    title: "Bioinformática Translacional",
    text: "Análise de dados genômicos e integração multi-ômica em doenças complexas.",
  },
  {
    icon: LineChart,
    title: "Epidemiologia Computacional",
    text: "Modelagem de determinantes sociais e vigilância em saúde populacional.",
  },
  {
    icon: Cpu,
    title: "Sistemas Digitais de Saúde",
    text: "Arquiteturas interoperáveis, prontuários eletrônicos e telemedicina.",
  },
];

const PROJETOS = [
  {
    tag: "Em andamento",
    title: "PredictCare",
    text: "Plataforma de predição de risco cardiovascular a partir de prontuários eletrônicos.",
  },
  {
    tag: "Em andamento",
    title: "GenoSUS",
    text: "Integração de dados genômicos em coortes brasileiras do Sistema Único de Saúde.",
  },
  {
    tag: "Concluído",
    title: "VigiaRS",
    text: "Painel de vigilância epidemiológica para arboviroses no Rio Grande do Sul.",
  },
  {
    tag: "Piloto",
    title: "TeleTriagem",
    text: "Assistente de triagem clínica baseado em LLMs para atenção primária.",
  },
];

const PUBS = [
  {
    year: "2025",
    venue: "The Lancet Digital Health",
    title:
      "Fairness-aware risk prediction for hospital readmission in Brazilian public hospitals",
    authors: "Vasconcelos H., Ximenes R., Coelho M., et al.",
  },
  {
    year: "2024",
    venue: "npj Digital Medicine",
    title:
      "Federated learning for early sepsis detection across multi-center ICU cohorts",
    authors: "Aguiar B., Vasconcelos H., Rocha T.",
  },
  {
    year: "2024",
    venue: "JAMIA",
    title:
      "Interoperability patterns for the Brazilian Unified Health System: a scoping review",
    authors: "Coelho M., Menezes L., Ximenes R.",
  },
  {
    year: "2023",
    venue: "Bioinformatics",
    title:
      "Multi-omic integration reveals subtypes of treatment response in inflammatory disease",
    authors: "Ximenes R., Vasconcelos H., et al.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Grupo />
      <Linhas />
      <Equipe />
      <Projetos />
      <Publicacoes />
      <Contato />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="font-display text-lg font-semibold">H</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-primary">
              Horizonte
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Grupo de Pesquisa · UFCSPA
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            UFCSPA · CNPq
          </div>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Ciência que atravessa <span className="text-accent">horizontes</span> da saúde.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            Somos um grupo de pesquisa dedicado a unir ciência de dados,
            bioinformática e saúde pública para transformar evidências em
            impacto clínico e social.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#linhas"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
            >
              Conheça nossas linhas <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Ver projetos
            </a>
          </div>
          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["12", "Pesquisadores"],
              ["30+", "Publicações"],
              ["8", "Projetos ativos"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-accent">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-lg border border-accent/50" />
          <img
            src={heroLab}
            alt="Laboratório de pesquisa"
            width={1600}
            height={1200}
            className="relative aspect-[4/3] w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tint,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      className={tint ? "bg-secondary/40 py-24 md:py-28" : "py-24 md:py-28"}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl leading-tight text-primary md:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Grupo() {
  return (
    <Section
      id="grupo"
      eyebrow="O Grupo"
      title="Uma comunidade científica interdisciplinar."
      intro="O Grupo de Pesquisa Horizonte foi criado em 2018 dentro da UFCSPA para investigar como dados, algoritmos e evidências podem melhorar a saúde das pessoas. Reunimos pesquisadores, médicos, cientistas de dados e estudantes em torno de projetos que aproximam a universidade da sociedade."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Microscope,
            title: "Pesquisa aplicada",
            text: "Projetos com desfechos concretos em serviços de saúde e política pública.",
          },
          {
            icon: Users,
            title: "Formação de pessoas",
            text: "Iniciação científica, mestrado e doutorado com orientação próxima.",
          },
          {
            icon: BookOpen,
            title: "Ciência aberta",
            text: "Publicações, códigos e dados compartilhados sempre que possível.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-accent/60"
          >
            <Icon className="h-6 w-6 text-accent" />
            <h3 className="mt-5 font-display text-xl text-primary">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Linhas() {
  return (
    <Section
      id="linhas"
      tint
      eyebrow="Linhas de Pesquisa"
      title="Quatro frentes de trabalho conectadas."
      intro="Nossas linhas conversam entre si e sustentam projetos colaborativos com hospitais, secretarias de saúde e outras universidades."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {LINHAS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-card p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Equipe() {
  return (
    <Section
      id="equipe"
      eyebrow="Equipe"
      title="Pessoas que fazem a pesquisa acontecer."
      intro="Docentes, pesquisadores associados e pós-graduandos comprometidos com um ambiente colaborativo e rigoroso."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((p) => (
          <div
            key={p.name}
            className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
              {p.initials}
            </div>
            <div>
              <div className="font-display text-base text-primary">{p.name}</div>
              <div className="text-xs text-muted-foreground">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projetos() {
  return (
    <Section
      id="projetos"
      tint
      eyebrow="Projetos"
      title="O que estamos construindo agora."
      intro="Iniciativas em diferentes estágios de maturidade, do piloto à implementação em serviço."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJETOS.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-8"
          >
            <div className="absolute right-0 top-0 h-full w-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
              {p.tag}
            </div>
            <h3 className="font-display text-2xl text-primary">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Publicacoes() {
  return (
    <Section
      id="publicacoes"
      eyebrow="Publicações"
      title="Selecionadas em revistas de alto impacto."
      intro="Uma amostra recente do que temos publicado. Acesse o Lattes de cada pesquisador para a lista completa."
    >
      <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
        {PUBS.map((p) => (
          <li
            key={p.title}
            className="flex flex-col gap-4 p-6 transition-colors hover:bg-secondary/40 md:flex-row md:items-start md:gap-8 md:p-8"
          >
            <div className="flex shrink-0 items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground md:w-48">
              <FileText className="h-4 w-4 text-accent" />
              <span>{p.year}</span>
              <span className="hidden text-border md:inline">·</span>
              <span className="hidden md:inline">{p.venue}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg leading-snug text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground md:hidden">
                {p.venue}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-primary py-24 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Contato
          </div>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Vamos conversar sobre a sua próxima pesquisa.
          </h2>
          <p className="mt-5 max-w-md text-white/75">
            Parcerias acadêmicas, orientações, colaborações com serviços de
            saúde e propostas de projeto são bem-vindas.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              horizonte@ufcspa.edu.br
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              +55 (51) 3303-8700
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              R. Sarmento Leite, 245 · Porto Alegre / RS
            </li>
          </ul>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-lg border border-white/15 bg-white/[0.03] p-8 backdrop-blur"
        >
          <div className="grid gap-5">
            <Field label="Nome" placeholder="Seu nome completo" />
            <Field label="E-mail" type="email" placeholder="voce@instituicao.br" />
            <Field label="Instituição" placeholder="Universidade / Hospital" />
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                Mensagem
              </label>
              <textarea
                rows={4}
                placeholder="Como podemos colaborar?"
                className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Enviar mensagem <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">
        {label}
      </label>
      <input
        {...rest}
        className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} Grupo de Pesquisa Horizonte · UFCSPA</div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Universidade Federal de Ciências da Saúde de Porto Alegre
        </div>
      </div>
    </footer>
  );
}
