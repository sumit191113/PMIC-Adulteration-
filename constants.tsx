import { FoodItem, TestProcedure } from './types';
import { 
  Milk, 
  Utensils, 
  Droplet, 
  Flame, 
  Hexagon, 
  Sparkles, 
  Leaf,
  CircleDot,
  Coffee,
  Circle,
  Bean,
  Wind
} from 'lucide-react';

export const APP_LOGO = "https://i.postimg.cc/hvzH74DR/pioneer-logo2.png";

// --- Test Procedures ---

const turmericChalkTest: TestProcedure = {
  aim: "To detect chalk powder or yellow soapstone in turmeric powder.",
  materials: ["Test tube", "Water", "Turmeric powder sample", "Concentrated Hydrochloric acid (HCl)"],
  procedure: [
    "Take a small quantity of turmeric powder in a test tube.",
    "Add a few drops of water to moisten it.",
    "Add a few drops of concentrated Hydrochloric acid (HCl).",
    "Watch closely for bubbles."
  ],
  observation: "Vigorous effervescence (bubbling) occurs immediately.",
  conclusion: "Effervescence indicates the release of Carbon Dioxide from Carbonates, confirming the presence of chalk or soapstone.",
  precautions: ["Acid is corrosive; handle with care and do not inhale fumes."]
};

const turmericMetanilTest: TestProcedure = {
  aim: "To detect Metanil Yellow (Artificial Color) in turmeric powder.",
  materials: ["Test tube", "Turmeric powder sample", "Water", "Concentrated Hydrochloric acid (HCl)"],
  procedure: [
    "Take about 1g of turmeric powder in a test tube.",
    "Add a few drops of concentrated Hydrochloric acid.",
    "Observe the color change.",
    "Add a large amount of water to dilute the mixture."
  ],
  observation: "The mixture turns pink immediately upon adding acid. If the pink color disappears on dilution, it is pure. If the pink color persists, Metanil Yellow is present.",
  conclusion: "Persistence of pink color after dilution indicates adulteration with Metanil Yellow.",
  precautions: ["Acid is corrosive; use protective gear."]
};

const milkWaterTest: TestProcedure = {
  aim: "To detect water adulteration in milk (Slip Test).",
  materials: ["Polished slanting surface (e.g., a glass plate or slate)"],
  procedure: [
    "Place a drop of milk on a polished slanting surface.",
    "Observe the flow of the drop."
  ],
  observation: "Pure milk flows slowly, leaving a white trail behind. Adulterated milk flows immediately without leaving a mark.",
  conclusion: "If the milk flows too fast without a trail, it contains added water.",
  precautions: ["Ensure the surface is clean and dry."]
};

const milkStarchTest: TestProcedure = {
  aim: "To detect starch in milk.",
  materials: ["Test tube", "Milk sample", "Iodine solution", "Water"],
  procedure: [
    "Take 3-5ml of milk in a test tube.",
    "Boil it thoroughly and cool to room temperature.",
    "Add 2-3 drops of iodine solution."
  ],
  observation: "Formation of blue color indicates the presence of starch.",
  conclusion: "Blue color confirms that the milk is adulterated with starch.",
  precautions: ["Cool the milk before adding iodine."]
};

const milkDetergentTest: TestProcedure = {
  aim: "To detect detergent in milk.",
  materials: ["Test tube or small glass bottle", "Milk sample", "Water"],
  procedure: [
    "Take 5 to 10ml of milk sample with an equal amount of water.",
    "Shake the contents thoroughly for about 5 minutes.",
    "Observe the formation of lather/foam."
  ],
  observation: "Pure milk will have a thin layer of foam that subsides. Milk with detergent will form a thick, stable lather.",
  conclusion: "Formation of a thick, persistent lather indicates the presence of detergent.",
  precautions: ["Shake vigorously to ensure proper mixing."]
};

