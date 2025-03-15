/**
 * @constant {Array<Object>} categories
 * @description All categories from the menu that can be tested
 */
export const categories = [
  { id: 'mezze', name: 'Mezze' },
  { id: 'crudos', name: 'Crudos' },
  { id: 'primi', name: 'Primi' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'principale', name: 'Principale' },
  { id: 'sides', name: 'Sides' },
  { id: 'dessert', name: 'Dessert' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'redwines', name: 'Red Wines' },
  { id: 'whitewines', name: 'White Wines' },
  { id: 'roséwines', name: 'Rosé Wines' },
  { id: 'sparklingwines', name: 'Sparkling Wines' },
  { id: 'winescheatsheet', name: 'Wines Cheat Sheet' },
];

/**
 * @constant {Object} testQuestions
 * @description Test questions organized by menu category
 * Each category contains an array of dish objects
 * Each dish object contains an array of question objects
 * Each question object includes the question text, answer options, and correct answer
 */
export const testQuestions = {
  mezze: [
    {
      id: 'mezze-1',
      dish: 'Taramasalata',
      questions: [
        {
          id: 'taramasalata-1',
          question: 'What are the main ingredients in Taramasalata?',
          options: [
            'Yogurt, cucumber, and garlic',
            'Cod mousse, bottarga, and trout roe',
            'Chickpeas, tahini, and lemon',
            'Roasted peppers and walnuts'
          ],
          correctAnswer: 'Cod mousse, bottarga, and trout roe'
        },
        {
          id: 'taramasalata-2',
          question: 'Which of the following allergens is NOT present in Taramasalata?',
          options: ['Gluten', 'Dairy', 'Nuts', 'Fish'],
          correctAnswer: 'Nuts'
        },
        {
          id: 'taramasalata-3',
          question: 'What utensil is used to serve Taramasalata?',
          options: ['Fork', 'Knife', 'Mezze Spoon', 'Demi Spoon'],
          correctAnswer: 'Mezze Spoon'
        }
      ]
    },
    {
      id: 'mezze-2',
      dish: 'Tzatziki',
      questions: [
        {
          id: 'tzatziki-1',
          question: 'What gives Tzatziki its characteristic flavor?',
          options: [
            'Roasted peppers and walnuts',
            'Chickpeas and tahini',
            'Cucumber, lemon, garlic and herbs',
            'Eggplant and olive oil'
          ],
          correctAnswer: 'Cucumber, lemon, garlic and herbs'
        },
        {
          id: 'tzatziki-2',
          question: 'Which is the primary dairy product in Tzatziki?',
          options: ['Cheese', 'Cream', 'Yogurt', 'Butter'],
          correctAnswer: 'Yogurt'
        },
        {
          id: 'tzatziki-3',
          question: 'Which of these allergens is present in Tzatziki?',
          options: ['Gluten', 'Nuts', 'Dairy', 'Fish'],
          correctAnswer: 'Dairy'
        }
      ]
    },
    {
      id: 'mezze-3',
      dish: 'Muhammara',
      questions: [
        {
          id: 'muhammara-1',
          question: 'What is the main ingredient in Muhammara?',
          options: [
            'Roasted eggplant',
            'Chickpeas',
            'Roasted peppers and walnuts',
            'Yogurt and cucumber'
          ],
          correctAnswer: 'Roasted peppers and walnuts'
        },
        {
          id: 'muhammara-2',
          question: 'Which allergen category do peppers fall under in the menu?',
          options: ['Allium', 'Nightshade', 'Legumes', 'Sulfites'],
          correctAnswer: 'Nightshade'
        },
        {
          id: 'muhammara-3',
          question: 'How many allergens are listed for Muhammara?',
          options: ['2', '3', '4', '5'],
          correctAnswer: '4'
        }
      ]
    },
    {
      id: 'mezze-4',
      dish: 'Hummus',
      questions: [
        {
          id: 'hummus-1',
          question: 'What gives hummus its nutty flavor?',
          options: ['Walnuts', 'Tahini (sesame)', 'Almonds', 'Pine nuts'],
          correctAnswer: 'Tahini (sesame)'
        },
        {
          id: 'hummus-2',
          question: 'Which category of food are chickpeas classified as?',
          options: ['Grains', 'Nightshades', 'Legumes', 'Nuts'],
          correctAnswer: 'Legumes'
        },
        {
          id: 'hummus-3',
          question: 'What spice gives our hummus its unique aroma?',
          options: ['Cumin', 'Coriander', 'Cardamom', 'Cinnamon'],
          correctAnswer: 'Cumin'
        }
      ]
    },
    {
      id: 'mezze-5',
      dish: 'Baba Ghanoush',
      questions: [
        {
          id: 'baba-1',
          question: 'What gives Baba Ghanoush its smoky flavor?',
          options: [
            'Roasted peppers',
            'Smoked salt',
            'Charred eggplant',
            'Grilled garlic'
          ],
          correctAnswer: 'Charred eggplant'
        },
        {
          id: 'baba-2',
          question: 'Which ingredient in Baba Ghanoush contains sesame?',
          options: ['The eggplant', 'Tahini', 'Olive oil', 'Herbs'],
          correctAnswer: 'Tahini'
        },
        {
          id: 'baba-3',
          question: 'What herb is traditionally used in our Baba Ghanoush?',
          options: ['Parsley', 'Mint', 'Dill', 'Cilantro'],
          correctAnswer: 'Parsley'
        }
      ]
    },
  ],
  crudos: [
    {
      id: 'crudos-1',
      dish: 'Oysters',
      questions: [
        {
          id: 'oysters-1',
          question: 'What type of oysters are served on the menu?',
          options: [
            'West Coast Oysters',
            'East Coast Oysters',
            'Pacific Oysters',
            'Mediterranean Oysters'
          ],
          correctAnswer: 'East Coast Oysters'
        },
        {
          id: 'oysters-2',
          question: 'What is served with the oysters?',
          options: [
            'Lemon-Garlic Aioli',
            'Cocktail Sauce',
            'Lulo-White Balsamic Mignonette',
            'Horseradish Cream'
          ],
          correctAnswer: 'Lulo-White Balsamic Mignonette'
        },
        {
          id: 'oysters-3',
          question: 'Which utensil is used to serve the oysters?',
          options: [
            'Demi Spoon',
            'Oyster Fork',
            'Cocktail Fork',
            'Mezze Spoon'
          ],
          correctAnswer: 'Oyster Fork'
        },
        {
          id: 'oysters-4',
          question: 'What is "lulo" in the mignonette?',
          options: [
            'A type of vinegar',
            'A tropical citrus fruit',
            'A Mediterranean herb',
            'A type of pepper'
          ],
          correctAnswer: 'A tropical citrus fruit'
        },
        {
          id: 'oysters-5',
          question: 'Which allergen is present in the oyster dish?',
          options: [
            'Gluten',
            'Dairy',
            'Mollusks',
            'Nuts'
          ],
          correctAnswer: 'Mollusks'
        }
      ]
    },
    {
      id: 'crudos-2',
      dish: 'Kibbeh Nayeh',
      questions: [
        {
          id: 'kibbeh-1',
          question: 'What is the main protein in Kibbeh Nayeh?',
          options: [
            'Beef',
            'Lamb',
            'Chicken',
            'Fish'
          ],
          correctAnswer: 'Lamb'
        },
        {
          id: 'kibbeh-2',
          question: 'What grain is mixed with the meat in Kibbeh Nayeh?',
          options: [
            'Rice',
            'Couscous',
            'Bulgur Wheat',
            'Quinoa'
          ],
          correctAnswer: 'Bulgur Wheat'
        },
        {
          id: 'kibbeh-3',
          question: 'How many allergens are listed for Kibbeh Nayeh?',
          options: [
            '3',
            '4',
            '5',
            '6'
          ],
          correctAnswer: '5'
        },
        {
          id: 'kibbeh-4',
          question: 'What is "Methi Labneh" in the Kibbeh Nayeh dish?',
          options: [
            'A type of grain',
            'A yogurt-based sauce with fenugreek',
            'A spice blend',
            'A type of bread'
          ],
          correctAnswer: 'A yogurt-based sauce with fenugreek'
        },
        {
          id: 'kibbeh-5',
          question: 'What is "Dukkah" in the Kibbeh Nayeh dish?',
          options: [
            'A Middle Eastern spice and nut blend',
            'A type of sauce',
            'A cooking technique',
            'A type of bread'
          ],
          correctAnswer: 'A Middle Eastern spice and nut blend'
        },
        {
          id: 'kibbeh-6',
          question: 'What vegetable is charred and served with Kibbeh Nayeh?',
          options: [
            'Zucchini',
            'Eggplant',
            'Bell pepper',
            'Tomato'
          ],
          correctAnswer: 'Eggplant'
        },
        {
          id: 'kibbeh-7',
          question: 'Which utensils are used to serve Kibbeh Nayeh?',
          options: [
            'Spoon only',
            'Fork only',
            'Fork and Butter Knife',
            'Mezze Spoon'
          ],
          correctAnswer: 'Fork and Butter Knife'
        }
      ]
    },
    {
      id: 'crudos-3',
      dish: 'Caviar',
      questions: [
        {
          id: 'caviar-1',
          question: 'What type(s) of caviar is/are offered on the menu?',
          options: [
            'Beluga',
            'Antonious (Siberian or Oscietra)',
            'Kaluga',
            'American Sturgeon'
          ],
          correctAnswer: 'Antonious (Siberian or Oscietra)'
        },
        {
          id: 'caviar-2',
          question: 'What type of bread is served with the caviar?',
          options: [
            'Brioche Toast',
            'Sourdough Crostini',
            'Mini Sobao Rolls and Begrhirs',
            'Rye Bread'
          ],
          correctAnswer: 'Mini Sobao Rolls and Begrhirs'
        },
        {
          id: 'caviar-3',
          question: 'Which utensil is NOT used when serving caviar?',
          options: [
            'M.O.P. Spoon',
            'Demi Spoons',
            'Oyster Fork',
            'All of these are used'
          ],
          correctAnswer: 'Oyster Fork'
        },
        {
          id: 'caviar-4',
          question: 'What does M.O.P. stand for in the caviar service?',
          options: [
            'Method Of Preparation',
            'Mother Of Pearl',
            'Measure Of Portion',
            'Mediterranean Olive Plate'
          ],
          correctAnswer: 'Mother Of Pearl'
        },
        {
          id: 'caviar-5',
          question: 'What are "traditional accoutrements" typically served with caviar?',
          options: [
            'Lemon wedges and hot sauce',
            'Chopped egg, onion, crème fraîche, and chives',
            'Olive oil and balsamic vinegar',
            'Tomato sauce and herbs'
          ],
          correctAnswer: 'Chopped egg, onion, crème fraîche, and chives'
        },
        {
          id: 'caviar-6',
          question: 'What is a "Begrhir"?',
          options: [
            'A type of caviar',
            'A serving utensil',
            'A Moroccan pancake',
            'A garnish'
          ],
          correctAnswer: 'A Moroccan pancake'
        },
        {
          id: 'caviar-7',
          question: 'What is a "Sobao Roll"?',
          options: [
            'A Spanish enriched bread roll',
            'A technique for serving caviar',
            'A type of garnish',
            'A Middle Eastern flatbread'
          ],
          correctAnswer: 'A Spanish enriched bread roll'
        },
        {
          id: 'caviar-8',
          question: 'How many allergens are listed for the Caviar dish?',
          options: [
            '4',
            '5',
            '6',
            '7'
          ],
          correctAnswer: '6'
        }
      ]
    },
    {
      id: 'crudos-4',
      dish: 'Catch of the Day',
      questions: [
        {
          id: 'catch-1',
          question: 'How is the Catch of the Day sourced?',
          options: [
            'Farm-raised',
            'Local Caught Wild',
            'Imported frozen',
            'Deep sea fishing'
          ],
          correctAnswer: 'Local Caught Wild'
        },
        {
          id: 'catch-2',
          question: 'What accompanies the Catch of the Day?',
          options: [
            'Lemon butter and capers',
            'Olive Tapenade, Basil and Grapefruit',
            'Tomato sauce and herbs',
            'White wine sauce'
          ],
          correctAnswer: 'Olive Tapenade, Basil and Grapefruit'
        },
        {
          id: 'catch-3',
          question: 'Which allergens are present in this dish?',
          options: [
            'Fish and Dairy',
            'Fish and Nightshade',
            'Fish and Nuts',
            'Fish and Shellfish'
          ],
          correctAnswer: 'Fish and Nightshade'
        }
      ]
    },
    {
      id: 'crudos-5',
      dish: 'Conch',
      questions: [
        {
          id: 'conch-1',
          question: 'What type of preparation is used for the Conch?',
          options: [
            'Grilled with herbs',
            'Raw with Aqua Pazza',
            'Fried with breading',
            'Steamed with wine'
          ],
          correctAnswer: 'Raw with Aqua Pazza'
        },
        {
          id: 'conch-2',
          question: 'What accompanies the Conch?',
          options: [
            'Avocado, Serrano chili, Fennel-Cucumber Aqua Pazza',
            'Lime, cilantro, and mango salsa',
            'Tomato sauce and garlic',
            'Coconut milk and curry'
          ],
          correctAnswer: 'Avocado, Serrano chili, Fennel-Cucumber Aqua Pazza'
        },
        {
          id: 'conch-3',
          question: 'Which allergens are listed for the Conch dish?',
          options: [
            'Shellfish only',
            'Mollusks and Fish',
            'Mollusks and Dairy',
            'Fish and Shellfish'
          ],
          correctAnswer: 'Mollusks and Fish'
        },
        {
          id: 'conch-4',
          question: 'What is "Aqua Pazza"?',
          options: [
            'A type of shellfish',
            'A light broth/sauce',
            'A cooking technique',
            'A type of garnish'
          ],
          correctAnswer: 'A light broth/sauce'
        },
        {
          id: 'conch-5',
          question: 'What vegetable is used in the Aqua Pazza for the Conch dish?',
          options: [
            'Tomato',
            'Fennel and Cucumber',
            'Carrot',
            'Celery'
          ],
          correctAnswer: 'Fennel and Cucumber'
        }
      ]
    },
    {
      id: 'crudos-6',
      dish: 'Snapper',
      questions: [
        {
          id: 'snapper-1',
          question: 'What specific type of snapper is used?',
          options: [
            'Red Snapper',
            'Queen Snapper',
            'Yellow Snapper',
            'Lane Snapper'
          ],
          correctAnswer: 'Queen Snapper'
        },
        {
          id: 'snapper-2',
          question: 'What accompanies the Snapper?',
          options: [
            'Lemon butter sauce',
            'Salmoriglio, Trout Roe and Finger Lime',
            'White wine and capers',
            'Olive oil and herbs'
          ],
          correctAnswer: 'Salmoriglio, Trout Roe and Finger Lime'
        },
        {
          id: 'snapper-3',
          question: 'Which allergens are present in the Snapper dish?',
          options: [
            'Fish only',
            'Fish and Dairy',
            'Fish and Allium',
            'Fish and Shellfish'
          ],
          correctAnswer: 'Fish and Allium'
        },
        {
          id: 'snapper-4',
          question: 'What is "Salmoriglio"?',
          options: [
            'A type of fish similar to snapper',
            'A Mediterranean herb sauce',
            'A cooking technique',
            'A type of garnish'
          ],
          correctAnswer: 'A Mediterranean herb sauce'
        },
        {
          id: 'snapper-5',
          question: 'What is special about "Finger Lime"?',
          options: [
            'It\'s much larger than regular limes',
            'It contains caviar-like pearls of juice',
            'It\'s extremely sour',
            'It\'s a hybrid citrus fruit'
          ],
          correctAnswer: 'It contains caviar-like pearls of juice'
        }
      ]
    },
    {
      id: 'crudos-7',
      dish: 'Bluefin Tuna',
      questions: [
        {
          id: 'tuna-1',
          question: 'What brand of Bluefin Tuna is specified on the menu?',
          options: [
            'Tsukiji',
            'Bluefina',
            'Kindai',
            'Wild Caught'
          ],
          correctAnswer: 'Bluefina'
        },
        {
          id: 'tuna-2',
          question: 'What accompanies the Bluefin Tuna?',
          options: [
            'Fresh lemon and olive oil',
            'Preserved Lemon, EVOO and Caviar',
            'Wasabi and soy sauce',
            'Ginger and ponzu'
          ],
          correctAnswer: 'Preserved Lemon, EVOO and Caviar'
        },
        {
          id: 'tuna-3',
          question: 'What allergen is listed for the Bluefin Tuna dish?',
          options: [
            'Fish only',
            'Fish and Dairy',
            'Fish and Soy',
            'Fish and Shellfish'
          ],
          correctAnswer: 'Fish only'
        },
        {
          id: 'tuna-4',
          question: 'What does "EVOO" stand for?',
          options: [
            'Extra Virgin Olive Oil',
            'Enhanced Vegetable Oil Option',
            'Exceptional Vinegar and Olive Oil',
            'Eastern Valley Organic Oil'
          ],
          correctAnswer: 'Extra Virgin Olive Oil'
        },
        {
          id: 'tuna-5',
          question: 'How is "Preserved Lemon" prepared?',
          options: [
            'Dehydrated lemon slices',
            'Lemons preserved in salt and their own juices',
            'Lemons cooked in sugar syrup',
            'Lemons pickled in vinegar'
          ],
          correctAnswer: 'Lemons preserved in salt and their own juices'
        }
      ]
    }
  ],
  primi: [
    {
      id: 'primi-1',
      dish: 'Fritto Misto',
      questions: [
        {
          id: 'fritto-1',
          question: 'What items are included in the Fritto Misto?',
          options: [
            'Calamari, shrimp, and zucchini',
            'Calamari, cod, and potatoes',
            'Shrimp, mussels, and vegetables',
            'Octopus, shrimp, and eggplant'
          ],
          correctAnswer: 'Calamari, shrimp, and zucchini'
        },
        {
          id: 'fritto-2',
          question: 'How is the Fritto Misto prepared?',
          options: [
            'Grilled with herbs',
            'Lightly dusted and fried',
            'Steamed with white wine',
            'Baked with breadcrumbs'
          ],
          correctAnswer: 'Lightly dusted and fried'
        },
        {
          id: 'fritto-3',
          question: 'What sauce accompanies the Fritto Misto?',
          options: [
            'Tomato sauce',
            'Lemon aioli',
            'Garlic butter',
            'Cocktail sauce'
          ],
          correctAnswer: 'Lemon aioli'
        },
        {
          id: 'fritto-4',
          question: 'Which allergens are present in the Fritto Misto?',
          options: [
            'Gluten, Shellfish, Egg',
            'Dairy, Fish, Gluten',
            'Shellfish, Nuts, Dairy',
            'Egg, Dairy, Fish'
          ],
          correctAnswer: 'Gluten, Shellfish, Egg'
        },
        {
          id: 'fritto-5',
          question: 'What utensils are used to serve Fritto Misto?',
          options: [
            'Spoon and fork',
            'Knife and fork',
            'Chopsticks',
            'Mezze spoon'
          ],
          correctAnswer: 'Knife and fork'
        }
      ]
    },
    {
      id: 'primi-2',
      dish: 'Lobster Burrata',
      questions: [
        {
          id: 'lobster-1',
          question: 'What type of lobster is used in the Lobster Burrata dish?',
          options: [
            'Maine Lobster',
            'Spiny Lobster',
            'Rock Lobster',
            'Norwegian Lobster'
          ],
          correctAnswer: 'Maine Lobster'
        },
        {
          id: 'lobster-2',
          question: 'How is the lobster prepared in this dish?',
          options: [
            'Grilled',
            'Marinated',
            'Steamed',
            'Poached'
          ],
          correctAnswer: 'Marinated'
        },
        {
          id: 'lobster-3',
          question: 'What is burrata?',
          options: [
            'A type of lobster',
            'A fresh Italian cheese made from mozzarella and cream',
            'A Mediterranean herb',
            'A cooking technique'
          ],
          correctAnswer: 'A fresh Italian cheese made from mozzarella and cream'
        },
        {
          id: 'lobster-4',
          question: 'What accompanies the Lobster Burrata?',
          options: [
            'Garlic bread and olive oil',
            'Tomato Conserva, Pickled Eggplant and Basil',
            'Lemon and capers',
            'Arugula and pine nuts'
          ],
          correctAnswer: 'Tomato Conserva, Pickled Eggplant and Basil'
        },
        {
          id: 'lobster-5',
          question: 'Which allergens are present in the Lobster Burrata?',
          options: [
            'Shellfish, Dairy, Gluten',
            'Shellfish, Nightshade, Sulfite',
            'Shellfish, Nuts, Egg',
            'Shellfish, Fish, Dairy'
          ],
          correctAnswer: 'Shellfish, Nightshade, Sulfite'
        }
      ]
    },
    {
      id: 'primi-3',
      dish: 'Fattoush Salad',
      questions: [
        {
          id: 'fattoush-1',
          question: 'What is the base of the Fattoush Salad?',
          options: [
            'Pasta',
            'Garden Greens',
            'Grains',
            'Legumes'
          ],
          correctAnswer: 'Garden Greens'
        },
        {
          id: 'fattoush-2',
          question: 'What type of bread is used in Fattoush Salad?',
          options: [
            'Sourdough',
            'Pita',
            'Focaccia',
            'Baguette'
          ],
          correctAnswer: 'Pita'
        },
        {
          id: 'fattoush-3',
          question: 'What spice gives Fattoush its distinctive flavor?',
          options: [
            'Cumin',
            'Sumac',
            'Za\'atar',
            'Paprika'
          ],
          correctAnswer: 'Sumac'
        },
        {
          id: 'fattoush-4',
          question: 'What type of fish is included in the Fattoush Salad?',
          options: [
            'Sardines',
            'White Anchovy',
            'Tuna',
            'Salmon'
          ],
          correctAnswer: 'White Anchovy'
        },
        {
          id: 'fattoush-5',
          question: 'What type of dressing is used on the Fattoush Salad?',
          options: [
            'Tahini dressing',
            'Pomegranate Vinaigrette',
            'Lemon-Herb Yogurt',
            'Olive oil and balsamic'
          ],
          correctAnswer: 'Pomegranate Vinaigrette'
        }
      ]
    },
    {
      id: 'primi-4',
      dish: 'Pulpo a la Plancha',
      questions: [
        {
          id: 'pulpo-1',
          question: 'What type of seafood is "Pulpo"?',
          options: [
            'Squid',
            'Octopus',
            'Cuttlefish',
            'Lobster'
          ],
          correctAnswer: 'Octopus'
        },
        {
          id: 'pulpo-2',
          question: 'How is the octopus prepared before grilling in this dish?',
          options: [
            'Marinated in olive oil',
            'Red-Wine Braised',
            'Poached in court bouillon',
            'Smoked'
          ],
          correctAnswer: 'Red-Wine Braised'
        },
        {
          id: 'pulpo-3',
          question: 'What does "a la Plancha" refer to?',
          options: [
            'A Spanish sauce',
            'A grilling technique on a metal plate',
            'A type of garnish',
            'A method of serving'
          ],
          correctAnswer: 'A grilling technique on a metal plate'
        },
        {
          id: 'pulpo-4',
          question: 'What is "Lardo" in the Pulpo dish?',
          options: [
            'A type of octopus',
            'Cured pork fat',
            'A Spanish herb',
            'A cooking oil'
          ],
          correctAnswer: 'Cured pork fat'
        },
        {
          id: 'pulpo-5',
          question: 'What accompanies the octopus in this dish?',
          options: [
            'Romesco sauce',
            'Patatas bravas',
            'Date Salsa Verde',
            'Aioli'
          ],
          correctAnswer: 'Date Salsa Verde'
        }
      ]
    },
    {
      id: 'primi-5',
      dish: 'Fatteh',
      questions: [
        {
          id: 'fatteh-1',
          question: 'What are the main components of Fatteh?',
          options: [
            'Lamb and rice',
            'Roasted Eggplant and Chickpea',
            'Beef and bulgur',
            'Chicken and couscous'
          ],
          correctAnswer: 'Roasted Eggplant and Chickpea'
        },
        {
          id: 'fatteh-2',
          question: 'What type of bread is used in Fatteh?',
          options: [
            'Lavash',
            'Toasted Pita',
            'Naan',
            'Focaccia'
          ],
          correctAnswer: 'Toasted Pita'
        },
        {
          id: 'fatteh-3',
          question: 'What type of nuts are used in the Fatteh?',
          options: [
            'Almonds',
            'Walnuts',
            'Pine Nuts',
            'Pistachios'
          ],
          correctAnswer: 'Pine Nuts'
        },
        {
          id: 'fatteh-4',
          question: 'What type of sauce is served with Fatteh?',
          options: [
            'Tahini Yogurt',
            'Lemon Yogurt',
            'Tomato sauce',
            'Garlic aioli'
          ],
          correctAnswer: 'Tahini Yogurt'
        },
        {
          id: 'fatteh-5',
          question: 'Which utensils are used to serve Fatteh?',
          options: [
            'Knife and fork',
            'Spoon only',
            'Fork and spoon',
            'Mezze spoon'
          ],
          correctAnswer: 'Fork and spoon'
        }
      ]
    },
    {
      id: 'primi-6',
      dish: 'Finocchio e Rucola',
      questions: [
        {
          id: 'finocchio-1',
          question: 'What is "Finocchio" in Italian?',
          options: [
            'Fennel',
            'Figs',
            'Fiddlehead ferns',
            'Fingerling potatoes'
          ],
          correctAnswer: 'Fennel'
        },
        {
          id: 'finocchio-2',
          question: 'What is "Rucola" in Italian?',
          options: [
            'Radicchio',
            'Romaine',
            'Arugula',
            'Rocket'
          ],
          correctAnswer: 'Arugula'
        },
        {
          id: 'finocchio-3',
          question: 'What other greens are included in this salad?',
          options: [
            'Spinach and kale',
            'Radicchio and endive',
            'Lettuce and cabbage',
            'Chard and collard greens'
          ],
          correctAnswer: 'Radicchio and endive'
        },
        {
          id: 'finocchio-4',
          question: 'What nuts are included in this salad?',
          options: [
            'Walnuts',
            'Almonds',
            'Pistachios',
            'Hazelnuts'
          ],
          correctAnswer: 'Pistachios'
        },
        {
          id: 'finocchio-5',
          question: 'What type of dressing is used on this salad?',
          options: [
            'Balsamic vinaigrette',
            'Citrus Vinaigrette',
            'Olive oil and lemon',
            'Creamy herb dressing'
          ],
          correctAnswer: 'Citrus Vinaigrette'
        }
      ]
    }
  ],
  pasta: [
    {
      id: 'pasta-1',
      dish: 'Mushroom Risotto',
      questions: [
        {
          id: 'risotto-1',
          question: 'What type of rice is used in the Mushroom Risotto?',
          options: [
            'Carnaroli',
            'Acquarello',
            'Vialone Nano',
            'Bomba'
          ],
          correctAnswer: 'Acquarello'
        },
        {
          id: 'risotto-2',
          question: 'What type of wine is used in the Mushroom Risotto?',
          options: [
            'White Wine',
            'Red Wine',
            'Marsala',
            'Sherry'
          ],
          correctAnswer: 'Marsala'
        },
        {
          id: 'risotto-3',
          question: 'What cheese is used in the Mushroom Risotto?',
          options: [
            'Grana Padano',
            'Pecorino Romano',
            'Parmiggiano Reggiano',
            'Asiago'
          ],
          correctAnswer: 'Parmiggiano Reggiano'
        },
        {
          id: 'risotto-4',
          question: 'What gives the risotto additional richness?',
          options: [
            'Cream',
            'Butter',
            'Beef Jus',
            'Olive Oil'
          ],
          correctAnswer: 'Beef Jus'
        },
        {
          id: 'risotto-5',
          question: 'Which allergens are present in the Mushroom Risotto?',
          options: [
            'Dairy and Gluten',
            'Dairy, Sulfites, and Allium',
            'Dairy and Eggs',
            'Dairy and Nuts'
          ],
          correctAnswer: 'Dairy, Sulfites, and Allium'
        }
      ]
    },
    {
      id: 'pasta-2',
      dish: 'Malloreddus',
      questions: [
        {
          id: 'malloreddus-1',
          question: 'What type of pasta is Malloreddus?',
          options: [
            'Long ribbon pasta',
            'Sardinian Gnocchi',
            'Stuffed pasta',
            'Shell pasta'
          ],
          correctAnswer: 'Sardinian Gnocchi'
        },
        {
          id: 'malloreddus-2',
          question: 'What sauce is served with the Malloreddus?',
          options: [
            'Pesto',
            'Pomodoro',
            'Alfredo',
            'Carbonara'
          ],
          correctAnswer: 'Pomodoro'
        },
        {
          id: 'malloreddus-3',
          question: 'What type of cheese accompanies the Malloreddus?',
          options: [
            'Mozzarella',
            'Parmesan',
            'Charred Ricotta Salata',
            'Pecorino'
          ],
          correctAnswer: 'Charred Ricotta Salata'
        },
        {
          id: 'malloreddus-4',
          question: 'Which region of Italy is Malloreddus from?',
          options: [
            'Sicily',
            'Tuscany',
            'Sardinia',
            'Naples'
          ],
          correctAnswer: 'Sardinia'
        },
        {
          id: 'malloreddus-5',
          question: 'Which allergens are present in the Malloreddus?',
          options: [
            'Gluten and Dairy',
            'Nightshade, Gluten, Egg, and Allium',
            'Dairy and Nuts',
            'Shellfish and Gluten'
          ],
          correctAnswer: 'Nightshade, Gluten, Egg, and Allium'
        }
      ]
    },
    {
      id: 'pasta-3',
      dish: 'Pansotti',
      questions: [
        {
          id: 'pansotti-1',
          question: 'What type of pasta is Pansotti in this dish?',
          options: [
            'Regular ravioli',
            'Squid ink ravioli',
            'Black pepper ravioli',
            'Spinach ravioli'
          ],
          correctAnswer: 'Squid ink ravioli'
        },
        {
          id: 'pansotti-2',
          question: 'What is the filling of the Pansotti?',
          options: [
            'Cheese and spinach',
            'Mushroom and truffle',
            'Lobster',
            'Beef and pork'
          ],
          correctAnswer: 'Lobster'
        },
        {
          id: 'pansotti-3',
          question: 'What sauce accompanies the Pansotti?',
          options: [
            'Tomato sauce',
            'Cream sauce',
            'Shellfish Bisque',
            'White wine sauce'
          ],
          correctAnswer: 'Shellfish Bisque'
        },
        {
          id: 'pansotti-4',
          question: 'What vegetable is featured in the dish?',
          options: [
            'Fennel',
            'Asparagus',
            'Zucchini',
            'Eggplant'
          ],
          correctAnswer: 'Fennel'
        },
        {
          id: 'pansotti-5',
          question: 'Which allergens are present in the Pansotti?',
          options: [
            'Gluten, Dairy, Egg',
            'Gluten, Shellfish, Dairy, Nightshade, Allium, Egg',
            'Shellfish, Dairy, Nuts',
            'Gluten, Fish, Dairy'
          ],
          correctAnswer: 'Gluten, Shellfish, Dairy, Nightshade, Allium, Egg'
        }
      ]
    },
    {
      id: 'pasta-4',
      dish: 'Mafaldine',
      questions: [
        {
          id: 'mafaldine-1',
          question: 'What type of pasta is Mafaldine?',
          options: [
            'Tube pasta',
            'Fresh ribbon pasta',
            'Stuffed pasta',
            'Shell pasta'
          ],
          correctAnswer: 'Fresh ribbon pasta'
        },
        {
          id: 'mafaldine-2',
          question: 'What type of ragu is served with the Mafaldine?',
          options: [
            'Beef Ragu',
            'Lamb Ragu',
            'Wild Boar Ragu',
            'Veal Ragu'
          ],
          correctAnswer: 'Wild Boar Ragu'
        },
        {
          id: 'mafaldine-3',
          question: 'What cheese is served with the Mafaldine?',
          options: [
            'Pecorino Romano',
            'Ricotta Salata',
            'Parmiggiano Reggiano',
            'Gorgonzola'
          ],
          correctAnswer: 'Parmiggiano Reggiano'
        },
        {
          id: 'mafaldine-4',
          question: 'Which allergens are present in the Mafaldine?',
          options: [
            'Gluten and Dairy',
            'Gluten, Pork, Dairy, Nightshade, Allium, Egg',
            'Dairy and Nuts',
            'Shellfish and Gluten'
          ],
          correctAnswer: 'Gluten, Pork, Dairy, Nightshade, Allium, Egg'
        },
        {
          id: 'mafaldine-5',
          question: 'What makes this pasta special?',
          options: [
            'It\'s imported from Italy',
            'It\'s made fresh in-house',
            'It\'s gluten-free',
            'It\'s colored with squid ink'
          ],
          correctAnswer: 'It\'s made fresh in-house'
        }
      ]
    },
    {
      id: 'pasta-5',
      dish: 'Fusilli',
      questions: [
        {
          id: 'fusilli-1',
          question: 'What type of pasta is Fusilli?',
          options: [
            'Straight pasta',
            'Spiral pasta',
            'Tube pasta',
            'Sheet pasta'
          ],
          correctAnswer: 'Spiral pasta'
        },
        {
          id: 'fusilli-2',
          question: 'How is the octopus prepared in this dish?',
          options: [
            'Grilled',
            'Red Wine Braised',
            'Steamed',
            'Pan-seared'
          ],
          correctAnswer: 'Red Wine Braised'
        },
        {
          id: 'fusilli-3',
          question: 'What unique ingredient adds richness to the dish?',
          options: [
            'Bone Marrow',
            'Truffle',
            'Foie Gras',
            'Caviar'
          ],
          correctAnswer: 'Bone Marrow'
        },
        {
          id: 'fusilli-4',
          question: 'What is Mollica in this dish?',
          options: [
            'A type of cheese',
            'Toasted breadcrumbs',
            'A herb mixture',
            'A type of sauce'
          ],
          correctAnswer: 'Toasted breadcrumbs'
        },
        {
          id: 'fusilli-5',
          question: 'Which allergens are present in the Fusilli?',
          options: [
            'Gluten and Dairy',
            'Gluten, Dairy, Allium, Nightshade',
            'Dairy and Nuts',
            'Shellfish and Gluten'
          ],
          correctAnswer: 'Gluten, Dairy, Allium, Nightshade'
        }
      ]
    },
    {
      id: 'pasta-6',
      dish: 'Casarecce',
      questions: [
        {
          id: 'casarecce-1',
          question: 'What type of pasta is Casarecce?',
          options: [
            'Long twisted pasta',
            'Short twisted pasta',
            'Tube pasta',
            'Stuffed pasta'
          ],
          correctAnswer: 'Short twisted pasta'
        },
        {
          id: 'casarecce-2',
          question: 'What type of seafood is featured in this dish?',
          options: [
            'Lobster',
            'Blue Crab',
            'Shrimp',
            'Scallops'
          ],
          correctAnswer: 'Blue Crab'
        },
        {
          id: 'casarecce-3',
          question: 'What gives this dish its spicy flavor?',
          options: [
            'Calabrian Chili',
            'Harissa',
            'Black Pepper',
            'Red Pepper Flakes'
          ],
          correctAnswer: 'Harissa'
        },
        {
          id: 'casarecce-4',
          question: 'What citrus element is used in this dish?',
          options: [
            'Fresh Lemon',
            'Preserved Lemon',
            'Orange',
            'Lime'
          ],
          correctAnswer: 'Preserved Lemon'
        },
        {
          id: 'casarecce-5',
          question: 'Which allergens are present in the Casarecce?',
          options: [
            'Gluten and Dairy',
            'Gluten, Crustacean, Egg, Nightshade, Allium',
            'Dairy and Nuts',
            'Shellfish and Dairy'
          ],
          correctAnswer: 'Gluten, Crustacean, Egg, Nightshade, Allium'
        }
      ]
    }
  ],
  principale: [
    {
      id: 'principale-1',
      dish: 'Swordfish',
      questions: [
        {
          id: 'swordfish-1',
          question: 'How is the swordfish prepared?',
          options: [
            'Pan-seared',
            'Grilled',
            'Poached',
            'Baked'
          ],
          correctAnswer: 'Grilled'
        },
        {
          id: 'swordfish-2',
          question: 'What type of legumes accompany the swordfish?',
          options: [
            'Black Lentils',
            'Chickpeas',
            'White Beans',
            'Fava Beans'
          ],
          correctAnswer: 'Black Lentils'
        },
        {
          id: 'swordfish-3',
          question: 'What unique preparation of swordfish is included in the dish?',
          options: [
            'Smoked belly',
            'Cured belly',
            'Grilled belly',
            'Braised belly'
          ],
          correctAnswer: 'Cured belly'
        },
        {
          id: 'swordfish-4',
          question: 'What sauce accompanies the swordfish?',
          options: [
            'Romesco',
            'Chermoula',
            'Salsa Verde',
            'Beurre Blanc'
          ],
          correctAnswer: 'Chermoula'
        },
        {
          id: 'swordfish-5',
          question: 'Which allergens are present in the Swordfish dish?',
          options: [
            'Fish only',
            'Fish and Dairy',
            'Fish and Allium',
            'Fish and Shellfish'
          ],
          correctAnswer: 'Fish and Allium'
        }
      ]
    },
    {
      id: 'principale-2',
      dish: 'Grouper',
      questions: [
        {
          id: 'grouper-1',
          question: 'How is the grouper prepared?',
          options: [
            'Grilled',
            'Seared',
            'Poached',
            'Roasted'
          ],
          correctAnswer: 'Seared'
        },
        {
          id: 'grouper-2',
          question: 'What vegetable accompanies the grouper?',
          options: [
            'Fennel',
            'Asparagus',
            'Celery',
            'Carrots'
          ],
          correctAnswer: 'Fennel'
        },
        {
          id: 'grouper-3',
          question: 'What citrus elements are featured in the dish?',
          options: [
            'Lemon and Lime',
            'Orange and Lemon',
            'Citrus and Orange Vinaigrette',
            'Grapefruit and Lime'
          ],
          correctAnswer: 'Citrus and Orange Vinaigrette'
        },
        {
          id: 'grouper-4',
          question: 'What makes this grouper special?',
          options: [
            'It\'s farm-raised',
            'It\'s locally caught',
            'It\'s imported',
            'It\'s aged'
          ],
          correctAnswer: 'It\'s locally caught'
        },
        {
          id: 'grouper-5',
          question: 'Which allergens are present in the Grouper dish?',
          options: [
            'Fish only',
            'Fish and Dairy',
            'Fish and Allium',
            'Fish and Shellfish'
          ],
          correctAnswer: 'Fish and Allium'
        }
      ]
    },
    {
      id: 'principale-3',
      dish: 'Prawns',
      questions: [
        {
          id: 'prawns-1',
          question: 'How are the prawns served?',
          options: [
            'Peeled',
            'Head-On',
            'Butterflied',
            'Skewered'
          ],
          correctAnswer: 'Head-On'
        },
        {
          id: 'prawns-2',
          question: 'What type of beans accompany the prawns?',
          options: [
            'Navy Beans',
            'Gigante Beans',
            'Cannellini Beans',
            'Lima Beans'
          ],
          correctAnswer: 'Gigante Beans'
        },
        {
          id: 'prawns-3',
          question: 'What type of harissa is used in the dish?',
          options: [
            'Red Harissa',
            'Green Harissa',
            'Rose Harissa',
            'Black Harissa'
          ],
          correctAnswer: 'Green Harissa'
        },
        {
          id: 'prawns-4',
          question: 'What type of vinaigrette is used?',
          options: [
            'Lemon Vinaigrette',
            'N\'Duja Vinaigrette',
            'Herb Vinaigrette',
            'Citrus Vinaigrette'
          ],
          correctAnswer: 'N\'Duja Vinaigrette'
        },
        {
          id: 'prawns-5',
          question: 'Which allergens are present in the Prawns dish?',
          options: [
            'Shellfish only',
            'Shellfish and Dairy',
            'Shellfish and Nightshade',
            'Shellfish and Gluten'
          ],
          correctAnswer: 'Shellfish and Nightshade'
        }
      ]
    },
    {
      id: 'principale-4',
      dish: 'Cod',
      questions: [
        {
          id: 'cod-1',
          question: 'What type of cod is used in this dish?',
          options: [
            'Atlantic Cod',
            'Pacific Cod',
            'Cod',
            'Merluza'
          ],
          correctAnswer: 'Cod'
        },
        {
          id: 'cod-2',
          question: 'How is the cod prepared?',
          options: [
            'Grilled',
            'Pan Roasted',
            'Poached',
            'Baked'
          ],
          correctAnswer: 'Pan Roasted'
        },
        {
          id: 'cod-3',
          question: 'What type of squid preparation accompanies the cod?',
          options: [
            'Grilled Squid',
            'Fried Calamari',
            'Calamar Diamante',
            'Stuffed Squid'
          ],
          correctAnswer: 'Calamar Diamante'
        },
        {
          id: 'cod-4',
          question: 'What type of beans are served with the cod?',
          options: [
            'Black Beans',
            'Kidney Beans',
            'White Beans',
            'Garbanzo'
          ],
          correctAnswer: 'Garbanzo'
        },
        {
          id: 'cod-5',
          question: 'Which allergens are present in the Cod dish?',
          options: [
            'Fish only',
            'Fish, Pork, Nightshade',
            'Fish and Dairy',
            'Fish and Shellfish'
          ],
          correctAnswer: 'Fish, Pork, Nightshade'
        }
      ]
    },
    {
      id: 'principale-5',
      dish: 'Lamb',
      questions: [
        {
          id: 'lamb-1',
          question: 'What cut of lamb is used in this dish?',
          options: [
            'Leg of Lamb',
            'Lamb Shoulder',
            'Colorado Lamb Rack',
            'Lamb Chops'
          ],
          correctAnswer: 'Colorado Lamb Rack'
        },
        {
          id: 'lamb-2',
          question: 'What type of pasta accompanies the lamb?',
          options: [
            'Couscous',
            'Orzo',
            'Fregola',
            'Risotto'
          ],
          correctAnswer: 'Fregola'
        },
        {
          id: 'lamb-3',
          question: 'How is the fregola served?',
          options: [
            'As a side dish',
            'Stuffed in a pepper',
            'In a sauce',
            'As a salad'
          ],
          correctAnswer: 'Stuffed in a pepper'
        },
        {
          id: 'lamb-4',
          question: 'What cheese is included in the dish?',
          options: [
            'Parmesan',
            'Pecorino',
            'Feta',
            'Halloumi'
          ],
          correctAnswer: 'Feta'
        },
        {
          id: 'lamb-5',
          question: 'Which allergens are present in the Lamb dish?',
          options: [
            'Gluten only',
            'Gluten, Nightshade, Dairy, Allium',
            'Dairy and Nuts',
            'Gluten and Dairy'
          ],
          correctAnswer: 'Gluten, Nightshade, Dairy, Allium'
        }
      ]
    },
    {
      id: 'principale-6',
      dish: 'Chicken',
      questions: [
        {
          id: 'chicken-1',
          question: 'How is the chicken prepared?',
          options: [
            'Roasted whole',
            'Pan Roasted Half Chicken',
            'Grilled pieces',
            'Braised'
          ],
          correctAnswer: 'Pan Roasted Half Chicken'
        },
        {
          id: 'chicken-2',
          question: 'How is the chicken marinated?',
          options: [
            'Herb marinade',
            'Harissa marinade',
            'Citrus marinade',
            'Yogurt marinade'
          ],
          correctAnswer: 'Harissa marinade'
        },
        {
          id: 'chicken-3',
          question: 'What rice preparation accompanies the chicken?',
          options: [
            'Saffron Rice',
            'Wild Rice',
            'Riso al Salto',
            'Rice Pilaf'
          ],
          correctAnswer: 'Riso al Salto'
        },
        {
          id: 'chicken-4',
          question: 'What sauce is served with the chicken?',
          options: [
            'Herb Sauce',
            'Natural Jus',
            'Harissa Sauce',
            'Lemon Sauce'
          ],
          correctAnswer: 'Natural Jus'
        },
        {
          id: 'chicken-5',
          question: 'Which allergens are present in the Chicken dish?',
          options: [
            'None',
            'Allium, Nightshade, Dairy',
            'Gluten and Dairy',
            'Nuts and Dairy'
          ],
          correctAnswer: 'Allium, Nightshade, Dairy'
        }
      ]
    },
    {
      id: 'principale-7',
      dish: 'NY Steak',
      questions: [
        {
          id: 'nysteak-1',
          question: 'What grade of beef is used for the NY Steak?',
          options: [
            'Choice',
            'Prime',
            'Select',
            'Wagyu'
          ],
          correctAnswer: 'Prime'
        },
        {
          id: 'nysteak-2',
          question: 'What type of potatoes accompany the steak?',
          options: [
            'Mashed Potatoes',
            'Rosemary Potatoes',
            'Roasted Potatoes',
            'Fingerling Potatoes'
          ],
          correctAnswer: 'Rosemary Potatoes'
        },
        {
          id: 'nysteak-3',
          question: 'What vegetable is served with the steak?',
          options: [
            'Asparagus',
            'Green Beans',
            'Broccolini',
            'Brussels Sprouts'
          ],
          correctAnswer: 'Broccolini'
        },
        {
          id: 'nysteak-4',
          question: 'What sauce accompanies the steak?',
          options: [
            'Béarnaise',
            'Red Wine Jus',
            'Peppercorn Sauce',
            'Herb Butter'
          ],
          correctAnswer: 'Red Wine Jus'
        },
        {
          id: 'nysteak-5',
          question: 'Which allergens are present in the NY Steak dish?',
          options: [
            'None',
            'Dairy, Egg, Allium, Sulfites',
            'Dairy and Gluten',
            'Dairy and Nuts'
          ],
          correctAnswer: 'Dairy, Egg, Allium, Sulfites'
        }
      ]
    },
    {
      id: 'principale-8',
      dish: 'Cauliflower',
      questions: [
        {
          id: 'cauliflower-1',
          question: 'How is the cauliflower prepared?',
          options: [
            'Roasted',
            'Grilled',
            'Steamed',
            'Fried'
          ],
          correctAnswer: 'Grilled'
        },
        {
          id: 'cauliflower-2',
          question: 'What is Panelle in this dish?',
          options: [
            'A type of pasta',
            'Chickpea fritters',
            'A sauce',
            'A seasoning blend'
          ],
          correctAnswer: 'Chickpea fritters'
        },
        {
          id: 'cauliflower-3',
          question: 'What is Dukkah?',
          options: [
            'A sauce',
            'A nut blend',
            'A type of bread',
            'A cooking method'
          ],
          correctAnswer: 'A nut blend'
        },
        {
          id: 'cauliflower-4',
          question: 'What sauce accompanies the cauliflower?',
          options: [
            'Tahini Sauce',
            'Tarator Sauce',
            'Romesco Sauce',
            'Harissa Sauce'
          ],
          correctAnswer: 'Tahini Sauce'
        },
        {
          id: 'cauliflower-5',
          question: 'Which allergens are present in the Cauliflower dish?',
          options: [
            'None',
            'Allium and Nuts',
            'Gluten and Dairy',
            'Dairy and Eggs'
          ],
          correctAnswer: 'Allium and Nuts'
        }
      ]
    },
    {
      id: 'principale-9',
      dish: 'Branzino',
      questions: [
        {
          id: 'branzino-1',
          question: 'How is the branzino served?',
          options: [
            'Filleted',
            'Whole',
            'Butterflied',
            'In pieces'
          ],
          correctAnswer: 'Whole'
        },
        {
          id: 'branzino-2',
          question: 'How is the branzino cooked?',
          options: [
            'Grilled',
            'Pan-seared',
            'Broiled',
            'Poached'
          ],
          correctAnswer: 'Broiled'
        },
        {
          id: 'branzino-3',
          question: 'What sauce accompanies the branzino?',
          options: [
            'Romesco',
            'Salsa Verde',
            'Beurre Blanc',
            'Chermoula'
          ],
          correctAnswer: 'Salsa Verde'
        },
        {
          id: 'branzino-4',
          question: 'What citrus element is served with the branzino?',
          options: [
            'Fresh Lemon',
            'Charred Lemon',
            'Preserved Lemon',
            'Grilled Lemon'
          ],
          correctAnswer: 'Charred Lemon'
        },
        {
          id: 'branzino-5',
          question: 'Which allergens are present in the Branzino dish?',
          options: [
            'Fish only',
            'Dairy, Allium, Fish, Gluten',
            'Fish and Shellfish',
            'Fish and Nuts'
          ],
          correctAnswer: 'Dairy, Allium, Fish, Gluten'
        }
      ]
    },
    {
      id: 'principale-10',
      dish: 'Bisteca Fiorentina',
      questions: [
        {
          id: 'bisteca-1',
          question: 'What cut of beef is used for the Bisteca Fiorentina?',
          options: [
            'Ribeye',
            'T-Bone',
            'Porterhouse',
            'Strip Steak'
          ],
          correctAnswer: 'Porterhouse'
        },
        {
          id: 'bisteca-2',
          question: 'How long is the beef aged?',
          options: [
            '30 Days',
            '45 Days',
            '60 Days',
            '90 Days'
          ],
          correctAnswer: '45 Days'
        },
        {
          id: 'bisteca-3',
          question: 'How is the steak cooked?',
          options: [
            'Pan-seared',
            'Broiled',
            'Charcoal Grilled',
            'Roasted'
          ],
          correctAnswer: 'Charcoal Grilled'
        },
        {
          id: 'bisteca-4',
          question: 'What sauces accompany the steak?',
          options: [
            'Red Wine Jus only',
            'Green Harissa only',
            'Green Harissa and Beef Jus',
            'Béarnaise and Red Wine Jus'
          ],
          correctAnswer: 'Green Harissa and Beef Jus'
        },
        {
          id: 'bisteca-5',
          question: 'Which allergens are present in the Bisteca Fiorentina?',
          options: [
            'None',
            'Dairy, Allium, Nightshade',
            'Dairy and Gluten',
            'Dairy and Eggs'
          ],
          correctAnswer: 'Dairy, Allium, Nightshade'
        }
      ]
    }
  ],
  sides: [
    {
      id: 'sides-1',
      dish: 'Patatas Bravas',
      questions: [
        {
          id: 'patatas-1',
          question: 'What types of potatoes are used?',
          options: [
            'Crispy fingerlings',
            'Rosemary fingerlings',
            'Steamed potatoes',
            'Boiled then fried'
          ],
          correctAnswer: 'Crispy fingerlings'
        },
        {
          id: 'patatas-2',
          question: 'What sauce accompanies the patatas bravas?',
          options: [
            'Aioli only',
            'Spicy tomato only',
            'Spicy Aioli',
            'Romesco sauce'
          ],
          correctAnswer: 'Spicy Aioli'
        },
        {
          id: 'patatas-3',
          question: 'What spices are used in the tomato sauce?',
          options: [
            'Paprika only',
            'Chili only',
            'Paprika and chili',
            'Cayenne only'
          ],
          correctAnswer: 'Paprika only'
        },
        {
          id: 'patatas-4',
          question: 'What herbs are used to garnish?',
          options: [
            'Parsley',
            'Chives',
            'Both parsley and chives',
            'Neither'
          ],
          correctAnswer: 'Parsley'
        },
        {
          id: 'patatas-5',
          question: 'Which allergens are present in the Patatas Bravas?',
          options: [
            'None',
            'Egg and Dairy',
            'Nightshade and Egg',
            'Nightshade only'
          ],
          correctAnswer: 'Nightshade and Egg'
        }
      ]
    },
    {
      id: 'sides-2',
      dish: 'CharredBroccolini',
      questions: [
        {
          id: 'broccolini-1',
          question: 'What citrus is used in the dish?',
          options: [
            'Lemon',
            'Orange',
            'Both juice and zest',
            'Neither'
          ],
          correctAnswer: 'Lemon'
        },
        {
          id: 'broccolini-2',
          question: 'What type of garnish is used?',
          options: [
            'Maldon salt',
            'Paprika',
            'Breadcrumbs',
            'Cilantro'
          ],
          correctAnswer: 'Breadcrumbs'
        },
        {
          id: 'broccolini-5',
          question: 'Which allergens are present in the Charred Broccolini?',
          options: [
            'None',
            'Allium only',
            'Dairy only',
            'Allium and Dairy'
          ],
          correctAnswer: 'Allium only'
        }
      ]
    },
    {
      id: 'sides-3',
      dish: 'Sautéed Mushrooms',
      questions: [
        {
          id: 'mushrooms-1',
          question: 'What type of mushrooms are used?',
          options: [
            'King oyster only',
            'Mixed mushrooms',
            'Shiitake only',
            'Button mushrooms'
          ],
          correctAnswer: 'Mixed mushrooms'
        },
        {
          id: 'mushrooms-2',
          question: 'What spice blend is used in the preparation?',
          options: [
            'Thyme',
            'Mixed spices',
            'Za\'tar',
            'Neither'
          ],
          correctAnswer: 'Za\'tar'
        },
        {
          id: 'mushrooms-3',
          question: 'Which allergens are present in the Roasted Mushrooms?',
          options: [
            'None',
            'Dairy only',
            'Dairy and Allium',
            'Allium only'
          ],
          correctAnswer: 'Dairy and Allium'
        }
      ]
    },
    {
      id: 'sides-4',
      dish: 'Roasted Carrots',
      questions: [
        {
          id: 'carrots-1',
          question: 'How are the carrots prepared?',
          options: [
            'Roasted baby',
            'Cut and roasted',
            'Roasted then cut',
            'Glazed and roasted'
          ],
          correctAnswer: 'Roasted baby'
        },
        {
          id: 'carrots-2',
          question: 'What condiment is used on the carrots?',
          options: [
            'Dukkah',
            'Za\'atar',
            'Harissa',
            'Baharat'
          ],
          correctAnswer: 'Harissa'
        },
        {
          id: 'carrots-3',
          question: 'What nut is used on the carrots?',
          options: [
            'Walnut',
            'Pecan',
            'Cashew',
            'Almond'
          ],
          correctAnswer: 'Almond'
        },
        {
          id: 'carrots-4',
          question: 'Which allergens is present in the Roasted Carrots?',
          options: [
            'Nuts',
            'Dairy only',
            'Dairy and Sesame',
            'Sesame only'
          ],
          correctAnswer: 'Nuts'
        }
      ]
    },
  ],
  dessert: [
    {
      id: 'dessert-1',
      dish: 'Ciccolato',
      questions: [
        {
          id: 'ciccolato-1',
          question: 'What are the main components of the Ciccolato dessert?',
          options: [
            'Meringue, pomegranate, and yogurt sorbet',
            'Chocolate Mousse, Chocolate Cake, Hazelnut and Tahini Gelato',
            'Semolina custard, phyllo, and honey',
            'Dark chocolate and espresso cremeux'
          ],
          correctAnswer: 'Chocolate Mousse, Chocolate Cake, Hazelnut and Tahini Gelato'
        },
        {
          id: 'ciccolato-2',
          question: 'Which allergens are present in the Ciccolato dessert?',
          options: [
            'Gluten, Nuts, Dairy',
            'Gluten, Dairy, Eggs',
            'Nuts, Dairy, Sesame',
            'Gluten, Nuts, Sesame'
          ],
          correctAnswer: 'Gluten, Nuts, Dairy'
        },
        {
          id: 'ciccolato-3',
          question: 'What utensil is used to serve the Ciccolato?',
          options: ['Fork', 'Knife', 'Spoon', 'Dessert Fork'],
          correctAnswer: 'Spoon'
        }
      ]
    },
    {
      id: 'dessert-2',
      dish: 'Pavlova',
      questions: [
        {
          id: 'pavlova-1',
          question: 'What is the base component of a Pavlova?',
          options: [
            'Chocolate cake',
            'Phyllo dough',
            'Meringue',
            'Semolina custard'
          ],
          correctAnswer: 'Meringue'
        },
        {
          id: 'pavlova-2',
          question: 'Which of the following is included in our Pavlova dessert?',
          options: [
            'Tahini Gelato',
            'Greek Yogurt Sorbet',
            'Walnut Ice Cream',
            'Cardamom Gelato'
          ],
          correctAnswer: 'Greek Yogurt Sorbet'
        },
        {
          id: 'pavlova-3',
          question: 'What fruit is featured in our Pavlova?',
          options: [
            'Strawberry and Blueberry',
            'Mango and Passion Fruit',
            'Pomegranate and Raspberry',
            'Peach and Apricot'
          ],
          correctAnswer: 'Pomegranate and Raspberry'
        },
        {
          id: 'pavlova-4',
          question: 'What whipped ingredient is used in our Pavlova?',
          options: [
            'Creme fraîche',
            'Mascarpone cream',
            'Rosemary whipped ganache',
            'Clotted cream'
          ],
          correctAnswer: 'Rosemary whipped ganache'
        }
      ]
    },
    {
      id: 'dessert-3',
      dish: 'Baklava',
      questions: [
        {
          id: 'baklava-1',
          question: 'What type of pastry is used in our Baklava?',
          options: [
            'Puff pastry',
            'Katifi',
            'Filo dough',
            'Shortcrust pastry'
          ],
          correctAnswer: 'Katifi'
        },
        {
          id: 'baklava-2',
          question: 'Which allergens are present in the Baklava?',
          options: [
            'Gluten, Nuts',
            'Gluten, Dairy, Nuts',
            'Nuts, Dairy',
            'Gluten, Eggs, Nuts'
          ],
          correctAnswer: 'Gluten, Nuts'
        },
        {
          id: 'baklava-3',
          question: 'What type of ice cream is served with our Baklava?',
          options: [
            'Pistachio Ice Cream',
            'Vanilla Ice Cream',
            'Walnut Ice Cream',
            'Honey Ice Cream'
          ],
          correctAnswer: 'Walnut Ice Cream'
        }
      ]
    },
    {
      id: 'dessert-4',
      dish: 'Galactoboureko',
      questions: [
        {
          id: 'galactoboureko-1',
          question: 'What is the main filling in Galactoboureko?',
          options: [
            'Chocolate mousse',
            'Semolina custard',
            'Pistachio cream',
            'Mascarpone cream'
          ],
          correctAnswer: 'Semolina custard'
        },
        {
          id: 'galactoboureko-2',
          question: 'Which allergens are present in Galactoboureko?',
          options: [
            'Gluten, Dairy',
            'Gluten, Nuts',
            'Dairy, Nuts',
            'Gluten, Dairy, Eggs'
          ],
          correctAnswer: 'Gluten, Dairy'
        },
        {
          id: 'galactoboureko-3',
          question: 'What flavor of gelato accompanies our Galactoboureko?',
          options: [
            'Vanilla',
            'Honey',
            'Cardamom',
            'Pistachio'
          ],
          correctAnswer: 'Cardamom'
        }
      ]
    },
    {
      id: 'dessert-5',
      dish: 'Budino Levant',
      questions: [
        {
          id: 'budino-1',
          question: 'What are the main flavors in the Budino Levant?',
          options: [
            'Vanilla and caramel',
            'Dark chocolate and espresso',
            'Lemon and honey',
            'Pistachio and rose water'
          ],
          correctAnswer: 'Dark chocolate and espresso'
        },
        {
          id: 'budino-2',
          question: 'What type of cream is used in the Budino Levant?',
          options: [
            'Whipped cream',
            'Crème fraîche',
            'Mascarpone cream',
            'Clotted cream'
          ],
          correctAnswer: 'Mascarpone cream'
        },
        {
          id: 'budino-3',
          question: 'Which allergens are present in the Budino Levant?',
          options: [
            'Gluten, Dairy',
            'Dairy, Nuts',
            'Gluten, Eggs',
            'Dairy, Eggs'
          ],
          correctAnswer: 'Gluten, Dairy'
        }
      ]
    },
    {
      id: 'dessert-6',
      dish: 'Gelato',
      questions: [
        {
          id: 'gelato-1',
          question: 'What is the main allergen in our standard gelato?',
          options: [
            'Gluten',
            'Nuts',
            'Dairy',
            'Eggs'
          ],
          correctAnswer: 'Dairy'
        },
        {
          id: 'gelato-2',
          question: 'How is our gelato selection described on the menu?',
          options: [
            'Daily special',
            'Chef\'s selection',
            'Rotating selection',
            'Seasonal flavors'
          ],
          correctAnswer: 'Rotating selection'
        },
        {
          id: 'gelato-3',
          question: 'What utensil is used to serve gelato?',
          options: [
            'Dessert fork',
            'Spoon',
            'Dessert knife',
            'Ice cream scoop'
          ],
          correctAnswer: 'Spoon'
        }
      ]
    },
    {
      id: 'dessert-7',
      dish: 'Sorbeto',
      questions: [
        {
          id: 'sorbeto-1',
          question: 'How is our sorbeto selection described on the menu?',
          options: [
            'Daily special',
            'Chef\'s selection',
            'Rotating selection',
            'Seasonal flavors'
          ],
          correctAnswer: 'Rotating selection'
        },
        {
          id: 'sorbeto-2',
          question: 'What is the main difference between sorbeto and gelato?',
          options: [
            'Sorbeto is served warm',
            'Sorbeto typically does not contain dairy',
            'Sorbeto is always fruit-flavored',
            'Sorbeto is less sweet'
          ],
          correctAnswer: 'Sorbeto typically does not contain dairy'
        },
        {
          id: 'sorbeto-3',
          question: 'What utensil is used to serve sorbeto?',
          options: [
            'Dessert fork',
            'Spoon',
            'Dessert knife',
            'Ice cream scoop'
          ],
          correctAnswer: 'Spoon'
        }
      ]
    }
  ],
  redwines: [
    {
      id: 'redwine-1',
      name: 'Cuvée du Soleil',
      type: 'Red',
      winery: 'Sept Winery',
      region: 'Mount Lebanon, Lebanon',
      year: '2019',
      price: '37',
      description: 'Cuvée du Soleil is produced by Sept Winery, a Lebanese winery known for its biodynamic practices and located in regions like the Bekaa Valley or North Bekaa. Lebanon has a rich wine history, with a Mediterranean climate featuring hot, dry summers and cool nights, ideal for producing red wines with fruit intensity and structure. The wine is cultivated from grapevines on the eastern hillsides of Mount Lebanon, suggesting a terroir that contributes to its unique profile.',
      grapes: 'Cabernet Sauvignon, Tempranillo',
      nose: 'Aromas of red fruits, such as cherries, raspberries, and possibly blackberries, consistent with Lebanese red wine characteristics noted in general wine literature. There is also a hint of leather, adding depth. These fruit and spice notes are typical of wines from the region, which often reflect Mediterranean terroir with oriental spice influences.',
      palate: 'The wine is described as having an elegant roundness and silky tannins. It is fresh and fruity, with possible notes of spices or cedar, aligning with the woody and complex profiles sometimes found in Lebanese reds. The light and fresh nature, suggests it is approachable and versatile, suitable for various pairings.',
      foodPairings: [
        {
          category: 'Mezze',
          dishes: 'Taramasalata, Tzatziki, Muhammara, Hummus, Baba Ghanoush, Tirokafteri',
          pairing: 'Tirokafteri (spicy cheese spread) likely pairs well due to spice.'
        },
        {
          category: 'Crudos',
          dishes: 'Oysters, Bluefin Tuna, Kibbeh Nayeh, Catch of the Day, Conch, Snapper',
          pairing: 'Kibbeh Nayeh (raw meat with spices) fits the spicy pairing note.'
        },
        {
          category: 'Primi',
          dishes: 'Fritto Misto, Finocchio e Rucola, Fatteh, Pulpo a la Plancha, Lobster Burrata',
          pairing: 'Pulpo a la Plancha (grilled octopus) and Fatteh (spicy and flavorful) are suitable.'
        },
        {
          category: 'Pasta',
          dishes: 'Mushroom Risotto, Mafaldine, Casarecce, Fusili, Malloredus, Pansotti',
          pairing: 'Depends on sauce; spicy tomato-based pastas would pair well.'
        },
        {
          category: 'Principale',
          dishes: 'Swordfish, Cod, NY Steak, Bisteca Fiorentina, Branzino, Cauliflower, Grouper, Chicken',
          pairing: 'Fish like Prawns or Swordfish with spices, and lighter preparations of Chicken, would complement.'
        },
        {
          category: 'Sides',
          dishes: 'Roasted Carrots, Sauteed Mushrooms, Patatas Bravas, Broccolini',
          pairing: 'Patatas Bravas (spicy potatoes) is a strong match.'
        }
      ],
      conclusion: 'Cuvée du Soleil from Sept Winery is a light, fruity red wine with an elegant, silky texture, ideal for pairing with spicy Mediterranean dishes. A blend of Tempranillo and Cabernet grapes, offering red fruit aromas and a versatile palate.'
    },
    {
      id: 'redwine-2',
      name: 'Massaya Terrasses de Baalbeck',
      type: 'Red',
      winery: 'Massaya',
      region: 'Beqaa Valley, Lebanon',
      year: '2020',
      price: '32',
      description: 'Massaya Terrasses de Baalbeck is produced by Massaya Winery, a prominent Lebanese winery located in the Bekaa Valley, a region known for its long history of winemaking and Mediterranean climate featuring hot, dry summers and cool nights. The winery was founded in 1998 by the Ghosn brothers in partnership with French winemakers Dominique Hébrard and Hubert de Boüard, aiming to revive and elevate Lebanese wine on the global stage. The Terrasses de Baalbeck line is named after the ancient Roman ruins at Baalbeck, reflecting the wine’s connection to Lebanon’s rich cultural heritage.',
      grapes: 'Grenache, Syrah, Mouvédre',
      nose: 'Dominant fruit notes of red fruit and ripe cherries are also apparent. Snippets further elaborate on this with mentions of bright red and black fruit character, blackberry, dark fruit, and blackcurrant. These descriptors indicate a layered fruit profile, ranging from the vibrancy of fresh red berries to the richer, more concentrated notes of darker fruits. Adding complexity to the aromatic bouquet are warm spice notes, including specific mentions of pepper and licorice. These spicy nuances, often contributed by the Syrah and Mourvèdre in the blend, enhance the wine’s aromatic depth. Furthermore, an earthy quality is noticeable, sometimes described as toasty.',
      palate: 'The fruit-forward character noted on the nose continues on the palate with flavors of "ripe cherries" and "red fruits". As the wine evolves on the palate, notes of "black olive" and "spiced plum" emerge , adding layers of savory and slightly darker fruit complexity. A notable characteristic is the presence of "crushed rocks minerality" , which contributes a refreshing and often slightly saline or stony sensation. This minerality is complemented by "decent acidity" , a crucial element that provides balance to the wine and makes it a suitable partner for a variety of foods. Describing the wine to customers as having "juicy red fruit flavors, smooth tannins, and a refreshing finish with a hint of minerality" effectively captures its key characteristics in an accessible manner.',
      foodPairings: [
        {
          category: 'Mezze',
          dishes: 'Muhammara',
          pairing: 'The inherent fruitiness of the wine can beautifully complement the sweetness of the roasted peppers in the Muhammara, while the wine earthy undertones and subtle tannins can harmonize with the richness of the walnuts.'
        },
        {
          category: 'Crudo',
          dishes: 'Kibbeh Nayeh',
          pairing: 'The structure and potential for subtle gamey notes in the wine can create a complementary pairing with the raw lamb in the Kibbeh Nayeh. The wine spice notes can also echo any spices present in the dish.'
        },
        {
          category: 'Primi',
          dishes: 'Pulpo a la Plancha',
          pairing: 'While the octopus is braised in red wine, the Massaya vibrant fruit and spice notes can offer a counterpoint to the texture of the octopus and the bright flavors of the date salsa verde.'
        },
        {
          category: 'Primi',
          dishes: 'Fatteh',
          pairing: 'The wine earthy characteristics and ripe fruit flavors can provide a pleasant contrast to the roasted eggplant and chickpeas in the Fatteh, while the acidity can cut through the richness of the lemon-herb yogurt.'
        },
        {
          category: 'Pasta',
          dishes: 'Mafaldine',
          pairing: 'The wine medium body and potential for rustic notes make it a classic pairing for the Wild Boar Ragu. The tannins in the wine will also help to balance the richness of the meat sauce.'
        },
        {
          category: 'Principale',
          dishes: 'Lamb',
          pairing: 'Lamb is a traditional pairing for Rhône-style blends. The Massaya fruit-forward character and spicy notes will beautifully complement the richness and distinct flavor of the Colorado Lamb Rack.'
        },
        {
          category: 'Principale',
          dishes: 'Swordfish',
          pairing: 'Although pairing red wine with fish requires careful consideration, the fuller body and structure of this Lebanese red, along with its earthy notes, might create an interesting pairing with the richness of the Grilled Swordfish and the earthiness of the Black Lentils. This represents a more adventurous pairing option.'
        },
        {
          category: 'Principale',
          dishes: 'Chicken',
          pairing: 'The spicy notes present in the wine will find a harmonious counterpart in the Harissa Marinated Pan Roasted Half Chicken. The wine fruitiness will also provide a pleasant contrast to the savory flavors of the chicken.'
        }
      ]
    },
    {
      id: 'redwine-3',
      name: 'Mount Veeder',
      type: 'Red',
      winery: 'Mount Veeder',
      region: 'Napa Valley, California',
      year: '2021',
      price: '29',
      description: 'Mount Veeder Cabernet Sauvignon is produced by Mount Veeder Winery in Napa Valley’s Mount Veeder AVA, established in the 1960s by Michael and Arlene Bernstein, with its first vintage in 1973. Located on steep slopes at elevations between 750 and 1,500 feet, the vineyards benefit from a Mediterranean-like climate—warm days, cool nights, and a long growing season. The rocky, clay-rich soils yield low quantities of intensely flavored grapes, contributing to the wine’s bold structure and complexity. This region is known for producing powerful yet refined Cabernet Sauvignon, reflecting Napa Valley’s reputation for premium wines.',
      grapes: 'Cabernet Sauvignon',
      nose: 'Expressive on the nose with notes of baking spices, cedar, fig, and black cherry',
      palate: 'Notes of brooding red fruit flood the palate—the wine is soft yet structured on the palate, with plush tannins, moderate acidity, and a long finish that lingers with notes of black tea and bramble.',
      foodPairings: [
        {
          category: 'Mezze',
          dishes: 'Tirokafteri',
          pairing: 'The spice in the feta provides a contrast to the wine’s richness while its creamy texture softens the tannins.'
        },
        {
          category: 'Crudo',
          dishes: 'Kibbeh Nayeh',
          pairing: 'The raw lamb’s earthy and spiced flavors enhance the wine’s dark fruit and savory notes.'
        },
        {
          category: 'Primi',
          dishes: 'Pulpo a la Plancha',
          pairing: 'The octopus’s richness and lardo complement the wine’s depth without overpowering it.'
        },
        {
          category: 'Pasta',
          dishes: 'Mafaldine',
          pairing: 'The gamey ragu matches the wine’s bold fruit and tannic structure perfectly.'
        },
        {
          category: 'Principale',
          dishes: 'Lamb',
          pairing: 'Grilled lamb’s robust flavor is a classic match for Cabernet Sauvignon’s intensity.'
        },
        {
          category: 'Sides',
          dishes: 'Roasted Carrots',
          pairing: 'The harissa adds a spicy kick that complements the wine’s spice and earthiness.'
        }
      ],
      conclusion: 'Mount Veeder Cabernet Sauvignon Napa Valley is a bold, structured red wine with rich fruit flavors and firm tannins, ideal for pairing with hearty Mediterranean dishes. Its tasting notes—baking spices on the nose and blackberry on the palate—make it a standout choice for grilled meats and rich sauces.'
    },
    {
      id: 'redwine-4',
      name: 'Nebbiolo d\'Alba DOC',
      type: 'Red',
      winery: 'Paolo Monti',
      region: 'Piedmont, Italy',
      year: '2018',
      price: '29',
      description: 'Nebbiolo d\'Alba DOC Monti is produced by Paolo Monti in the Piedmont region of Italy. The Nebbiolo d\'Alba DOC classification, granted in 1970, encompasses wines made from Nebbiolo grapes grown around the town of Alba in Piedmont, a region known for its rich winemaking heritage. Paolo Monti\'s winery, established with a vision for quality, is located in prime areas such as Monforte d\'Alba, benefiting from a Mediterranean-like climate with hot days and cool nights. This climate contributes to the development of Nebbiolo\'s characteristic aromas and structure, making it a step down from the more famous Barolo and Barbaresco but designed for earlier drinking.',
      grapes: 'Nebbiolo',
      nose: 'On the nose, the wine presents a brilliant ruby-red color with garnet reflections, offering aromas of cherry, blackberry, red currant, cinnamon, and violet',
      palate: 'On the palate, it is fresh and elegant, with firm yet silky tannins that stretch over delicate spiciness, leaving the palate satisfied',
      foodPairings: [
        {
          category: 'Mezze',
          dishes: 'Tirokafteri',
          pairing: 'The spice complements the wine’s freshness and tannins, balancing its elegance'
        },
        {
          category: 'Crudos',
          dishes: 'Kibbeh Nayeh',
          pairing: 'Raw lamb aligns with the wine’s suggested pairings for raw meat preparations.'
        },
        {
          category: 'Pasta',
          dishes: 'Mafaldine',
          pairing: 'The rich gamey flavor of wild boar ragu matches the wine’s structure and tannins.'
        },
        {
          category: 'Principale',
          dishes: 'Lamb',
          pairing: 'Rack of lamb enhance the wine’s fruit and tannin profile.'
        },
        {
          category: 'Principale',
          dishes: 'NY Steak',
          pairing: 'Beef pairs classically with Nebbiolo, complementing its bold yet refined character.'
        },
        {
          category: 'Principale',
          dishes: 'Bisteca Fiorentina',
          pairing: 'Another beef option that complements the wine’s depth and structure.'
        }
      ],
      conclusion: 'Nebbiolo d\'Alba DOC Monti is an elegant red wine with fresh fruit aromas and silky tannins, ideal for pairing with Mediterranean dishes. Its versatility shines through in pairings like Kibbeh Nayeh (raw lamb), Mafaldine with Wild Boar Ragu (rich pasta), and Lamb Rack (classic meat pairing).'
    },
    {
      id: 'redwine-5',
      name: 'Serras del Priorat',
      type: 'Red',
      winery: 'Clos Figueras',
      region: 'Priorat, Catalonia, Spain',
      year: '2022',
      price: '28',
      description: 'Clos Figueras Serras del Priorat is produced by Clos Figueras, a winery in the Priorat region of Catalonia, Spain. Priorat, granted Denominació d\'Origen Qualificada (DOQ) status in 2000, is known for its rugged terrain, black volcanic soils (llicorella), and Mediterranean climate with long, hot summers and cool nights. Christopher Cannan purchased the estate in 1997, advised by René Barbier of Clos Mogador, and it has since established itself as a reference within classic Priorat wines. The vineyards, located just north of Gratallops, cover terraced slopes of pure schist, contributing to the wine\'s intensity and minerality',
      grapes: 'Grenache, Carignan, Syrah',
      nose: 'On the nose, it offers primary aromas of red fruit, such as cherry and raspberry, with subtle floral touches, complemented by notes of minerality, vanilla, and Mediterranean herbs, as noted in the winemaker’s tasting notes.',
      palate: 'On the palate, it is fresh with a wide entry, featuring round and soft tannins, balanced acidity, and a pleasant freshness, with a long, satisfying finish.',
      foodPairings: [
        {
          category: 'Mezze',
          dishes: 'Tirokafteri',
          pairing: 'The spice in the feta complements the wine\'s freshness and red fruit notes, balancing its tannins.'
        },
        {
          category: 'Crudos',
          dishes: 'Kibbeh Nayeh',
          pairing: 'The raw lamb enhances the wine\'s red fruit and mineral characteristics, creating a harmonious match.'
        },
        {
          category: 'Primi',
          dishes: 'Pulpo a la Plancha',
          pairing: 'The octopus\'s richness is balanced by the wine\'s acidity and tannins, while the red wine sauce in the dish complements the wine\'s oak aging.'
        },
        {
          category: 'Pasta',
          dishes: 'Fusili',
          pairing: 'The red wine in the sauce aligns with the wine\'s flavors, while the pasta\'s lighter texture suits its medium body.'
        },
        {
          category: 'Principale',
          dishes: 'Lamb',
          pairing: 'Grilled lamb\'s robust flavor matches the wine\'s structure and fruitiness, a classic pairing for red wines.'
        },
        {
          category: 'Sides',
          dishes: 'Patatas Bravas',
          pairing: 'The smokiness and spice of the potatoes add complexity to the wine\'s Mediterranean herb and mineral notes.'
        },
      ]
    }
  ],
  whitewines: [
  ],
  roséwines: [
    
  ],
  sparklingwines: [
    
  ],
  winescheatsheet: [
    
  ]
};
