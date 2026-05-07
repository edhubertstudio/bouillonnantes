import type { Recipe } from "@/types/index";

/**
 * Recipe data for the Bouillonnantes recipe section.
 *
 * Each field:
 *   slug        — URL-safe string (lowercase, hyphens, no accents)
 *   title       — French recipe name
 *   description — one-line teaser (used on RecipeCard)
 *   image       — path relative to /public (e.g. /images/recipes/ramen-poulet.webp)
 *   timeMinutes — total prep + cook time
 *   difficulty  — 'facile' | 'moyen' | 'avancé'
 *   ingredients — French ingredient list
 *   steps       — numbered preparation steps in French
 *   productRef  — which Bouillonnantes product to use
 *
 * Image convention: /images/recipes/{slug}.webp
 * To look up a slug: take the French title, lowercase, remove accents, replace spaces with hyphens.
 *
 * To add a new recipe, copy this block and paste it into the array:
 *
 * {
 *   slug: "nom-de-la-recette",
 *   title: "Nom de la Recette",
 *   description: "Courte description en une ligne.",
 *   image: "/images/recipes/nom-de-la-recette.webp",
 *   timeMinutes: 30,
 *   difficulty: "facile",
 *   ingredients: ["500 ml bouillon", "..."],
 *   steps: ["Étape 1 : ...", "Étape 2 : ..."],
 *   productRef: "boeuf",
 * },
 */