const honeySugarTest: TestProcedure = {
  aim: "To detect sugar solution in honey.",
  materials: ["Transparent glass", "Water", "Honey sample"],
  procedure: [
    "Take a transparent glass filled with water.",
    "Add a drop of honey to the glass.",
    "Observe how the honey settles."
  ],
  observation: "Pure honey does not disperse immediately and settles at the bottom. Adulterated honey disperses in water.",
  conclusion: "If the honey dissolves rapidly, it contains added sugar syrup.",
  precautions: ["Do not stir the water initially."]
};

const honeyJaggeryTest: TestProcedure = {
  aim: "To detect jaggery or sugar solution in honey using vinegar.",
  materials: ["Test tube", "Honey sample", "Water", "Vinegar"],
  procedure: [
    "Take a small amount of honey in a test tube.",
    "Add an equal amount of water and mix well.",
    "Add 2-3 drops of vinegar to the solution.",
    "Observe if any foam or bubbles appear."
  ],
  observation: "If bubbles or foam appear, it indicates the presence of carbonates common in lower grade jaggery/sugar syrup.",
  conclusion: "Effervescence indicates adulteration with impure sugar syrups.",
  precautions: ["Use clean test tubes."]
};

const sugarChalkTest: TestProcedure = {
  aim: "To detect chalk powder or white sand in sugar.",
  materials: ["Transparent glass", "Water", "Sugar sample"],
  procedure: [
    "Take a glass of clear water.",
    "Dissolve 10g of the sugar sample in it.",
    "Allow the solution to stand for 10 minutes."
  ],
  observation: "Pure sugar dissolves completely leaving no residue. Chalk powder or white sand will settle at the bottom.",
  conclusion: "Insoluble white sediment indicates chalk powder or sand.",
  precautions: ["Ensure water is clean and the glass is transparent."]
};

const sugarWashingSodaTest: TestProcedure = {
  aim: "To detect washing soda in sugar.",
  materials: ["Test tube", "Sugar sample", "Concentrated Hydrochloric acid (HCl)"],
  procedure: [
    "Take a small amount of sugar in a test tube.",
    "Add a few drops of HCl.",
    "Observe for any reaction."
  ],
  observation: "Effervescence (bubbling) occurs if washing soda is present.",
  conclusion: "Bubbling indicates the presence of washing soda (sodium carbonate).",
  precautions: ["Handle acid carefully."]
};

const oilArgemoneTest: TestProcedure = {
  aim: "To detect Argemone oil in edible oil.",
  materials: ["Test tube", "Edible oil sample", "Concentrated Nitric Acid"],
  procedure: [
    "Take 5ml of the oil sample in a test tube.",
    "Add 5ml of Concentrated Nitric Acid.",
    "Shake the tube carefully.",
    "Allow it to stand."
  ],
  observation: "Appearance of a reddish-brown precipitate at the acid layer indicates Argemone oil.",
  conclusion: "Reddish-brown color confirms adulteration.",
  precautions: ["Nitric acid is dangerous; handle with extreme caution."]
};

const oilCastorTest: TestProcedure = {
  aim: "To detect Castor oil in edible oil.",
  materials: ["Test tube", "Oil sample", "Absolute Alcohol"],
  procedure: [
    "Take a small quantity of oil sample in a test tube.",
    "Add an equal volume of absolute alcohol.",
    "Shake well and allow to settle."
  ],
  observation: "If the mixture remains clear, castor oil is present (as it is soluble in alcohol). Pure edible oils will separate into layers.",
  conclusion: "Homogeneity indicates presence of castor oil.",
  precautions: ["Alcohol is flammable; keep away from flames."]
};

const teaIronFilingsTest: TestProcedure = {
  aim: "To detect iron filings in tea leaves.",
  materials: ["Filter paper or white paper", "Magnet", "Tea leaves sample"],
  procedure: [
    "Spread a small quantity of tea leaves on a white paper.",
    "Move a magnet through and over the tea leaves."
  ],
  observation: "Iron filings will stick to the magnet.",
  conclusion: "If particles stick to the magnet, the tea is adulterated with iron filings.",
  precautions: ["Use a strong magnet for better detection."]
};

