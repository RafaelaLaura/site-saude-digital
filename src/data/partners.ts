import cnpqLogo from "@/assets/partners/cnpq.png";
import ufcspaLogo from "@/assets/partners/ufcspa.png";
import type { Partner } from "@/types/partner";

/**
 * Instituições de apoio e financiamento exibidas na página.
 *
 * Para exibir o logotipo oficial: salve o arquivo (SVG ou PNG) em `src/assets/partners/`,
 * importe-o aqui e preencha `logo`. Use sempre a versão oficial, conforme o manual de marca.
 */
export const PARTNERS: Partner[] = [
  {
    id: "ufcspa",
    name: "Universidade Federal de Ciências da Saúde de Porto Alegre",
    url: "https://www.ufcspa.edu.br",
    logo: ufcspaLogo,
    logoHeight: 40,
  },
  {
    id: "cnpq",
    name: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
    url: "https://www.gov.br/cnpq",
    logo: cnpqLogo,
    logoHeight: 56,
  },
];
