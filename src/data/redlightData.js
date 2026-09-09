// src/data/redlightData.js

export const COMPANY_INFO = {
  name: "Redelight",
  tagline: "Soluções Elétricas, Reparação Eletrónica e Materiais de Instalação",
  whatsapp: "258840000000", // Insira o número da Redlight com código de país (ex: 258 para Moçambique)
  location: "Atendimento Residencial e Comercial",
};

export const SERVICES = [
  {
    id: "serv-1",
    title: "Instalação Elétrica Residencial",
    icon: "⚡",
    description: "Montagem de quadros elétricos, redes elétricas completas, tomadas, disjuntores, iluminação LED e automação residencial.",
    features: ["Montagem de Quadros", "Iluminação LED", "Passagem de Fiação", "Dimensionamento de Carga"]
  },
  {
    id: "serv-2",
    title: "Reparação de Equipamentos Eletrónicos",
    icon: "🛠️",
    description: "Diagnóstico técnico e reparação de placas eletrónicas, módulos, televisores, sistemas de som e eletrodomésticos.",
    features: ["Reparo de Placas", "Diagnóstico Técnico", "Substituição de Componentes", "Garantia de Serviço"]
  },
  {
    id: "serv-3",
    title: "Manutenção Preventiva e Inspeção",
    icon: "🔍",
    description: "Verificação de segurança, correção de fuga de corrente, substituição de fiação antiga e prevenção de curtos-circuitos.",
    features: ["Aferição de Corrente", "Troca de Disjuntores", "Eliminação de Curtos", "Laudo Técnico"]
  }
];

export const PRODUCTS = [
  {
    id: "RL-101",
    name: "Cabo Elétrico Flexível 2.5mm (Rolo 100m)",
    category: "Cabos e Fios",
    price: 2500,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description: "Cabo flexível de alta condutividade e isolamento antichama. Ideal para instalações residenciais de tomadas.",
    available: true,
    badge: "Mais Vendido"
  },
  {
    id: "RL-102",
    name: "Disjuntor Termomagnético DIN Unipolar 20A",
    category: "Proteção Elétrica",
    price: 350,
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=600&q=80",
    description: "Proteção contra sobrecarga e curto-circuito em redes elétricas residenciais e comerciais.",
    available: true,
    badge: "Essencial"
  },
  {
    id: "RL-103",
    name: "Painel Plafond LED Embutir 24W (Luz Branca)",
    category: "Iluminação",
    price: 650,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    description: "Luminária de encastrar elegante, com alta economia de energia e distribuição uniforme de luz.",
    available: true,
    badge: "Novo"
  },
  {
    id: "RL-104",
    name: "Kit Tomadas e Interruptores Modulares Duplos",
    category: "Acessórios",
    price: 420,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description: "Conjunto completo modular com acabamento moderno em acrílico branco.",
    available: true,
    badge: "Promoção"
  }
];