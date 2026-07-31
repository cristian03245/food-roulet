/**
 * Static food dataset for Food Roulette („Ce mănânc azi?”).
 * Each entry represents a dish the randomiser can pick from.
 *
 * imageSeed — used as the seed for picsum placeholder images:
 *   https://picsum.photos/seed/{imageSeed}/400/300
 */

export interface Food {
  id: number;
  name: string;
  category: FoodCategory;
  description: string;
  prepTime: number;
  ingredients: string[];
  isVegetarian: boolean;
  imageSeed: string;
}

export type FoodCategory =
  | "Fast-food"
  | "Sănătos"
  | "Desert"
  | "Tradițional Românesc"
  | "Italian"
  | "Asiatic"
  | "Mic Dejun";

export const foods: Food[] = [
  // ── Italian ──────────────────────────────────────────────
  {
    id: 1,
    name: "Pizza Margherita",
    category: "Italian",
    description:
      "O pizza clasică napoletană cu sos de roșii San Marzano, mozzarella proaspătă și busuioc aromat — simplitate desăvârșită.",
    prepTime: 35,
    ingredients: ["aluat de pizza", "sos de roșii", "mozzarella", "busuioc", "ulei de măsline"],
    isVegetarian: true,
    imageSeed: "pizza-margherita",
  },
  {
    id: 2,
    name: "Paste Carbonara",
    category: "Italian",
    description:
      "Spaghetti al dente într-un sos cremos pe bază de ou, guanciale crocant și parmezan din belșug — un deliciu roman autentic.",
    prepTime: 25,
    ingredients: ["spaghetti", "guanciale", "ouă", "parmezan", "piper negru"],
    isVegetarian: false,
    imageSeed: "pasta-carbonara",
  },
  {
    id: 3,
    name: "Lasagna Bolognese",
    category: "Italian",
    description:
      "Straturi generoase de foi de lasagna, ragù de vită gătit lent, sos bechamel catifelat și parmezan gratinat la perfecție.",
    prepTime: 90,
    ingredients: ["foi de lasagna", "carne tocată de vită", "sos bechamel", "parmezan", "sos de roșii"],
    isVegetarian: false,
    imageSeed: "lasagna-bolognese",
  },

  // ── Asiatic ─────────────────────────────────────────────
  {
    id: 4,
    name: "Pad Thai",
    category: "Asiatic",
    description:
      "Tăieței de orez prăjiți wok cu creveți suculenți, alune crocante, muguri de fasole și un sos dulce-acrișor de tamarind — un clasic al street-food-ului thailandez.",
    prepTime: 30,
    ingredients: ["tăieței de orez", "creveți", "alune", "muguri de fasole", "sos de tamarind", "lime"],
    isVegetarian: false,
    imageSeed: "pad-thai",
  },
  {
    id: 5,
    name: "Ramen Tonkotsu",
    category: "Asiatic",
    description:
      "Un bol aburind de tăieței ramen într-o supă bogată de oase de porc, cu ou marinat, fâșii de porc chashu și ceapă verde proaspătă.",
    prepTime: 180,
    ingredients: ["tăieței ramen", "supă de oase de porc", "ou", "porc chashu", "ceapă verde", "alge nori"],
    isVegetarian: false,
    imageSeed: "ramen-tonkotsu",
  },
  {
    id: 6,
    name: "Sushi Roll California",
    category: "Asiatic",
    description:
      "Rulouri delicate de orez sushi cu avocado cremos, castravete crocant și crab — răcoritoare și perfect echilibrate.",
    prepTime: 40,
    ingredients: ["orez sushi", "alge nori", "avocado", "castravete", "crab", "susan"],
    isVegetarian: false,
    imageSeed: "sushi-california",
  },

  // ── Fast-food ───────────────────────────────────────────
  {
    id: 7,
    name: "Burger Wagyu",
    category: "Fast-food",
    description:
      "Un burger suculent din carne de vită Wagyu, cu brânză cheddar topită, ceapă caramelizată, bacon crocant și sos secret — decadent și irezistibil.",
    prepTime: 25,
    ingredients: ["chiflă brioche", "carne de vită Wagyu", "cheddar", "bacon", "ceapă caramelizată", "sos burger"],
    isVegetarian: false,
    imageSeed: "burger-wagyu",
  },
  {
    id: 8,
    name: "Shaorma de Pui",
    category: "Fast-food",
    description:
      "Lipie caldă umplută cu fâșii fragede de pui la rotisor, cartofi prăjiți aurii, varză crocantă și sos de usturoi din belșug.",
    prepTime: 30,
    ingredients: ["lipie", "pulpe de pui", "cartofi", "varză", "sos de usturoi", "castraveți murați"],
    isVegetarian: false,
    imageSeed: "shaorma-pui",
  },
  {
    id: 9,
    name: "Tacos al Pastor",
    category: "Fast-food",
    description:
      "Tortilla de porumb calde cu carne de porc marinată în achiote, ananas caramelizat, ceapă proaspătă și coriandru — o explozie mexicană de arome.",
    prepTime: 35,
    ingredients: ["tortilla de porumb", "carne de porc", "ananas", "ceapă", "coriandru", "lime"],
    isVegetarian: false,
    imageSeed: "tacos-al-pastor",
  },

  // ── Sănătos ─────────────────────────────────────────────
  {
    id: 10,
    name: "Buddha Bowl",
    category: "Sănătos",
    description:
      "Un bol colorat și hrănitor cu quinoa pufoasă, cartof dulce copt, năut crocant, avocado și un dressing de tahini cu lămâie.",
    prepTime: 25,
    ingredients: ["quinoa", "cartof dulce", "năut", "avocado", "tahini", "lămâie"],
    isVegetarian: true,
    imageSeed: "buddha-bowl",
  },
  {
    id: 11,
    name: "Salată Caesar cu Pui",
    category: "Sănătos",
    description:
      "Salată crocantă cu piept de pui la grătar, crutoane aurii, fulgi de parmezan și dressing Caesar clasic — proaspătă și sățioasă.",
    prepTime: 20,
    ingredients: ["salată romană", "piept de pui", "crutoane", "parmezan", "dressing Caesar"],
    isVegetarian: false,
    imageSeed: "salata-caesar",
  },
  {
    id: 12,
    name: "Smoothie Verde Revitalizant",
    category: "Sănătos",
    description:
      "Un smoothie cremos și răcoritor cu spanac proaspăt, banană, mango, ghimbir și lapte de migdale — energie pură într-un pahar.",
    prepTime: 10,
    ingredients: ["spanac", "banană", "mango", "ghimbir", "lapte de migdale"],
    isVegetarian: true,
    imageSeed: "smoothie-verde",
  },
  {
    id: 13,
    name: "Tocăniță de Legume",
    category: "Sănătos",
    description:
      "O tocăniță rustică de legume de sezon gătite lent într-un sos aromat de roșii, cu ierburi proaspete — reconfortantă și plină de savoare.",
    prepTime: 45,
    ingredients: ["dovlecei", "ardei", "vinete", "roșii", "ceapă", "usturoi"],
    isVegetarian: true,
    imageSeed: "tocanita-legume",
  },

  // ── Desert ──────────────────────────────────────────────
  {
    id: 14,
    name: "Tiramisu",
    category: "Desert",
    description:
      "Un desert italian clasic în straturi catifelate de mascarpone, pișcoturi însiropate în cafea espresso și un nor fin de cacao — divin de cremos.",
    prepTime: 40,
    ingredients: ["mascarpone", "pișcoturi", "espresso", "cacao", "ouă", "zahăr"],
    isVegetarian: true,
    imageSeed: "tiramisu",
  },
  {
    id: 15,
    name: "Clătite cu Nutella",
    category: "Desert",
    description:
      "Clătite subțiri și aurii, umplute generos cu Nutella topită și rulate cu drag, presărate cu zahăr pudră — răsfățul suprem.",
    prepTime: 25,
    ingredients: ["făină", "ouă", "lapte", "Nutella", "zahăr pudră"],
    isVegetarian: true,
    imageSeed: "clatite-nutella",
  },
  {
    id: 16,
    name: "Lava Cake",
    category: "Desert",
    description:
      "O prăjitură caldă de ciocolată neagră, cu exterior pufos și miez topit care curge seducător la prima linguriță — iremediabil de delicios.",
    prepTime: 20,
    ingredients: ["ciocolată neagră", "unt", "ouă", "zahăr", "făină"],
    isVegetarian: true,
    imageSeed: "lava-cake",
  },

  // ── Tradițional Românesc ───────────────────────────────
  {
    id: 17,
    name: "Sarmale cu Mămăligă",
    category: "Tradițional Românesc",
    description:
      "Sarmale tradiționale din varză murată, umplute cu carne tocată fragedă și orez, gătite încet alături de mămăligă cremoasă și smântână — sărbătoare românească pe farfurie.",
    prepTime: 120,
    ingredients: ["varză murată", "carne tocată", "orez", "mămăligă", "smântână", "cimbru"],
    isVegetarian: false,
    imageSeed: "sarmale",
  },
  {
    id: 18,
    name: "Mici cu Muștar",
    category: "Tradițional Românesc",
    description:
      "Mititei rumeniți pe grătar, aromatizați cu usturoi și cimbru, serviți fierbinți alături de muștar iute și pâine proaspătă — gustul verii românești.",
    prepTime: 35,
    ingredients: ["carne tocată mixtă", "usturoi", "cimbru", "bicarbonat", "muștar", "pâine"],
    isVegetarian: false,
    imageSeed: "mici",
  },
  {
    id: 19,
    name: "Papanași",
    category: "Desert",
    description:
      "Gogoși pufoase din brânză dulce de vaci, prăjite până devin aurii, acoperite cu smântână rece și dulceață de afine — un desert legendar al bucătăriei românești.",
    prepTime: 45,
    ingredients: ["brânză de vaci", "făină", "ouă", "smântână", "dulceață de afine"],
    isVegetarian: true,
    imageSeed: "papanasi",
  },
  {
    id: 20,
    name: "Ciorbă de Burtă",
    category: "Tradițional Românesc",
    description:
      "O ciorbă acrișoară, bogată și catifelată, cu burtă de vită fiartă îndelung, smântână și usturoi — leacul suprem după o zi lungă.",
    prepTime: 150,
    ingredients: ["burtă de vită", "smântână", "ouă", "usturoi", "oțet", "morcovi"],
    isVegetarian: false,
    imageSeed: "ciorba-burta",
  },
  {
    id: 21,
    name: "Bulz Ciobănesc",
    category: "Tradițional Românesc",
    description:
      "Mămăligă coaptă la cuptor cu brânză de burduf topită, ou ochi și șuncă țărănească — un preparat rustic care îți încălzește sufletul.",
    prepTime: 40,
    ingredients: ["mămăligă", "brânză de burduf", "ou", "șuncă", "smântână"],
    isVegetarian: false,
    imageSeed: "bulz-ciobanesc",
  },

  // ── Mic Dejun ───────────────────────────────────────────
  {
    id: 22,
    name: "Omletă cu Brânză și Verdețuri",
    category: "Mic Dejun",
    description:
      "O omletă pufoasă, pliată peste brânză topită și verdețuri proaspete — începutul perfect de zi, gata în câteva minute.",
    prepTime: 10,
    ingredients: ["ouă", "brânză telemea", "pătrunjel", "ceapă verde", "unt"],
    isVegetarian: true,
    imageSeed: "omleta-branza",
  },
  {
    id: 23,
    name: "Avocado Toast",
    category: "Mic Dejun",
    description:
      "Pâine integrală prăjită, acoperită cu avocado zdrobit, ou poșat, fulgi de chilli și semințe de susan — micul dejun instagramabil și delicios.",
    prepTime: 12,
    ingredients: ["pâine integrală", "avocado", "ou", "chilli", "susan", "lămâie"],
    isVegetarian: true,
    imageSeed: "avocado-toast",
  },
  {
    id: 24,
    name: "Terci de Ovăz cu Fructe",
    category: "Mic Dejun",
    description:
      "Ovăz fiert în lapte, îndulcit cu miere și garnisit cu fructe proaspete de sezon și nuci crocante — cald, hrănitor și reconfortant.",
    prepTime: 15,
    ingredients: ["fulgi de ovăz", "lapte", "miere", "fructe de pădure", "nuci", "scorți
