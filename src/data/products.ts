export interface Product {
  id: "boeuf" | "poulet" | "porc-asiatique";
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "boeuf",
    name: "Bouillon de Bœuf",
    tagline: "La chaleur classique",
    description:
      "Mijoté lentement à partir d'os de bœuf bio sélectionnés, notre bouillon de bœuf dévoile des arômes profonds et une richesse en collagène naturel. Idéal en tasse le matin, comme base de sauce ou pour sublimer un risotto.",
    benefits: ["Riche en collagène naturel", "Os de bœuf bio", "Mijoté 18 heures", "Sans conservateur"],
    image: "/images/products/boeuf.webp",
  },
  {
    id: "poulet",
    name: "Bouillon de Poulet",
    tagline: "La légèreté dorée",
    description:
      "Élaboré à partir de carcasses de poulet fermier élevé en plein air, ce bouillon offre une douceur délicate et un umami subtil. Parfait pour les soupes, les céréales cuisinées ou simplement bu chaud dans une grande tasse.",
    benefits: ["Poulet fermier plein air", "Douceur et umami", "Faible en matières grasses", "Sans gluten"],
    image: "/images/products/poulet.webp",
  },
  {
    id: "porc-asiatique",
    name: "Bouillon Porc Asiatique",
    tagline: "L'aventure inattendue",
    description:
      "Notre référence signature : un bouillon de porc aux notes de gingembre, citronnelle et anis étoilé. Une invitation au voyage dans chaque gorgée — aussi bien en ramen maison qu'en marinade pour grillades.",
    benefits: ["Notes de gingembre & citronnelle", "Polyvalent cuisine asiatique", "Épices bio", "Porc élevé localement"],
    image: "/images/products/porc-asiatique.webp",
  },
];