const teaColorTest: TestProcedure = {
  aim: "To detect artificial color in tea leaves.",
  materials: ["Filter paper", "Water", "Tea leaves sample"],
  procedure: [
    "Place a filter paper on a flat surface.",
    "Spread the tea leaves on it.",
    "Sprinkle water to wet the paper and leaves.",
    "Remove the leaves after a few minutes and wash the paper under a tap."
  ],
  observation: "Pure tea leaves stain the paper only slightly (brown/yellow). Artificial color leaves bright pink or red spots/streaks on the paper.",
  conclusion: "Bright colored spots indicate added artificial color.",
  precautions: ["Do not over-wet the paper initially."]
};

const chilliBrickPowderTest: TestProcedure = {
  aim: "To detect brick powder, sand, or grit in chilli powder.",
  materials: ["Beaker", "Water", "Chilli powder sample"],
  procedure: [
    "Take a beaker full of water.",
    "Add a teaspoon of chilli powder to it.",
    "Allow the powder to settle for a few minutes.",
    "Pour off the water carefully and examine the sediment at the bottom.",
    "Rub the sediment with your fingers."
  ],
  observation: "Pure chilli powder leaves little to no residue. Brick powder or sand settles at the bottom and feels gritty/sandy to the touch.",
  conclusion: "A gritty red sediment confirms the presence of brick powder or sand.",
  precautions: ["Do not stir the solution too vigorously."]
};

const chilliColorTest: TestProcedure = {
  aim: "To detect water-soluble artificial color in chilli powder.",
  materials: ["Transparent glass", "Water", "Chilli powder sample"],
  procedure: [
    "Fill a glass with water.",
    "Sprinkle a small amount of chilli powder on the surface.",
    "Do not disturb the water."
  ],
  observation: "Pure chilli powder does not dissolve immediately or leave a color trail. Artificial colors will dissolve instantly, creating colored streaks descending through the water.",
  conclusion: "Descending colored streaks indicate the presence of artificial dyes.",
  precautions: ["Use a clear glass and still water."]
};

const blackPepperPapayaTest: TestProcedure = {
  aim: "To detect papaya seeds in black pepper.",
  materials: ["Beaker or Glass", "Water", "Black pepper sample"],
  procedure: [
    "Take a glass or beaker filled with water.",
    "Add a sample of black pepper corns to it.",
    "Stir well and allow it to stand for a few minutes."
  ],
  observation: "Good quality black pepper sinks to the bottom. Papaya seeds float on the surface.",
  conclusion: "Floating seeds indicate adulteration with papaya seeds.",
  precautions: ["Ensure the water is still before final observation."]
};

const blackPepperMineralOilTest: TestProcedure = {
  aim: "To detect mineral oil coating on black pepper.",
  materials: ["Filter paper", "Black pepper sample"],
  procedure: [
    "Take a small amount of black pepper.",
    "Place it on a filter paper and rub gently with your fingers.",
    "Observe the paper against light."
  ],
  observation: "A greasy stain on the filter paper indicates the presence of mineral oil.",
  conclusion: "Greasy spots confirm mineral oil coating.",
  precautions: ["Use clean dry hands."]
};

const coffeeChicoryTest: TestProcedure = {
  aim: "To detect chicory powder in coffee powder.",
  materials: ["Transparent glass", "Water", "Coffee powder sample"],
  procedure: [
    "Gently sprinkle a small amount of coffee powder on the surface of water in a glass.",
    "Observe the behavior of the particles."
  ],
  observation: "Coffee powder floats on the water. Chicory powder sinks, leaving a brown streak of color as it goes down.",
  conclusion: "Sinking particles with color trails indicate the presence of chicory.",
  precautions: ["Do not shake the glass."]
};

