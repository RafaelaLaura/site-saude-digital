export type Partner = {
  id: string;
  name: string;
  url: string;
  /** Imagem do logotipo (importe de `src/assets/partners/`). Sem ela, o nome é exibido em texto. */
  logo?: string;
  logoHeight?: number;
};
