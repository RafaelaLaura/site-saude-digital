export type Member = {
  name: string;
  lattesUrl?: string;
};

export type Linha = {
  name: string;
  students: number;
  researchers: number;
  objective: string;
  participants: number[];
};

export const TEAM = [
  { name: "Dra. Helena Vasconcelos", role: "Coordenadora · Ciência de Dados", initials: "HV" },
  { name: "Dr. Rafael Ximenes", role: "Vice-coordenador · Bioinformática", initials: "RX" },
  { name: "Dra. Marina Coelho", role: "Pesquisadora · Saúde Pública", initials: "MC" },
  { name: "Dr. Bruno Aguiar", role: "Pesquisador · IA Aplicada", initials: "BA" },
  { name: "Luísa Menezes", role: "Doutoranda · Epidemiologia", initials: "LM" },
  { name: "Thiago Rocha", role: "Mestrando · Aprendizado de Máquina", initials: "TR" },
];

export const MEMBERS: Member[] = [
  {
    name: "Prof. Dr. Muriel Figueredo Franco",
    lattesUrl: "http://lattes.cnpq.br/5417317635081894",
  },
  {
    name: "Prof Dra. Juliana Silva Herbert",
    lattesUrl: "http://lattes.cnpq.br/7180951922379856",
  },
  {
    name: "Raíssa Nunes dos Santos",
    lattesUrl: "http://lattes.cnpq.br/2163318737122448",
  },
  {
    name: "Profa. Dra. Isabel Cristina Siqueira da Silva",
    lattesUrl: "http://lattes.cnpq.br/7221692456270122",
  },
  {
    name: "Prof. Dr. Sílvio César Cazella",
    lattesUrl: "http://lattes.cnpq.br/9173977294178020",
  },
  {
    name: "Cláudio Luiz Salvalaio",
    lattesUrl: "http://lattes.cnpq.br/0550133671937549",
  },
  {
    name: "Denise Munchen Brandao",
    lattesUrl: "http://lattes.cnpq.br/0103377631480249",
  },
  {
    name: "Fernando Barcelos Rosito",
    lattesUrl: "http://lattes.cnpq.br/8901297427749841",
  },
  {
    name: "Vinícius Vicente Soares",
    lattesUrl: "http://lattes.cnpq.br/7547504820935924",
  },
  {
    name: "Graciele Fernanda da Costa Linch",
    lattesUrl: "http://lattes.cnpq.br/4314635435676056",
  },
  {
    name: "Maria Eugênia Bresolin Pinto",
    lattesUrl: "http://lattes.cnpq.br/9611281263934506",
  },
  {
    name: "Alcyr Alves de Oliveira",
    lattesUrl: "http://lattes.cnpq.br/8243781392342839",
  },
  {
    name: "Maria Eduarda Machado Silva",
    lattesUrl: "http://lattes.cnpq.br/3316169400498752",
  },
  {
    name: "Natália Castro Dullius",
    lattesUrl: "http://lattes.cnpq.br/6324478755175042",
  },
  {
    name: "Profa. Dra. Adriana Aparecida Paz",
    lattesUrl: "http://lattes.cnpq.br/4155476800472632",
  },
  {
    name: "Julyhe Nunes Paulin",
    lattesUrl: "http://lattes.cnpq.br/0056150305269769",
  },
  {
    name: "José Antônio Linch Burmann",
    lattesUrl: "http://lattes.cnpq.br/5817399860875888",
  },
];

export const LINHAS: Linha[] = [
  {
    name: "Cibersegurança em Saúde",
    students: 0,
    researchers: 1,
    objective:
      "Linha de pesquisa relacionada à segurança da informação e de sistemas cibernéticos utilizados no setor da saúde. Envolve o mapeamento das superfícies de ciberataque, avaliação de riscos e desenvolvimento de soluções para mitigação de riscos e impactos de ciberataques na saúde.",
    participants: [0],
  },
  {
    name: "Engenharia de Software Biomédico",
    students: 0,
    researchers: 1,
    objective:
      "Linha de pesquisa que investiga o desenvolvimento, a avaliação e a evolução de sistemas de software aplicados à área da saúde, considerando suas dimensões técnicas, clínicas, organizacionais e sociais. Envolve a aplicação de métodos e práticas da engenharia de software ao longo do ciclo de vida de sistemas biomédicos, incluindo qualidade, usabilidade, segurança, interoperabilidade e integração de sistemas. A pesquisa também aborda inovação em saúde digital, apoio à decisão e aplicações digitais",
    participants: [1],
  },
  {
    name: "Inteligência Artificial e Ciência de Dados aplicadas à Saúde",
    students: 4,
    researchers: 5,
    objective:
      "Linha de pesquisa que integra Inteligência Artificial e Ciência de Dados com foco na área da saúde e, principalmente na saúde digital. Apresenta ênfase em modelagem do conhecimento, aprendizado de máquina, aprendizado profundo de máquina, processamento de linguagem natural, grandes modelos de linguagem, agentes inteligentes, entre outras. Contempla a coleta de dados via dispositivos médicos e soluções baseadas em Internet das Coisas e vestíveis, além do processo de descoberta de conhecimento.",
    participants: [2, 0, 3, 1, 4, 5, 6, 7, 8],
  },
  {
    name: "Sistemas Gráficos Interativos aplicados à Saúde",
    students: 5,
    researchers: 5,
    objective:
      "Linha de pesquisa voltada ao projeto, ao desenvolvimento e à avaliação de soluções computacionais mais eficazes, acessíveis e humanas na área da saúde. Acolhe, assim, projetos de pesquisa com temáticas relacionadas à visualização (dados, científica, analítica), ao processamento de imagens, à visão computacional, à interação humano-computador, a jogos digitais, a simulações gráficas e à realidade estendida (virtual, aumentada, mista, holografia).",
    participants: [9, 10, 11, 3, 4, 5, 6, 12, 8, 13],
  },
  {
    name: "Tecnologia da Informação e Comunicação em Saúde",
    students: 4,
    researchers: 6,
    objective:
      "Linha de pesquisa envolvendo áreas como telessaúde, interoperabilidade, internet das coisas, tecnologia vestível, computação móvel, entre outras, aplicadas à saúde. Engloba, assim, ferramentas, hardware, software e redes (internet, telefonia) que processam, armazenam e transmitem dados, integrando a tecnologia da informação com sistemas de comunicação e focando em inovação.",
    participants: [14, 9, 4, 0, 3, 1, 5, 6, 15, 16],
  },
];