const coffeeSeedTest: TestProcedure = {
  aim: "To detect roasted date or tamarind seeds in coffee powder.",
  materials: ["White paper", "Coffee powder sample", "Magnifying glass"],
  procedure: [
    "Spread the coffee powder on a white paper.",
    "Inspect the color and texture of the particles closely."
  ],
  observation: "Roasted seeds often have a different shade and a more gritty texture than genuine coffee powder.",
  conclusion: "Varying textures and unusual hard grains suggest adulteration with roasted seeds.",
  precautions: ["Perform inspection under good lighting."]
};

const peasMalachiteTest: TestProcedure = {
  aim: "To detect Malachite Green (artificial color) in green peas.",
  materials: ["White blotting paper or Cotton", "Water", "Green peas sample", "Liquid Paraffin (optional)"],
  procedure: [
    "Take a piece of white blotting paper or cotton.",
    "Moisten it with a little water or liquid paraffin.",
    "Rub the outer surface of the green peas."
  ],
  observation: "The paper or cotton picks up a bright green color.",
  conclusion: "Green staining on the cotton confirms Malachite Green adulteration.",
  precautions: ["Wear gloves if possible as Malachite Green is toxic."]
};

const peasLeadTest: TestProcedure = {
  aim: "To detect Lead Chromate in green peas.",
  materials: ["Test tube", "Water", "Green peas sample", "Dilute Nitric Acid"],
  procedure: [
    "Take a sample of peas in a test tube.",
    "Add water and a few drops of dilute Nitric Acid.",
    "Observe the solution."
  ],
  observation: "A yellow precipitate or coloration may indicate Lead Chromate.",
  conclusion: "Color change in the presence of acid suggests lead-based adulterants.",
  precautions: ["Handle acids with care."]
};

const dalMetanilTest: TestProcedure = {
  aim: "To detect Metanil Yellow in pulses (Dal).",
  materials: ["Test tube", "Water", "Dal sample", "Concentrated HCl"],
  procedure: [
    "Take a few grains of dal in a test tube.",
    "Add 5ml of water and shake.",
    "Add a few drops of concentrated HCl."
  ],
  observation: "The water turns pink or magenta.",
  conclusion: "The appearance of pink color confirms the presence of Metanil Yellow.",
  precautions: ["HCl is corrosive."]
};

const dalKhesariTest: TestProcedure = {
  aim: "To detect Khesari Dal in Arhar/Toor Dal.",
  materials: ["Sample of Dal", "Magnifying glass"],
  procedure: [
    "Spread the dal on a flat surface.",
    "Look for grains that are wedge-shaped or have a slanted appearance."
  ],
  observation: "Arhar dal is round, while Khesari dal is irregular and wedge-shaped.",
  conclusion: "Presence of irregular wedge-shaped grains indicates adulteration with Khesari dal.",
  precautions: ["Careful visual inspection is required."]
};

const gheeVanaspatiTest: TestProcedure = {
  aim: "To detect Vanaspati in Ghee or Butter.",
  materials: ["Test tube", "Ghee sample", "Sugar", "Concentrated HCl"],
  procedure: [
    "Take 1ml of melted ghee in a test tube.",
    "Add a pinch of sugar.",
    "Add 5ml of concentrated HCl and shake for 5 minutes."
  ],
  observation: "The lower acid layer turns crimson or pink.",
  conclusion: "Crimson color in the acid layer confirms the presence of Vanaspati (Sesame oil).",
  precautions: ["Wait for the layers to separate before observing."]
};

const gheeStarchTest: TestProcedure = {
  aim: "To detect starch (mashed potatoes) in Ghee.",
  materials: ["Test tube", "Ghee sample", "Iodine solution"],
  procedure: [
    "Take a small amount of ghee in a test tube.",
    "Add a few drops of Iodine solution."
  ],
  observation: "The sample turns blue-black.",
  conclusion: "Blue-black coloration indicates the presence of starch.",
  precautions: ["Use fresh iodine solution for best results."]
};

