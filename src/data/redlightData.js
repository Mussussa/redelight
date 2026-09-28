// src/data/redlightData.js

export const COMPANY_INFO = {
  name: "Redelight MOZ",
  tagline: "A solução é a razão da nossa existência.",
  whatsapp: "258877305740",
  location: "Atendimento Residencial e Comercial",
};

export const SERVICES = [
  {
    id: "serv-1",
    title: "Instalação Elétrica Residencial e Comercial",
    icon: "⚡",
    description: "Montagem de quadros elétricos de distribuição, cablagem completa, instalação de tomadas, iluminação LED e automação.",
    features: ["Montagem de Quadros", "Iluminação LED", "Passagem de Fiação", "Dimensionamento de Carga"]
  },
  {
    id: "serv-2",
    title: "Reparação de Equipamentos Eletrónicos",
    icon: "🛠️",
    description: "Diagnóstico técnico especializado e reparação de placas eletrónicas, módulos, televisores, sistemas de som e eletrodomésticos.",
    features: ["Reparo de Placas", "Diagnóstico Técnico", "Substituição de Componentes", "Garantia de Serviço"]
  },
  {
    id: "serv-3",
    title: "Manutenção Preventiva e Inspeção Técnico-Elétrica",
    icon: "🔍",
    description: "Verificação de segurança, correção de fugas de corrente, substituição de fiação antiga e prevenção de curtos-circuitos.",
    features: ["Aferição de Corrente", "Troca de Disjuntores", "Eliminação de Curtos", "Laudo Técnico"]
  }
];

export const PRODUCTS = [
  {
    id: "RL-101",
    name: "Mecanismo de Tomada Legrand Encastrar",
    category: "Acessórios e Tomadas",
    price: 280,
    image: "/img1.jpeg",
    description: "Mecanismo interno para tomada Legrand com contactos de ligação à terra. Elevada durabilidade e facilidade de montagem.",
    available: true,
    badge: "Componente"
  },
  {
    id: "RL-102",
    name: "Mecanismo de Tomada Schuko Legrand IP21",
    category: "Acessórios e Tomadas",
    price: 300,
    image: "/img2.jpeg",
    description: "Mecanismo de tomada Schuko Legrand para embutir com proteção IP21.",
    available: true,
    badge: "Qualidade"
  },
  {
    id: "RL-103",
    name: "Tomada Legrand SUNO Simples (1 Posto 10A/250V~)",
    category: "Acessórios e Tomadas",
    price: 350,
    image: "/img3.jpeg",
    description: "Tomada individual Legrand da linha SUNO com acabamento metálico para montagem.",
    available: true,
    badge: "Qualidade Premium"
  },
  {
    id: "RL-104",
    name: "Tomada Legrand SUNO Completa com Espelho",
    category: "Acessórios e Tomadas",
    price: 400,
    image: "/img4.jpeg",
    description: "Tomada simples Legrand SUNO pronta a instalar, com espelho e acabamento em branco.",
    available: true,
    badge: "Mais Vendido"
  },
  {
    id: "RL-105",
    name: "Kit Tomadas Legrand SUNO (Simples e Dupla 10A/250V~)",
    category: "Acessórios e Tomadas",
    price: 600,
    image: "/img5.jpeg",
    description: "Tomadas Legrand SUNO de 1 posto e 2 postos. Garantia de qualidade e segurança para a sua instalação elétrica.",
    available: true,
    badge: "Destaque"
  },
  {
    id: "RL-106",
    name: "Quadro de Distribuição Elétrica Modular (DB-04 / DB-06 / DB-12)",
    category: "Proteção Elétrica",
    price: 2200,
    image: "/img6.jpeg",
    description: "Quadros de distribuição com barramentos de Neutro (N) e Terra (PE). Suporta disjuntores DIN, RCCB e protetores de surto SPD.",
    available: true,
    badge: "Profissional"
  },
  {
    id: "RL-107",
    name: "Conjunto Tomada e Interruptor de Parede Moderno",
    category: "Acessórios e Tomadas",
    price: 500,
    image: "/img7.jpeg",
    description: "Módulos de tomada e interruptor simples com design minimalista branco quadrado.",
    available: true,
    badge: "Design Moderno"
  },
  {
    id: "RL-108",
    name: "Painel Plafond LED Quadrado",
    category: "Iluminação",
    price: 750,
    image: "/img8.jpeg",
    description: "Painel de iluminação LED quadrado para teto, oferece iluminação uniforme com baixo consumo energético.",
    available: true,
    badge: "Económico"
  },
  {
    id: "RL-109",
    name: "Projetor LED Refletor Spotlight 50W IP65 Outdoor",
    category: "Iluminação",
    price: 1800,
    image: "/img9.jpeg",
    description: "Projetor LED de alta potência (50W) com índice de proteção IP65 contra água e poeira. Ideal para exteriores.",
    available: true,
    badge: "Resistente a Água"
  },
  {
    id: "RL-110",
    name: "Painel Plafond LED Redondo Embutir",
    category: "Iluminação",
    price: 700,
    image: "/img10.jpeg",
    description: "Luminária de teto circular com luz LED distribuída de forma homogénea e acabamento fino.",
    available: true,
    badge: "Novo"
  },
  {
    id: "RL-111",
    name: "Módulos de Proteção Elétrica DIN (MCB, RCCB, SPD, Main Isolator)",
    category: "Proteção Elétrica",
    price: 1200,
    image: "/img11.jpeg",
    description: "Linha completa de componentes de proteção elétrica para quadro: Disjuntores Unipolar/Bipolar (MCB 1P/2P), Interruptor Diferencial (RCCB), Protetor de Surtos (SPD) e Interruptor Geral 63A.",
    available: true,
    badge: "Proteção Completa"
  },
  {
    id: "RL-112",
    name: "Projetor LED Breelos 50W IP65 Waterproof",
    category: "Iluminação",
    price: 1850,
    image: "/img12.jpeg",
    description: "Refletor LED Breelos 50W de alta resistência, proteção IP65 contra chuva e poeira, com suporte ajustável para instalação externa.",
    available: true,
    badge: "Alta Durabilidade"
  },
  {
    id: "RL-113",
    name: "Disjuntores EFAPEL (Bipolar e Diferencial)",
    category: "Proteção Elétrica",
    price: 1400,
    image: "/img13.jpeg",
    description: "Disjuntor Bipolar (55132 2CP) e Disjuntor Diferencial (55640 2DC) da marca EFAPEL. Proteção de alta qualidade para circuitos residenciais e comerciais.",
    available: true,
    badge: "Certificado Efapel"
  }
];