export const recipes: Recipe[] = [
  {
    slug: "ramen-maison-porc-asiatique",
    title: "Ramen Maison au Porc Asiatique",
    description: "Un bol fumant aux notes de gingembre et citronnelle, prêt en 30 minutes.",
    image: "/images/recipes/ramen-maison-porc-asiatique.webp",
    timeMinutes: 30,
    difficulty: "facile",
    ingredients: [
      "600 ml de Bouillon Porc Asiatique Bouillonnantes",
      "120 g de nouilles ramen",
      "2 œufs mollets",
      "100 g de porc effiloché ou tranché fin",
      "1 poignée de pousses de bambou",
      "2 oignons verts émincés",
      "1 feuille de nori",
      "1 c. à s. de sauce soja",
      "1 c. à c. d'huile de sésame",
    ],
    steps: [
      "Portez le bouillon à frémissement dans une casserole. Ajoutez la sauce soja et l'huile de sésame.",
      "Faites cuire les nouilles selon les indications du paquet, égouttez-les.",
      "Préparez vos œufs mollets : 6 minutes 30 dans l'eau bouillante, puis bain d'eau froide et écalez.",
      "Répartissez les nouilles dans deux grands bols. Versez le bouillon chaud par-dessus.",
      "Garnissez avec le porc, les pousses de bambou, les oignons verts et un demi-œuf.",
      "Posez la feuille de nori sur le bord du bol et servez immédiatement.",
    ],
    productRef: "porc-asiatique",
  },
  {
    slug: "risotto-au-bouillon-de-boeuf",
    title: "Risotto au Bouillon de Bœuf",
    description: "Un risotto onctueux dont la profondeur vient du bouillon d'os mijoté 18 heures.",
    image: "/images/recipes/risotto-au-bouillon-de-boeuf.webp",
    timeMinutes: 40,
    difficulty: "moyen",
    ingredients: [
      "800 ml de Bouillon de Bœuf Bouillonnantes",
      "300 g de riz arborio",
      "1 oignon jaune finement émincé",
      "2 gousses d'ail",
      "150 ml de vin blanc sec",
      "60 g de parmesan râpé",
      "2 c. à s. de beurre",
      "1 c. à s. d'huile d'olive",
      "Sel, poivre, persil plat",
    ],
    steps: [
      "Faites chauffer le bouillon dans une petite casserole et maintenez-le chaud à feu doux.",
      "Dans une grande sauteuse, faites revenir l'oignon et l'ail dans l'huile d'olive 3 minutes.",
      "Ajoutez le riz, faites-le nacrer 2 minutes en remuant constamment.",
      "Versez le vin blanc, remuez jusqu'à absorption complète.",
      "Ajoutez le bouillon louche par louche, en attendant l'absorption avant chaque ajout. Comptez 18 minutes.",
      "Hors du feu, incorporez le beurre et le parmesan. Rectifiez l'assaisonnement.",
      "Servez aussitôt, parsemé de persil plat ciselé.",
    ],
    productRef: "boeuf",
  },
  {
    slug: "soupe-poulet-legumes-hivernale",
    title: "Soupe de Poulet aux Légumes Hivernaux",
    description: "La soupe réconfortante du dimanche soir — légère, dorée, parfumée.",
    image: "/images/recipes/soupe-poulet-legumes-hivernale.webp",
    timeMinutes: 25,
    difficulty: "facile",
    ingredients: [
      "1 L de Bouillon de Poulet Bouillonnantes",
      "2 carottes coupées en rondelles",
      "2 branches de céleri émincées",
      "1 poireau tranché",
      "150 g de haricots blancs cuits",
      "1 bouquet de thym frais",
      "Sel, poivre",
      "Tartines grillées pour servir",
    ],
    steps: [
      "Portez le bouillon à ébullition dans une grande casserole.",
      "Ajoutez les carottes, le céleri et le poireau. Cuisez 10 minutes.",
      "Incorporez les haricots blancs et le thym. Poursuivez la cuisson 5 minutes.",
      "Rectifiez l'assaisonnement. Retirez le thym.",
      "Servez bien chaud dans des bols profonds, avec des tartines grillées.",
    ],
    productRef: "poulet",
  },
  {
    slug: "sauce-bourguignonne-au-bouillon-de-boeuf",
    title: "Sauce Bourguignonne au Bouillon de Bœuf",
    description: "Une sauce profonde et veloutée pour sublimer une entrecôte ou un œuf poché.",
    image: "/images/recipes/sauce-bourguignonne-au-bouillon-de-boeuf.webp",
    timeMinutes: 35,
    difficulty: "moyen",
    ingredients: [
      "400 ml de Bouillon de Bœuf Bouillonnantes",
      "200 ml de vin rouge de Bourgogne",
      "200 g de champignons de Paris",
      "1 échalote finement émincée",
      "1 c. à s. de beurre",
      "1 c. à c. de fécule de maïs",
      "Sel, poivre, thym",
    ],
    steps: [
      "Faites revenir l'échalote dans le beurre jusqu'à translucidité.",
      "Ajoutez les champignons en quartiers, cuisez 5 minutes.",
      "Versez le vin rouge et réduisez de moitié à feu vif.",
      "Ajoutez le bouillon et le thym. Laissez réduire 15 minutes à feu moyen.",
      "Délayez la fécule dans 2 c. à s. d'eau froide et incorporez à la sauce en fouettant.",
      "Laissez épaissir 2 minutes. Rectifiez l'assaisonnement et servez nappé.",
    ],
    productRef: "boeuf",
  },
  {
    slug: "bol-bouillon-poulet-matinal",
    title: "Bol de Bouillon de Poulet du Matin",
    description: "Le rituel matinal le plus simple : un bol chaud, une tranche de citron, une pincée de piment.",
    image: "/images/recipes/bol-bouillon-poulet-matinal.webp",
    timeMinutes: 5,
    difficulty: "facile",
    ingredients: [
      "250 ml de Bouillon de Poulet Bouillonnantes",
      "1 tranche de citron",
      "1 pincée de piment d'Espelette",
      "Quelques feuilles de persil (optionnel)",
    ],
    steps: [
      "Chauffez le bouillon dans une petite casserole ou au micro-ondes jusqu'à frémissement.",
      "Versez dans un grand bol ou une tasse.",
      "Pressez légèrement la tranche de citron dans le bouillon.",
      "Saupoudrez de piment d'Espelette et garnissez de persil si souhaité.",
      "Buvez chaud, les deux mains autour du bol.",
    ],
    productRef: "poulet",
  },
  {
    slug: "marinade-porc-asiatique-grillades",
    title: "Marinade Porc Asiatique pour Grillades",
    description: "Le bouillon comme base de marinade : une façon de sublimer des travers de porc en 10 minutes.",
    image: "/images/recipes/marinade-porc-asiatique-grillades.webp",
    timeMinutes: 20,
    difficulty: "facile",
    ingredients: [
      "150 ml de Bouillon Porc Asiatique Bouillonnantes",
      "3 c. à s. de sauce soja",
      "2 c. à s. de miel",
      "1 c. à s. de vinaigre de riz",
      "2 gousses d'ail râpées",
      "1 c. à c. de gingembre frais râpé",
      "600 g de travers de porc",
    ],
    steps: [
      "Mélangez tous les ingrédients de la marinade dans un plat.",
      "Placez les travers de porc dans la marinade, retournez pour bien enrober.",
      "Laissez mariner au minimum 30 minutes (ou toute une nuit au réfrigérateur).",
      "Faites griller au barbecue ou au four à 200°C pendant 25 à 30 minutes en retournant à mi-cuisson.",
      "Badigeonnez avec le reste de marinade en cours de cuisson pour un glaçage brillant.",
    ],
    productRef: "porc-asiatique",
  },
];
