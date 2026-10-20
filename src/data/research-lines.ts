import type { ResearchLine } from "@/types/research-line";

/** Dado interno: a linha + os ids dos participantes (a API expõe os participantes em outra rota). */
export type ResearchLineRecord = ResearchLine & {
  /** Ids de `MEMBERS`. */
  memberIds: string[];
};

export const RESEARCH_LINES: ResearchLineRecord[] = [
  {
    id: "ciberseguranca-em-saude",
    name: "Cibersegurança em Saúde",
    studentCount: 0,
    researcherCount: 1,
    objective:
      "Linha de pesquisa relacionada à segurança da informação e de sistemas cibernéticos utilizados no setor da saúde. Envolve o mapeamento das superfícies de ciberataque, avaliação de riscos e desenvolvimento de soluções para mitigação de riscos e impactos de ciberataques na saúde.",
    memberIds: ["muriel-figueredo-franco"],
  },
  {
    id: "engenharia-de-software-biomedico",
    name: "Engenharia de Software Biomédico",
    studentCount: 0,
    researcherCount: 1,
    objective:
      "Linha de pesquisa que investiga o desenvolvimento, a avaliação e a evolução de sistemas de software aplicados à área da saúde, considerando suas dimensões técnicas, clínicas, organizacionais e sociais. Envolve a aplicação de métodos e práticas da engenharia de software ao longo do ciclo de vida de sistemas biomédicos, incluindo qualidade, usabilidade, segurança, interoperabilidade e integração de sistemas. A pesquisa também aborda inovação em saúde digital, apoio à decisão e aplicações digitais",
    memberIds: ["juliana-silva-herbert"],
  },
  {
    id: "inteligencia-artificial-e-ciencia-de-dados-aplicadas-a-saude",
    name: "Inteligência Artificial e Ciência de Dados aplicadas à Saúde",
    studentCount: 4,
    researcherCount: 5,
    objective:
      "Linha de pesquisa que integra Inteligência Artificial e Ciência de Dados com foco na área da saúde e, principalmente na saúde digital. Apresenta ênfase em modelagem do conhecimento, aprendizado de máquina, aprendizado profundo de máquina, processamento de linguagem natural, grandes modelos de linguagem, agentes inteligentes, entre outras. Contempla a coleta de dados via dispositivos médicos e soluções baseadas em Internet das Coisas e vestíveis, além do processo de descoberta de conhecimento.",
    memberIds: [
      "raissa-nunes-santos",
      "muriel-figueredo-franco",
      "isabel-cristina-silva",
      "juliana-silva-herbert",
      "silvio-cesar-cazella",
      "claudio-luiz-salvalaio",
      "denise-munchen-brandao",
      "fernando-barcelos-rosito",
      "vinicius-vicente-soares",
    ],
  },
  {
    id: "sistemas-graficos-interativos-aplicados-a-saude",
    name: "Sistemas Gráficos Interativos aplicados à Saúde",
    studentCount: 5,
    researcherCount: 5,
    objective:
      "Linha de pesquisa voltada ao projeto, ao desenvolvimento e à avaliação de soluções computacionais mais eficazes, acessíveis e humanas na área da saúde. Acolhe, assim, projetos de pesquisa com temáticas relacionadas à visualização (dados, científica, analítica), ao processamento de imagens, à visão computacional, à interação humano-computador, a jogos digitais, a simulações gráficas e à realidade estendida (virtual, aumentada, mista, holografia).",
    memberIds: [
      "graciele-fernanda-linch",
      "maria-eugenia-pinto",
      "alcyr-alves-oliveira",
      "isabel-cristina-silva",
      "silvio-cesar-cazella",
      "claudio-luiz-salvalaio",
      "denise-munchen-brandao",
      "maria-eduarda-silva",
      "vinicius-vicente-soares",
      "natalia-castro-dullius",
    ],
  },
  {
    id: "tecnologia-da-informacao-e-comunicacao-em-saude",
    name: "Tecnologia da Informação e Comunicação em Saúde",
    studentCount: 4,
    researcherCount: 6,
    objective:
      "Linha de pesquisa envolvendo áreas como telessaúde, interoperabilidade, internet das coisas, tecnologia vestível, computação móvel, entre outras, aplicadas à saúde. Engloba, assim, ferramentas, hardware, software e redes (internet, telefonia) que processam, armazenam e transmitem dados, integrando a tecnologia da informação com sistemas de comunicação e focando em inovação.",
    memberIds: [
      "adriana-aparecida-paz",
      "graciele-fernanda-linch",
      "silvio-cesar-cazella",
      "muriel-figueredo-franco",
      "isabel-cristina-silva",
      "juliana-silva-herbert",
      "claudio-luiz-salvalaio",
      "denise-munchen-brandao",
      "julyhe-nunes-paulin",
      "jose-antonio-burmann",
    ],
  },
];
