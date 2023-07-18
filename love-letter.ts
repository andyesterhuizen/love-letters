const salutations1 = [
  "Beloved",
  "Darling",
  "Dear",
  "Dearest",
  "Fanciful",
  "Honey",
];

const salutations2 = [
  "Chickpea",
  "Dear",
  "Duck",
  "Jewel",
  "Love",
  "Moppet",
  "Sweetheart",
];

const adjectives = [
  "affectionate",
  "amorous",
  "anxious",
  "avid",
  "beautiful",
  "breathless",
  "burning",
  "covetous",
  "craving",
  "curious",
  "eager",
  "fervent",
  "fondest",
  "loveable",
  "lovesick",
  "loving",
  "passionate",
  "precious",
  "seductive",
  "sweet",
  "sympathetic",
  "tender",
  "unsatisfied",
  "winning",
  "wistful",
];

const nouns = [
  "adoration",
  "affection",
  "ambition",
  "appetite",
  "ardour",
  "being",
  "burning",
  "charm",
  "craving",
  "desire",
  "devotion",
  "eagerness",
  "enchantment",
  "enthusiasm",
  "fancy",
  "fellow feeling",
  "fervour",
  "fondness",
  "heart",
  "hunger",
  "infatuation",
  "little liking",
  "longing",
  "love",
  "lust",
  "passion",
  "rapture",
  "sympathy",
  "thirst",
  "wish",
  "yearning",
];

const adverbs = [
  "affectionately",
  "ardently",
  "anxiously",
  "beautifully",
  "burningly",
  "covetously",
  "curiously",
  "eagerly",
  "fervently",
  "fondly",
  "impatiently",
  "keenly",
  "lovingly",
  "passionately",
  "seductively",
  "tenderly",
  "wistfully",
];

const verbs = [
  "adores",
  "attracts",
  "clings to",
  "holds dear",
  "hopes for",
  "hungers for",
  "likes",
  "longs for",
  "loves",
  "lusts after",
  "pants for",
  "pines for",
  "sighs for",
  "tempts",
  "thirsts for",
  "treasures",
  "yearns for",
  "woos",
];

const pickItem = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)];

export const makeLetter = () => {
  let letter = "";

  // 1. Print two words taken from a list of salutations
  letter += pickItem(salutations1);
  letter += " ";
  letter += pickItem(salutations2);
  letter += "\n";
  letter += "\n";

  // 2. Do the following 5 times:
  for (let i = 0; i < 5; i++) {
    // Choose one of two sentence structures depending on a random value Rand
    if (Math.random() > 0.5) {
      letter += `You are my ${pickItem(adjectives)} ${pickItem(nouns)}. `;
    } else {
      letter += "My ";
      if (Math.random() > 0.5) {
        letter += pickItem(adjectives);
        letter += " ";
      }
      letter += pickItem(nouns);
      letter += " ";
      if (Math.random() > 0.5) {
        letter += pickItem(adverbs);
        letter += " ";
      }
      letter += pickItem(verbs);
      letter += " ";
      letter += "Your ";
      if (Math.random() > 0.5) {
        letter += pickItem(adjectives);
        letter += " ";
      }
      letter += pickItem(nouns);
      letter += ". ";
    }
  }

  // 3. Print the letter's closing
  letter += "\n";
  letter += "\n";
  letter += `Yours ${pickItem(adverbs)}\n`;
  letter += "M. U. C.";

  return letter.toUpperCase();
};
