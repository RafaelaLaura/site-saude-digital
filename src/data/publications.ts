import type { Publication } from "@/types/publication";

/**
 * Lista de publicações. A ordem aqui não importa: a página ordena do ano mais recente
 * para o mais antigo. Para adicionar um artigo, inclua um novo objeto neste array.
 */
export const PUBLICATIONS: Publication[] = [
  {
    id: "qber-quantifying-cyber-risks",
    year: 2024,
    venue: "arXiv (preprint)",
    title: "QBER: Quantifying Cyber Risks for Strategic Decisions",
    authors: "Franco M. F., Mullick A. R., Jha S.",
    abstract:
      "Quantifying cyber risks is essential for organizations to grasp their vulnerability to threats and make informed decisions. However, current approaches still need to work on blending economic viewpoints to provide insightful analysis. To bridge this gap, we introduce QBER approach to offer decision-makers measurable risk metrics. The QBER evaluates losses from cyberattacks, performs detailed risk analyses based on existing cybersecurity measures, and provides thorough cost assessments. Our contributions involve outlining cyberattack probabilities and risks, identifying Technical, Economic, and Legal (TEL) impacts, creating a model to gauge impacts, suggesting risk mitigation strategies, and examining trends and challenges in implementing widespread Cyber Risk Quantification (CRQ). The QBER approach serves as a guided approach for organizations to assess risks and strategically invest in cybersecurity.",
    url: "https://arxiv.org/abs/2405.03513",
  },
  {
    id: "quanttm-threat-quantification",
    year: 2024,
    venue: "arXiv (preprint)",
    title:
      "QuantTM: Business-Centric Threat Quantification for Risk Management and Cyber Resilience",
    authors: "von der Assen J., Franco M. F., Dong M., Stiller B.",
    abstract:
      "Threat modeling has emerged as a key process for understanding relevant threats within businesses. However, understanding the importance of threat events is rarely driven by the business incorporating the system. Furthermore, prioritization of threat events often occurs based on abstract and qualitative scoring. While such scores enable prioritization, they do not allow the results to be easily interpreted by decision-makers. This can hinder downstream activities, such as discussing security investments and a security control's economic applicability. This article introduces QuantTM, an approach that incorporates views from operational and strategic business representatives to collect threat information during the threat modeling process to measure potential financial loss incurred by a specific threat event. It empowers the analysis of threats' impacts and the applicability of security controls, thus supporting the threat analysis and prioritization from an economic perspective. QuantTM comprises an overarching process for data collection and aggregation and a method for business impact analysis. The performance and feasibility of the QuantTM approach are demonstrated in a real-world case study conducted in a Swiss SME to analyze the impacts of threats and economic benefits of security controls. Secondly, it is shown that employing business impact analysis is feasible and that the supporting prototype exhibits great usability.",
    url: "https://arxiv.org/abs/2402.14140",
  },
  {
    id: "rcvar-cyberattack-costs",
    year: 2024,
    venue: "Computers & Security",
    title:
      "RCVaR: an Economic Approach to Estimate Cyberattacks Costs using Data from Industry Reports",
    authors: "Franco M. F., Künzler F., von der Assen J., Feng C., Stiller B.",
    abstract:
      "Digitization increases business opportunities and the risk of companies being victims of devastating cyberattacks. Therefore, managing risk exposure and cybersecurity strategies is essential for digitized companies that want to survive in competitive markets. However, understanding company-specific risks and quantifying their associated costs is not trivial. Current approaches fail to provide individualized and quantitative monetary estimations of cybersecurity impacts. Due to limited resources and technical expertise, SMEs and even large companies are affected and struggle to quantify their cyberattack exposure. Therefore, novel approaches must be placed to support the understanding of the financial loss due to cyberattacks. This article introduces the Real Cyber Value at Risk (RCVaR), an economical approach for estimating cybersecurity costs using real-world information from public cybersecurity reports. RCVaR identifies the most significant cyber risk factors from various sources and combines their quantitative results to estimate specific cyberattacks costs for companies. Furthermore, RCVaR extends current methods to achieve cost and risk estimations based on historical real-world data instead of only probability-based simulations. The evaluation of the approach on unseen data shows the accuracy and efficiency of the RCVaR in predicting and managing cyber risks. Thus, it shows that the RCVaR is a valuable addition to cybersecurity planning and risk management processes.",
    url: "https://doi.org/10.1016/j.cose.2024.103737",
  },
];
