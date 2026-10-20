import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "predictcare",
    title: "PredictCare",
    status: "ongoing",
    description:
      "Plataforma de predição de risco cardiovascular a partir de prontuários eletrônicos.",
  },
  {
    id: "genosus",
    title: "GenoSUS",
    status: "ongoing",
    description: "Integração de dados genômicos em coortes brasileiras do Sistema Único de Saúde.",
  },
  {
    id: "vigiars",
    title: "VigiaRS",
    status: "completed",
    description: "Painel de vigilância epidemiológica para arboviroses no Rio Grande do Sul.",
  },
  {
    id: "teletriagem",
    title: "TeleTriagem",
    status: "pilot",
    description: "Assistente de triagem clínica baseado em LLMs para atenção primária.",
  },
];
