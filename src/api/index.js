const mockServices = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Ilhéus, BA",
    service: "Aulas de violão",
    rating: 4.8,
    reviews: 23,
    tags: ["Música", "Ensino", "Violão"],
  },
  {
    id: 2,
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    service: "Conserto de computadores",
    rating: 4.9,
    reviews: 45,
    tags: ["Tecnologia", "Reparo"],
  },
  {
    id: 3,
    name: "Deide Costa",
    location: "Belo Horizonte, BH",
    service: "Tradução Inglês-Português",
    rating: 4.7,
    reviews: 18,
    tags: ["Idiomas", "Tradução"],
  },
  {
    id: 4,
    name: "Nikole Ferreira",
    location: "Brasília, DF",
    service: "Aulas de retórica",
    rating: 1.3,
    reviews: 22,
    tags: ["Debate", "Retórica"],
  },
  {
    id: 5,
    name: "Olavo de Carvalho",
    location: "Brasília, DF",
    service: "Aulas de Filosofia",
    rating: 2.2,
    reviews: 202,
    tags: ["Política", "Filosofia"],
  },
];

const mockProfiles = {
  1: {
    id: 1,
    name: "Maria Silva",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop&crop=faces",
    location: "Ilhéus, BA",
    rating: 4.8,
    reviews: 23,
    headline:
      "Professora de música há 10 anos, especializada em violão e piano. Adoro ensinar e compartilhar conhecimento musical!",
    tags: ["Música", "Ensino", "Violão", "Piano"],
    offeredServices: [
      {
        title: "Aulas de Violão",
        tags: ["Música", "Ensino", "Violão"],
        description: "Aulas personalizadas de violão para iniciantes e intermediários",
      },
      {
        title: "Aulas de Piano",
        tags: ["Música", "Ensino", "Piano"],
        description: "Ensino básico de piano e teoria musical",
      },
    ],
    exchangeNeeds: [
      "Aulas de idiomas (inglês, espanhol)",
      "Consultoria em marketing digital",
      "Aulas de culinária",
      "Serviços de design gráfico",
    ],
    about:
      "Professora com uma década de experiência em aulas presenciais e online. Trabalho com repertório popular e clássico, métodos adaptados ao aluno e ênfase em técnica e expressão.",
  },
  2: {
    id: 2,
    name: "João Santos",
    avatar: null,
    location: "Rio de Janeiro, RJ",
    rating: 4.9,
    reviews: 45,
    headline: "Técnico em informática com 8 anos de experiência em manutenção de computadores.",
    tags: ["Tecnologia", "Reparo"],
    offeredServices: [
      {
        title: "Conserto de computadores",
        tags: ["Tecnologia"],
        description: "Reparo e manutenção de desktops e notebooks.",
      },
    ],
    exchangeNeeds: ["Aulas de idiomas (inglês)", "Consultoria em marketing digital"],
    about:
      "Trabalho com diagnóstico e reparo de hardware e software, formatação, recuperação de dados.",
  },
  3: {
    id: 3,
    name: "Deide Costa",
    avatar: null,
    location: "Belo Horizonte, BH",
    rating: 4.7,
    reviews: 18,
    headline: "Tradutora especializada em inglês-português.",
    tags: ["Idiomas", "Tradução"],
    offeredServices: [
      {
        title: "Tradução Inglês-Português",
        tags: ["Idiomas"],
        description: "Traduções técnicas e generalistas.",
      },
    ],
    exchangeNeeds: ["Aulas de culinária"],
    about: "Atuo com traduções técnicas e revisão de textos.",
  },
  4: {
    id: 4,
    name: "Nikole Ferreira",
    avatar: null,
    location: "Brasília, DF",
    rating: 1.3,
    reviews: 22,
    headline: "Instrutora de retórica e oratória.",
    tags: ["Debate", "Retórica"],
    offeredServices: [
      {
        title: "Aulas de retórica",
        tags: ["Debate"],
        description: "Treinamento de fala em público e argumentação.",
      },
    ],
    exchangeNeeds: [],
    about: "Aulas voltadas para performance e estrutura de discursos.",
  },
  5: {
    id: 5,
    name: "Olavo de Carvalho",
    avatar: null,
    location: "Brasília, DF",
    rating: 2.2,
    reviews: 202,
    headline: "Professor de filosofia.",
    tags: ["Política", "Filosofia"],
    offeredServices: [
      {
        title: "Aulas de Filosofia",
        tags: ["Filosofia"],
        description: "Discussões e leitura de textos clássicos.",
      },
    ],
    exchangeNeeds: ["Serviços de design gráfico"],
    about: "Professor com interesse em pensamento crítico e história das ideias.",
  },
};

export async function getServices({ delay = 400 } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockServices]), delay);
  });
}

export async function getProfile(id, { delay = 400 } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(typeof id === "number" || /^\d+$/.test(String(id)))) {
        reject(new Error("getProfile requires a numeric id"));
        return;
      }

      const p = mockProfiles[Number(id)];
      if (p) resolve({ ...p });
      else reject(new Error("Perfil não encontrado"));
    }, delay);
  });
}

export default { getServices, getProfile };
