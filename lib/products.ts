export type Product = {
  id: number;
  brand: string;
  name: string;
  price: number;
  old: number | null;
  cat: string;
  tag: string;
  hot?: boolean;
  wm: string;
  img: string;
  desc: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=80`;

export const products: Product[] = [
  { id: 1, brand: "Lacoste", name: "Polo Piqué Blanc", price: 39.99, old: 59.99, cat: "vetements", tag: "Nouveau", wm: "LACOSTE", img: u("1521572163474-6864f9cf17ab"), desc: "Le polo iconique en piqué de coton, coupe régulière et logo brodé. Un essentiel intemporel qui traverse les saisons sans jamais se démoder." },
  { id: 2, brand: "Asics", name: 'Gel-NYC "Rose Glacé"', price: 59.99, old: null, cat: "chaussures", tag: "Best-seller", hot: true, wm: "ASICS", img: u("1595950653106-6c9ebd614d3a"), desc: "Silhouette running rétro et amorti GEL nouvelle génération, dans un coloris rose glacé exclusif. Confort et style à chaque foulée." },
  { id: 3, brand: "PSG", name: "Maillot Back to Back · Champions", price: 59.99, old: null, cat: "maillots", tag: "Drop", hot: true, wm: "PSG", img: u("1517466787929-bc90951d0974"), desc: "Le maillot collector Champions d'Europe. Tissu technique respirant et flocage officiel pour porter les couleurs du club partout." },
  { id: 4, brand: "Nike", name: "Air Jordan 1 Retro High", price: 89.99, old: 129.99, cat: "chaussures", tag: "Nouveau", wm: "JORDAN", img: u("1600185365483-26d7a4cc7519"), desc: "La légende Air Jordan 1 en version Retro High. Cuir premium, allure streetwear intemporelle et une pièce incontournable de toute collection." },
  { id: 5, brand: "Chanel", name: "Sac Matelassé Noir", price: 74.99, old: null, cat: "luxe", tag: "Luxe", wm: "CHANEL", img: u("1584917865442-de89df76afd3"), desc: "Sac matelassé en cuir noir, chaîne dorée et fermeture signature. L'élégance absolue au service de vos plus belles tenues." },
  { id: 6, brand: "Swatch", name: "Montre Chrono Édition", price: 49.99, old: 69.99, cat: "montres", tag: "Promo", wm: "SWATCH", img: u("1523275335684-37898b6baf30"), desc: "Montre chronographe en édition limitée. Boîtier léger, bracelet confortable et un cadran qui capte tous les regards." },
  { id: 7, brand: "Dior", name: "Tee-shirt Oblique", price: 44.99, old: null, cat: "vetements", tag: "Luxe", wm: "DIOR", img: u("1618354691373-d851c5c3a990"), desc: "Tee-shirt en coton doux orné du motif Oblique. Confort au quotidien et allure couture pour un look immédiatement premium." },
  { id: 8, brand: "Louis Vuitton", name: "Ceinture Initiales", price: 54.99, old: 79.99, cat: "luxe", tag: "Promo", wm: "LV", img: u("1553062407-98eeb64c6a62"), desc: "Ceinture en cuir avec boucle Initiales dorée. La touche finale qui structure et sublime n'importe quelle silhouette." },
  { id: 9, brand: "Nike", name: "Dunk Low Retro", price: 109.99, old: 149.99, cat: "chaussures", tag: "Nouveau", wm: "NIKE", img: u("1552346154-21d32810aba3"), desc: "La Dunk Low revisitée : cuir premium, bloc de couleurs iconique et confort au quotidien. Une valeur sûre du vestiaire streetwear." },
  { id: 10, brand: "New Balance", name: "550 White Green", price: 119.99, old: null, cat: "chaussures", tag: "Best-seller", hot: true, wm: "NB", img: u("1539185441755-769473a23570"), desc: "Silhouette basket rétro des années 80, cuir texturé et amorti moelleux. Le modèle qui met tout le monde d'accord." },
  { id: 11, brand: "Urban Store", name: "Hoodie Essentiel Beige", price: 49.99, old: null, cat: "vetements", tag: "Nouveau", wm: "URBAN", img: u("1556821840-3a63f95609a7"), desc: "Hoodie oversize en molleton épais, coupe streetwear et teinte greige signature. Douceur et style toute la saison." },
  { id: 12, brand: "Urban Store", name: "Sweat à Capuche Noir", price: 54.99, old: 74.99, cat: "vetements", tag: "Promo", wm: "URBAN", img: u("1620799140408-edc6dcb6d633"), desc: "Le sweat à capuche noir intemporel, coton brossé et logo brodé. L'essentiel qui se porte avec absolument tout." },
  { id: 13, brand: "Urban Store", name: "Casquette Brodée", price: 24.99, old: null, cat: "vetements", tag: "Nouveau", wm: "URBAN", img: u("1588850561407-ed78c282e89b"), desc: "Casquette 6 panneaux en coton lourd, visière structurée et broderie signature. La finition parfaite de votre look." },
  { id: 14, brand: "Urban Store", name: "Sac à Dos Cuir", price: 89.99, old: null, cat: "luxe", tag: "Luxe", wm: "URBAN", img: u("1548036328-c9fa89d128fa"), desc: "Sac à dos en cuir grainé, compartiment ordinateur et finitions métalliques. Élégance urbaine et robustesse au quotidien." },
  { id: 15, brand: "Festina", name: "Montre Automatique Or", price: 129.99, old: 179.99, cat: "montres", tag: "Promo", wm: "FESTINA", img: u("1524592094714-0f0654e20314"), desc: "Montre automatique au boîtier doré, cadran soleillé et bracelet acier. L'accessoire qui affirme votre présence." },
  { id: 16, brand: "Swatch", name: "Montre Skeleton Noir", price: 99.99, old: null, cat: "montres", tag: "Nouveau", hot: true, wm: "SWATCH", img: u("1533139502658-0198f920d8e8"), desc: "Cadran squelette laissant apparaître le mouvement, boîtier noir mat. Une pièce technique au poignet." },
  { id: 17, brand: "Real Madrid", name: "Maillot Domicile 25/26", price: 59.99, old: null, cat: "maillots", tag: "Drop", wm: "RMA", img: u("1577223625816-7546f13df25d"), desc: "Le maillot domicile officiel, tissu respirant et blason brodé. Portez les couleurs des Merengues partout." },
  { id: 18, brand: "FC Barcelone", name: "Maillot Rétro 92", price: 64.99, old: 84.99, cat: "maillots", tag: "Promo", wm: "FCB", img: u("1518091043644-c1d4457512c6"), desc: "Réédition collector du maillot légendaire de 1992. Coupe vintage et détails d'époque pour les vrais connaisseurs." },
  { id: 19, brand: "Oakley", name: "Lunettes Matte Black", price: 74.99, old: null, cat: "luxe", tag: "Nouveau", wm: "OAKLEY", img: u("1572635196237-14b3f281503f"), desc: "Lunettes sport au design enveloppant, verres traités anti-UV et monture matte. Protection et allure assurées." },
  { id: 20, brand: "Gucci", name: "Ceinture Cuir Tressé", price: 44.99, old: null, cat: "luxe", tag: "Best-seller", wm: "GUCCI", img: u("1591561954557-26941169b49e"), desc: "Ceinture en cuir tressé à la main, boucle discrète et finitions soignées. Un accessoire qui traverse les tendances." },
];

export const categories = [
  { filter: "all", label: "Tout" },
  { filter: "chaussures", label: "Chaussure" },
  { filter: "vetements", label: "Vêtement" },
  { filter: "montres", label: "Montre" },
  { filter: "luxe", label: "Accessoire" },
  { filter: "maillots", label: "Maillot de sport" },
];

export const catLabel = (cat: string) =>
  categories.find((c) => c.filter === cat)?.label ?? cat;

export const getProduct = (id: number) => products.find((p) => p.id === id);
