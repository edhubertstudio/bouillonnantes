export interface Store {
  id: string;
  name: string;
  category: "epicerie" | "boucherie" | "bio" | "strategique";
  address: string;
  lat: number;
  lng: number;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  image: string;
  timeMinutes: number;
  difficulty: "facile" | "moyen" | "avancé";
  ingredients: string[];
  steps: string[];
  productRef: "boeuf" | "poulet" | "porc-asiatique";
}
