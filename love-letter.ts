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

const pickItem = (array: unknown[]) =>
  array[Math.floor(Math.random() * array.length)];

// Algorithm from: There must be an Angel. On the Beginnings of Arithmetics of Rays by David Links, pg 19
// http://www.alpha60.de/research/there_must_be_an_angel/DavidLink_MustBeAnAngel_2006.pdf
export const makeLetter = () => {
  let letter = "";

  // opening
  letter += `${pickItem(salutations1)} ${pickItem(salutations2)}\n\n`;

  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      // path a: “You are my—Adjective (adj)—Substantive (noun)”
      letter += `You are my ${pickItem(adjectives)} ${pickItem(nouns)}. `;
    } else {
      // path b: “My—[Adjective]—Substantive—[Adverb (adv)]—Verb (verb)—Your—[Adjective]—Substantive”
      letter += "My ";
      if (Math.random() > 0.5) {
        letter += `${pickItem(adjectives)} `;
      }
      letter += `${pickItem(nouns)} `;
      if (Math.random() > 0.5) {
        letter += `${pickItem(adverbs)} `;
      }
      letter += `${pickItem(verbs)} `;
      letter += "your ";
      if (Math.random() > 0.5) {
        letter += `${pickItem(adjectives)} `;
      }
      letter += `${pickItem(nouns)}. `;
    }
  }

  letter += "\n\n";

  // closing
  letter += `Yours ${pickItem(adverbs)}\n`;
  letter += "M. U. C.";

  return letter.toUpperCase();
};
