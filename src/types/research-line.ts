/** Linha de pesquisa como a API a devolve (sem a lista de participantes). */
export type ResearchLine = {
  id: string;
  name: string;
  studentCount: number;
  researcherCount: number;
  objective: string;
};
