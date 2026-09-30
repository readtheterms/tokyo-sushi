/* ============================================================
   TOKYO SUSHI — MENU DATA
   ============================================================
   THIS IS THE FILE TO EDIT WHEN THE MENU CHANGES.

   Each item looks like:
     { name: "Item Name", price: "12.99", desc: "Short description" },

   - Change a price:  edit the number inside price: "..."
   - No price yet?   leave it empty — price: ""  — the menu shows "—"
                     (customers are told to call for the current price).
   - Remove an item: delete its whole line.
   - Add an item:    copy a line, paste it below, change the text.
   - Keep the quotes, commas and { } exactly as shown.

   The menu is split into TABS (Appetizers, Sushi Rolls, …).
   Each tab has one or more GROUPS, and each group has ITEMS.
   "note" is optional text shown under a tab or group title.

   Sauce key on the special rolls:
     (E) Eel sauce · (M) Mustard sauce · (SM) Spicy Mayo · (P) Ponzu sauce
   ============================================================ */

const MENU = [
  {
    id: "appetizers",
    title: "Appetizers",
    groups: [
      {
        items: [
          { name: "Miso Soup",                  price: "2.00",  desc: "Miso soup base with tofu" },
          { name: "House Salad",                price: "2.00",  desc: "Salad with our signature green dressing" },
          { name: "Steamed Rice",               price: "2.00",  desc: "" },
          { name: "Vegetable Tempura (8 pcs)",  price: "11.99", desc: "Lightly battered seasonal vegetables" },
          { name: "Shrimp Tempura (5 pcs)",     price: "9.99",  desc: "" },
          { name: "Mixed Tempura (5 pcs)",      price: "6.99",  desc: "" },
          { name: "Gyoza (6 pcs)",              price: "8.99",  desc: "Deep fried chicken & vegetable dumplings" },
          { name: "Chicken Karaage (6 pcs)",    price: "9.99",  desc: "Japanese style fried chicken" },
          { name: "Shumai (6 pcs)",             price: "8.99",  desc: "Steamed dumplings filled with shrimp and vegetable" },
          { name: "Salted Edamame",             price: "3.99",  desc: "Steamed green edamame with salt" },
          { name: "Garlic Edamame",             price: "5.99",  desc: "Stir fried with soy sauce and garlic paste" },
          { name: "Spicy Edamame",              price: "5.99",  desc: "Stir fried with soy sauce and hot sauce" },
          { name: "Spicy Garlic Edamame",       price: "5.99",  desc: "Stir fried with soy sauce, garlic paste and hot sauce" },
          { name: "Baked Green Mussel (4 pcs)", price: "10.99", desc: "Oven baked with our house eel sauce and sesame seeds" },
          { name: "Calamari",                   price: "9.99",  desc: "Lightly battered deep fried calamari rings" },
          { name: "Heart Attack (4 pcs)",       price: "10.99", desc: "Jalapeño stuffed with cream cheese and spicy tuna, deep fried" },
          { name: "Crispy Rice (4 pcs)",        price: "10.99", desc: "Fried sushi rice topped with spicy tuna and avocado, spicy mayo and eel sauce" },
          { name: "Soft Shell Crab",            price: "9.99",  desc: "Lightly battered soft shell crab" },
          { name: "Dynamite",                   price: "10.99", desc: "Baked fish mix on a bed of crab meat" },
          { name: "Salmon Collar",              price: "9.99",  desc: "" },
          { name: "Yellowtail Collar",          price: "12.99", desc: "" },
          { name: "Oyster (4 pcs)",             price: "13.99", desc: "" },
        ],
      },
    ],
  },
  {
    id: "salads-noodles",
    title: "Salads & Noodles",
    groups: [
      {
        title: "Salads",
        items: [
          { name: "Sashimi Salad",       price: "17.99", desc: "" },
          { name: "Poke Sashimi Salad",  price: "17.99", desc: "" },
          { name: "Shrimp & Crab Salad", price: "16.99", desc: "" },
          { name: "Salmon Skin Salad",   price: "16.99", desc: "" },
          { name: "Chicken Salad",       price: "15.99", desc: "" },
        ],
      },
      {
        title: "Noodles",
        items: [
          { name: "Plain Udon",         price: "14.99", desc: "Udon noodles with cabbage and carrot" },
          { name: "Tempura Udon",       price: "16.99", desc: "Plain udon with 2 pc shrimp tempura" },
          { name: "Chicken Udon",       price: "16.99", desc: "Plain udon with chicken" },
          { name: "Shumai Udon",        price: "16.99", desc: "Plain udon with shumai" },
          { name: "Vegetable Udon",     price: "14.99", desc: "Plain udon with vegetables" },
          { name: "Beef Yakisoba",      price: "17.99", desc: "Stir-fried egg noodles with beef" },
          { name: "Chicken Yakisoba",   price: "16.99", desc: "Stir-fried egg noodles with chicken" },
          { name: "Seafood Yakisoba",   price: "18.99", desc: "Stir-fried egg noodles with seafood" },
          { name: "Vegetable Yakisoba", price: "14.99", desc: "Stir-fried egg noodles with vegetables" },
        ],
      },
    ],
  },
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    groups: [
      {
        title: "Classic Rolls",
        note: "Cut rolls. Every classic roll is also available as a hand roll — see the Hand Rolls tab.",
        items: [
          { name: "California",       price: "7.99",  desc: "" },
          { name: "Avocado",          price: "8.99",  desc: "" },
          { name: "Cucumber",         price: "6.99",  desc: "" },
          { name: "Cucumber Avocado", price: "8.99",  desc: "" },
          { name: "Vegetable",        price: "9.99",  desc: "" },
          { name: "Spicy Tuna",       price: "9.99",  desc: "" },
          { name: "Salmon",           price: "9.99",  desc: "" },
          { name: "Tuna",             price: "9.99",  desc: "" },
          { name: "Yellowtail",       price: "10.99", desc: "" },
          { name: "Eel",              price: "10.99", desc: "" },
        ],
      },
      {
        title: "Special Rolls",
        note: "Sauce key: (E) Eel sauce · (M) Mustard sauce · (SM) Spicy Mayo · (P) Ponzu sauce",
        items: [
          { name: "1. Rainbow",           price: "", desc: "California roll with 4 pieces of fish. (P)" },
          { name: "2. Yummy Yummy",       price: "", desc: "Spicy tuna roll with spicy scallop on top. (SM)" },
          { name: "3. Spicy Spicy",       price: "", desc: "Salmon, spicy tuna, and cucumber." },
          { name: "4. Tiger",             price: "", desc: "California roll with cooked shrimp and avocado on top. (E)" },
          { name: "5. Philadelphia",      price: "", desc: "Salmon on top of california roll with cream cheese. (P)" },
          { name: "6. Boston",            price: "", desc: "Salmon on top of california roll. (P)" },
          { name: "7. Tokyo",             price: "", desc: "California roll with all tuna on top. (P)" },
          { name: "8. Hawaiian",          price: "", desc: "Red snapper, tuna, albacore, cucumber roll. (P)" },
          { name: "9. Big Bear Mt.",      price: "", desc: "Ono on top of spicy tuna roll. (M)" },
          { name: "10. Double Double",    price: "", desc: "Spicy tuna on top of california roll with crunch on top. (E SM)" },
          { name: "11. Spanish",          price: "", desc: "Cilantro, salmon, tuna, avocado on top of california roll. (SM)" },
          { name: "12. Sun Flower",       price: "", desc: "Mixed sashimi on top of yellowtail roll. (E SM)" },
          { name: "13. Samurai",          price: "", desc: "Salmon and spicy tuna on top of california roll. (M)" },
          { name: "14. Lemon Tree",       price: "", desc: "Spicy crab, avocado, cucumber, topped with salmon and fresh lemon slices. (M)" },
          { name: "15. Las Vegas",        price: "", desc: "Eel, cream cheese, avocado roll deep-fried. (E SM)" },
          { name: "16. Spider",           price: "", desc: "Soft shell crab, cucumber, avocado roll with crunch on top. (E)" },
          { name: "17. Black Tiger",      price: "", desc: "Spicy tuna roll with deep fried shrimp. (E)" },
          { name: "18. Inland",           price: "", desc: "Spicy tuna, avocado roll deep-fried. (E SM)" },
          { name: "19. Shrimp Special",   price: "", desc: "Tempura shrimp, cucumber, avocado roll with cooked shrimp and avocado on top. (E)" },
          { name: "20. Crunch",           price: "", desc: "Tempura shrimp, avocado, cucumber, crab roll with tempura crunch. (E)" },
          { name: "21. Japanese Burrito", price: "", desc: "Spicy tuna, crab, tempura shrimp, avocado wrapped with soy paper. (E)" },
          { name: "22. 4th of July",      price: "", desc: "Crab, avocado, shrimp tempura with spicy tuna, ono, tuna on top (torched). (E SM M)" },
          { name: "23. Crunch Albacore",  price: "", desc: "Crunch & chopped albacore on top of a shrimp tempura roll with cilantro mayo. (E)" },
          { name: "24. Fire Cracker",     price: "", desc: "Spicy tuna, cream cheese, avocado, deep fried with green rice cracker. (E SM)" },
          { name: "25. Black Jack",       price: "", desc: "Deep fried spicy tuna roll with mixed sashimi on top. (E SM)" },
          { name: "26. Albacore King",    price: "", desc: "Deep fried shrimp, avocado and cucumber topped with spicy tuna, albacore, smelt roe, and green onion. (E M)" },
          { name: "27. Golden Tiger",     price: "", desc: "Shrimp tempura, avocado, cream cheese, spicy tuna inside, deep fried with spicy crab on top. (E SM)" },
          { name: "28. Popcorn Shrimp",   price: "", desc: "Popcorn shrimp on top of california roll. (E SM)" },
          { name: "29. Shooting Star",    price: "", desc: "Spicy crab, avocado, cucumber, shrimp tempura, topped with cajun seared tuna and crispy fried onion. (E M)" },
          { name: "30. Pink Panda",       price: "", desc: "Deep fried baby crawfish, crab and mozzarella cheese mix coated in pink rice cracker. (E SM)" },
          { name: "31. M-80",             price: "", desc: "Baked seafood on top of california roll. (E)" },
          { name: "32. Caterpillar",      price: "", desc: "Eel, cucumber, crab roll with thinly sliced avocado on top. (E)" },
          { name: "33. Volcano",          price: "", desc: "Baked white fish on top of california roll. (E)" },
          { name: "34. Sunset",           price: "", desc: "California roll with B.B.Q. eel and avocado on top. (E)" },
          { name: "35. Redlands",         price: "", desc: "California roll with salmon on top, baked. (E)" },
          { name: "36. Dragon",           price: "", desc: "Deep-fried shrimp, avocado roll with avocado and eel on top. (E)" },
          { name: "37. Lobster",          price: "", desc: "Tempura shrimp, avocado, cucumber roll with baked crawfish. (E)" },
          { name: "38. Rock 'N Roll",     price: "", desc: "California roll with baked scallop. (E)" },
          { name: "39. Deluxe Eel",       price: "", desc: "California roll with whole eel on top. (E)" },
          { name: "40. Dancing Shrimp",   price: "", desc: "Crab, shrimp tempura, baked. (E)" },
          { name: "41. Snow Cone",        price: "", desc: "Deep fried shrimp roll with baked baby crawfish and crunch on top. (M)" },
          { name: "42. Love",             price: "", desc: "Baked salmon wrapped california roll topped with spicy tuna and crunch. (E SM)" },
          { name: "43. Cucumber Special", price: "", desc: "Spicy tuna, crab, tempura shrimp, avocado wrapped with cucumber. (E)" },
          { name: "44. Sake Bomb",        price: "", desc: "Crab wrapped in salmon (torched). (E SM M)" },
          { name: "45. Oishi",            price: "", desc: "Crab meat wrapped with albacore with furikake on top. (M)" },
          { name: "46. Crash",            price: "", desc: "Spicy tuna wrapped with albacore on top, deep fried jalapeño, cream cheese and spicy tuna. (E SM)" },
        ],
      },
    ],
  },
  {
    id: "hand-rolls",
    title: "Hand Rolls",
    groups: [
      {
        note: "Cone-shaped hand rolls, made to order.",
        items: [
          { name: "Salmon Skin",      price: "",     desc: "Crispy salmon skin, hand rolled" },
          { name: "California",       price: "6.99", desc: "" },
          { name: "Avocado",          price: "7.99", desc: "" },
          { name: "Cucumber",         price: "5.99", desc: "" },
          { name: "Cucumber Avocado", price: "7.99", desc: "" },
          { name: "Vegetable",        price: "8.99", desc: "" },
          { name: "Spicy Tuna",       price: "8.99", desc: "" },
          { name: "Salmon",           price: "8.99", desc: "" },
          { name: "Tuna",             price: "8.99", desc: "" },
          { name: "Yellowtail",       price: "9.99", desc: "" },
          { name: "Eel",              price: "9.99", desc: "" },
        ],
      },
    ],
  },
  {
    id: "sashimi-nigiri",
    title: "Sashimi & Nigiri",
    groups: [
      {
        title: "Sushi (Nigiri)",
        note: "2 pieces per order.",
        items: [
          { name: "1. Ono",                         price: "", desc: "" },
          { name: "2. Tuna",                        price: "", desc: "" },
          { name: "3. Tuna (Tataki)",               price: "", desc: "" },
          { name: "4. Yellowtail",                  price: "", desc: "" },
          { name: "5. Salmon",                      price: "", desc: "" },
          { name: "6. Cajun Salmon",                price: "", desc: "" },
          { name: "7. Halibut",                     price: "", desc: "" },
          { name: "8. Red Snapper",                 price: "", desc: "" },
          { name: "9. Octopus",                     price: "", desc: "" },
          { name: "10. Japanese Mackerel",          price: "", desc: "" },
          { name: "11. Inari",                      price: "", desc: "" },
          { name: "12. Albacore",                   price: "", desc: "" },
          { name: "13. Surf Clam",                  price: "", desc: "" },
          { name: "14. Eel",                        price: "", desc: "" },
          { name: "15. Squid",                      price: "", desc: "" },
          { name: "16. Scallop",                    price: "", desc: "" },
          { name: "17. Smelt Roe",                  price: "", desc: "" },
          { name: "18. Tamago (Egg)",               price: "", desc: "" },
          { name: "19. Sweet Shrimp",               price: "", desc: "" },
          { name: "20. Sea Urchin",                 price: "", desc: "" },
          { name: "21. Salmon Roe",                 price: "", desc: "" },
          { name: "22. Shrimp",                     price: "", desc: "" },
          { name: "23. Crab",                       price: "", desc: "" },
          { name: "24. Giant Scallop (Hokkaido)",   price: "", desc: "" },
          { name: "25. Bluefin Tuna (Akami)",       price: "", desc: "" },
          { name: "26. Bluefin Tuna (Toro)",        price: "", desc: "" },
          { name: "27. Black Snapper (Kurodai)",    price: "", desc: "" },
          { name: "28. A5 Wagyu",                   price: "", desc: "" },
        ],
      },
      {
        title: "Sashimi",
        note: "Sashimi is available for the fish below.",
        items: [
          { name: "Ono",                       price: "", desc: "" },
          { name: "Tuna",                      price: "", desc: "" },
          { name: "Tuna (Tataki)",             price: "", desc: "" },
          { name: "Yellowtail",                price: "", desc: "" },
          { name: "Salmon",                    price: "", desc: "" },
          { name: "Cajun Salmon",              price: "", desc: "" },
          { name: "Halibut",                   price: "", desc: "" },
          { name: "Red Snapper",               price: "", desc: "" },
          { name: "Octopus",                   price: "", desc: "" },
          { name: "Japanese Mackerel",         price: "", desc: "" },
          { name: "Albacore",                  price: "", desc: "" },
          { name: "Eel",                       price: "", desc: "" },
          { name: "Giant Scallop (Hokkaido)",  price: "", desc: "" },
          { name: "Bluefin Tuna (Akami)",      price: "", desc: "" },
          { name: "Bluefin Tuna (Toro)",       price: "", desc: "" },
          { name: "Black Snapper (Kurodai)",   price: "", desc: "" },
        ],
      },
      {
        title: "Sashimi Combinations",
        items: [
          { name: "Sashimi Combination — Small", price: "39.99", desc: "21 pc chef's choice · 7 kinds of sashimi" },
          { name: "Sashimi Combination — Large", price: "69.99", desc: "32 pc chef's choice · 8 kinds of sashimi" },
        ],
      },
    ],
  },
  {
    id: "bento-lunch",
    title: "Bento & Lunch",
    note: "Lunch specials are available during lunch hours only, 11:30 AM – 2:30 PM.",
    groups: [
      {
        title: "Bento Boxes",
        note: "Includes steamed rice, 4 pc tempura, 4 pc California roll and 2 pc orange.",
        items: [
          { name: "Chicken Teriyaki Bento", price: "15.99", desc: "" },
          { name: "Beef Teriyaki Bento",    price: "16.99", desc: "" },
          { name: "Salmon Teriyaki Bento",  price: "16.99", desc: "" },
          { name: "Chicken Karaage Bento",  price: "16.99", desc: "" },
          { name: "Spicy Chicken Bento",    price: "15.99", desc: "" },
        ],
      },
      {
        title: "Lunch Entrées",
        note: "Includes steamed rice.",
        items: [
          { name: "Chicken Teriyaki", price: "14.99", desc: "" },
          { name: "Beef Teriyaki",    price: "15.99", desc: "" },
          { name: "Salmon Teriyaki",  price: "15.99", desc: "" },
          { name: "Chicken Karaage",  price: "15.99", desc: "" },
          { name: "Spicy Chicken",    price: "14.99", desc: "" },
        ],
      },
      {
        title: "Lunch from the Bar",
        items: [
          { name: "Sushi Lunch Combination",       price: "18.99", desc: "8 pc sushi — salmon, tuna, red snapper, shrimp" },
          { name: "Sashimi Lunch Combination (A)", price: "18.99", desc: "9 pc sashimi — salmon, tuna, red snapper" },
          { name: "Sashimi Lunch Combination (B)", price: "20.99", desc: "12 pc sashimi — salmon, tuna, red snapper, albacore" },
          { name: "Pick Two",                      price: "20.99", desc: "Choose two: Crunch, Rainbow, Tiger, Tokyo, Black Tiger, Boston, Double Double, Spicy Spicy" },
        ],
      },
    ],
  },
  {
    id: "dinner",
    title: "Dinner",
    groups: [
      {
        title: "Dinner Combination",
        note: "Served 3:30 PM until close · includes steamed rice, 5 pc tempura, 2 pc orange, California or tuna roll (4 pc).",
        items: [
          { name: "Chicken Teriyaki", price: "18.99", desc: "" },
          { name: "Beef Teriyaki",    price: "19.99", desc: "" },
          { name: "Salmon Teriyaki",  price: "19.99", desc: "" },
          { name: "Chicken Karaage",  price: "19.99", desc: "" },
          { name: "Spicy Chicken",    price: "18.99", desc: "" },
        ],
      },
      {
        title: "Dinner Entrées",
        note: "Served 2:30 PM until close · includes steamed rice.",
        items: [
          { name: "Chicken Teriyaki", price: "16.99", desc: "" },
          { name: "Beef Teriyaki",    price: "18.99", desc: "" },
          { name: "Salmon Teriyaki",  price: "18.99", desc: "" },
          { name: "Chicken Karaage",  price: "18.99", desc: "" },
          { name: "Spicy Chicken",    price: "16.99", desc: "" },
        ],
      },
      {
        title: "Dinner from the Bar",
        note: "Served 3:30 PM until close.",
        items: [
          { name: "Sushi Dinner Combination",       price: "23.99", desc: "10 pc sushi — salmon, tuna, red snapper, albacore, shrimp" },
          { name: "Sashimi Dinner Combination (A)", price: "24.99", desc: "12 pc sashimi — salmon, tuna, red snapper, albacore" },
          { name: "Sashimi Dinner Combination (B)", price: "26.99", desc: "15 pc sashimi — salmon, tuna, red snapper, albacore, yellowtail" },
        ],
      },
    ],
  },
  {
    id: "kids",
    title: "Kids",
    groups: [
      {
        note: "Includes steamed rice and 2 pc orange.",
        items: [
          { name: "Chicken Plate",         price: "9.99", desc: "" },
          { name: "Beef Plate",            price: "9.99", desc: "" },
          { name: "Chicken Karaage Plate", price: "9.99", desc: "" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    note: "Please note: we do not sell alcohol to-go.",
    groups: [
      {
        title: "Beverages",
        items: [
          { name: "Soda",                 price: "2.00", desc: "Coke, Coke Zero, Sprite, Dr. Pepper, Root Beer, Sunkist" },
          { name: "Ramune",               price: "5.00", desc: "Original, strawberry, or orange" },
          { name: "Hot Green Tea",        price: "2.50", desc: "" },
          { name: "Unsweetened Iced Tea", price: "3.00", desc: "" },
        ],
      },
      {
        title: "Beer",
        items: [
          { name: "Sapporo (Large)", price: "8.00",  desc: "" },
          { name: "Asahi (Large)",   price: "8.00",  desc: "" },
          { name: "Kirin (Large)",   price: "8.00",  desc: "" },
          { name: "Orion (Large)",   price: "10.00", desc: "" },
          { name: "Sapporo (Small)", price: "5.00",  desc: "" },
          { name: "Asahi (Small)",   price: "5.00",  desc: "" },
        ],
      },
      {
        title: "Sake",
        items: [
          { name: "House Hot Sake (Small)", price: "5",   desc: "" },
          { name: "House Hot Sake (Large)", price: "7",   desc: "" },
          { name: "Nigori (Cold)",          price: "14",  desc: "300 ml" },
          { name: "Nama (Cold)",            price: "14",  desc: "300 ml" },
          { name: "Kikusui (Cold)",         price: "20",  desc: "300 ml" },
          { name: "Kobuta Senjyu (Cold)",   price: "25",  desc: "300 ml" },
          { name: "Kobuta Manjyu (Cold)",   price: "120", desc: "720 ml" },
        ],
      },
      {
        title: "Wine",
        items: [
          { name: "Cabernet",        price: "5", desc: "" },
          { name: "Chardonnay",      price: "5", desc: "" },
          { name: "Pinot Grigio",    price: "5", desc: "" },
          { name: "Sauvignon Blanc", price: "5", desc: "" },
          { name: "Plum Wine",       price: "6", desc: "" },
        ],
      },
    ],
  },
];
