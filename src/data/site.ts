export type Profile = {
  name: string;
  title: string;
  affiliation: string;
  email: string;
  location: string;
  bio: string;
  interests: string[];
  avatar?: string;
  tagline: string;
  education: string;
  advisor?: string;
};

export type Links = {
  cv?: string;
  scholar?: string;
  github?: string;
  orcid?: string;
  linkedin?: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  highlight?: boolean;
  pdf?: string;
  code?: string;
  project?: string;
  note?: string;
  description?: string;
};

export const profile: Profile = {
  name: "Nihao Niu",
  title: "Undergraduate Researcher in Artificial Intelligence",
  affiliation: "School of Artificial Intelligence, Anhui University",
  email: "acmachineoier@gmail.com",
  location: "Hefei, China",
  bio: "I am an undergraduate student in Artificial Intelligence at Anhui University, where I work on efficient multimodal large language models. My research interests include visual token compression, efficient deep learning, and neural network pruning. I am particularly interested in building compact multimodal systems that preserve reasoning ability while reducing inference cost.",
  interests: [
    "Multimodal Large Language Models",
    "Visual Token Compression",
    "Efficient Deep Learning",
    "Neural Network Pruning"
  ],
  tagline: "Researching efficient multimodal systems, visual token compression, and compact model design.",
  education: "B.Eng. in Artificial Intelligence, Anhui University (2024-Present)",
  advisor: "Prof. Ke Xu",
  avatar: "avatar.jpg"
};

export const links: Links = {
  cv: "Nihao_Niu_CV.pdf",
  github: "https://github.com/ACmachine"
};

export const publications: Publication[] = [
  {
    title: "Register-Guided Context Scoring for Visual Token Compression in Multimodal LLMs",
    authors: ["Nihao Niu", "Jingyuan Zhang", "Ke Xu"],
    venue: "ACM International Conference on Multimedia (ACM MM)",
    year: 2026,
    highlight: true,
    note: "Under review. First author.",
    description: "Introduces a register-guided dual-path scoring framework for visual token compression in multimodal LLMs, targeting faster prefilling while preserving downstream reasoning and perception performance."
  }
];