// --- Data Structure ---

export const FOOD_DATABASE: FoodItem[] = [
  {
    id: 'turmeric',
    name: 'Turmeric Powder',
    icon: Utensils,
    adulterants: [
      { id: 'chalk', name: 'Chalk Powder', test: turmericChalkTest },
      { id: 'metanil', name: 'Metanil Yellow', test: turmericMetanilTest }
    ]
  },
  {
    id: 'chilli',
    name: 'Chilli Powder',
    icon: Flame,
    adulterants: [
      { id: 'brick', name: 'Brick Powder', test: chilliBrickPowderTest },
      { id: 'artificial_color', name: 'Artificial Color', test: chilliColorTest }
    ]
  },
  {
    id: 'milk',
    name: 'Milk',
    icon: Milk,
    adulterants: [
      { id: 'water', name: 'Water', test: milkWaterTest },
      { id: 'starch', name: 'Starch', test: milkStarchTest },
      { id: 'detergent', name: 'Detergent', test: milkDetergentTest }
    ]
  },
  {
    id: 'honey',
    name: 'Honey',
    icon: Hexagon,
    adulterants: [
      { id: 'sugar_solution', name: 'Sugar Solution', test: honeySugarTest },
      { id: 'jaggery_honey', name: 'Jaggery/Sugar syrup', test: honeyJaggeryTest }
    ]
  },
  {
    id: 'sugar',
    name: 'Sugar',
    icon: Sparkles,
    adulterants: [
      { id: 'chalk_powder', name: 'Chalk Powder', test: sugarChalkTest },
      { id: 'washing_soda', name: 'Washing Soda', test: sugarWashingSodaTest }
    ]
  },
  {
    id: 'oil',
    name: 'Edible Oil',
    icon: Droplet,
    adulterants: [
      { id: 'argemone', name: 'Argemone Oil', test: oilArgemoneTest },
      { id: 'castor_oil', name: 'Castor Oil', test: oilCastorTest }
    ]
  },
  {
    id: 'tea',
    name: 'Tea Leaves',
    icon: Leaf,
    adulterants: [
      { id: 'iron', name: 'Iron Filings', test: teaIronFilingsTest },
      { id: 'color', name: 'Artificial Color', test: teaColorTest }
    ]
  },
  {
    id: 'black_pepper',
    name: 'Black Pepper',
    icon: CircleDot,
    adulterants: [
      { id: 'papaya', name: 'Papaya Seeds', test: blackPepperPapayaTest },
      { id: 'mineral_oil_pepper', name: 'Mineral Oil Coating', test: blackPepperMineralOilTest }
    ]
  },
  {
    id: 'coffee',
    name: 'Coffee Powder',
    icon: Coffee,
    adulterants: [
      { id: 'chicory', name: 'Chicory Powder', test: coffeeChicoryTest },
      { id: 'roasted_seeds', name: 'Roasted Seeds', test: coffeeSeedTest }
    ]
  },
  {
    id: 'peas',
    name: 'Green Peas',
    icon: Circle,
    adulterants: [
      { id: 'malachite_green', name: 'Malachite Green', test: peasMalachiteTest },
      { id: 'lead_chromate', name: 'Lead Chromate', test: peasLeadTest }
    ]
  },
  {
    id: 'pulses',
    name: 'Pulses / Dal',
    icon: Bean,
    adulterants: [
      { id: 'metanil_yellow', name: 'Metanil Yellow', test: dalMetanilTest },
      { id: 'khesari_dal', name: 'Khesari Dal', test: dalKhesariTest }
    ]
  },
  {
    id: 'ghee',
    name: 'Ghee / Butter',
    icon: Wind,
    adulterants: [
      { id: 'vanaspati', name: 'Vanaspati', test: gheeVanaspatiTest },
      { id: 'starch_ghee', name: 'Mashed Potato / Starch', test: gheeStarchTest }
    ]
  }
];
