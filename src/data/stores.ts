import type { Store } from "@/types/index";

/**
 * Partner store data for the Bouillonnantes store locator.
 *
 * Each field:
 *   id        — unique identifier (kebab-case)
 *   name      — shop display name
 *   category  — 'epicerie' | 'boucherie' | 'bio' | 'strategique'
 *   address   — full street address, Nantes
 *   lat       — latitude  (decimal degrees, WGS84)
 *   lng       — longitude (decimal degrees, WGS84)
 *
 * To find lat/lng for a new address: open maps.google.com, search the address,
 * right-click the pin → "What's here?" — copy the coordinates shown.
 *
 * To add a new store, copy this block and paste it into the array:
 *
 * {
 *   id: "nom-boutique",
 *   name: "Nom de la boutique",
 *   category: "epicerie",
 *   address: "12 Rue Exemple, 44000 Nantes",
 *   lat: 47.218,
 *   lng: -1.553,
 * },
 */
export const stores: Store[] = [
  {
    id: "epicerie-fine-du-passage",
    name: "Épicerie Fine du Passage",
    category: "epicerie",
    address: "2 Passage Pommeraye, 44000 Nantes",
    lat: 47.2135,
    lng: -1.5556,
  },
  {
    id: "la-cave-des-gourmets",
    name: "La Cave des Gourmets",
    category: "epicerie",
    address: "18 Rue de la Bâclerie, 44000 Nantes",
    lat: 47.2142,
    lng: -1.5523,
  },
  {
    id: "boucherie-saint-nicolas",
    name: "Boucherie Saint-Nicolas",
    category: "boucherie",
    address: "34 Rue Saint-Nicolas, 44000 Nantes",
    lat: 47.211,
    lng: -1.5498,
  },
  {
    id: "boucherie-artisanale-mellinet",
    name: "Boucherie Artisanale Mellinet",
    category: "boucherie",
    address: "7 Place Mellinet, 44100 Nantes",
    lat: 47.2088,
    lng: -1.5625,
  },
  {
    id: "bio-c-bon-nantes-centre",
    name: "Bio C Bon Nantes Centre",
    category: "bio",
    address: "22 Rue d'Orléans, 44000 Nantes",
    lat: 47.2178,
    lng: -1.5529,
  },
  {
    id: "la-vie-claire-ile-de-nantes",
    name: "La Vie Claire Île de Nantes",
    category: "bio",
    address: "5 Boulevard Léon Bureau, 44200 Nantes",
    lat: 47.2046,
    lng: -1.5592,
  },
  {
    id: "naturalia-nantes-erdre",
    name: "Naturalia Nantes Erdre",
    category: "bio",
    address: "40 Rue de l'Erdre, 44000 Nantes",
    lat: 47.2216,
    lng: -1.5441,
  },
  {
    id: "marche-talensac",
    name: "Marché de Talensac",
    category: "strategique",
    address: "Place de Talensac, 44000 Nantes",
    lat: 47.2162,
    lng: -1.5622,
  },
  {
    id: "epicerie-du-bouffay",
    name: "Épicerie du Bouffay",
    category: "epicerie",
    address: "10 Place du Bouffay, 44000 Nantes",
    lat: 47.2124,
    lng: -1.5509,
  },
  {
    id: "fromagerie-royale",
    name: "Fromagerie Royale",
    category: "epicerie",
    address: "5 Rue Royale, 44000 Nantes",
    lat: 47.2158,
    lng: -1.5539,
  },
  {
    id: "boucherie-chantenay",
    name: "Boucherie de Chantenay",
    category: "boucherie",
    address: "18 Rue de la Montagne, 44100 Nantes",
    lat: 47.2072,
    lng: -1.5783,
  },
  {
    id: "biocoop-nantes-doulon",
    name: "Biocoop Nantes Doulon",
    category: "bio",
    address: "93 Route de Sainte-Luce, 44300 Nantes",
    lat: 47.2136,
    lng: -1.5186,
  },
  {
    id: "cave-a-manger-graslin",
    name: "La Cave à Manger Graslin",
    category: "epicerie",
    address: "1 Rue Scribe, 44000 Nantes",
    lat: 47.2148,
    lng: -1.5601,
  },
  {
    id: "marche-de-la-petite-hollande",
    name: "Marché de la Petite Hollande",
    category: "strategique",
    address: "Place de la Petite Hollande, 44000 Nantes",
    lat: 47.2106,
    lng: -1.5546,
  },
  {
    id: "les-halles-du-bouffay",
    name: "Les Halles du Bouffay",
    category: "strategique",
    address: "3 Rue de la Boucherie, 44000 Nantes",
    lat: 47.2118,
    lng: -1.5516,
  },
  {
    id: "boucherie-de-la-chapelle",
    name: "Boucherie de la Chapelle",
    category: "boucherie",
    address: "14 Rue de la Chapelle, 44000 Nantes",
    lat: 47.2254,
    lng: -1.5463,
  },
];
