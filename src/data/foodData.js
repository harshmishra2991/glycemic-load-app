export const foodData = [
  // --- Grains, Cereals, Flours, Rice & Substitutes ---
  { name: "Pizza (Cheese)", gi: 80, carbsPer100g: 33, state: "cooked", cuisine: "Italian" },
  { name: "Pasta (Wheat)", gi: 50, carbsPer100g: 30, state: "cooked", cuisine: "Italian" },
  { name: "Noodles (Instant)", gi: 55, carbsPer100g: 35, state: "cooked", cuisine: "Global" },
  { name: "Suji Chilla", gi: 55, carbsPer100g: 22, state: "cooked", cuisine: "Indian" },
  { name: "Roti (Wheat)", gi: 62, carbsPer100g: 46, state: "cooked", cuisine: "Indian" }, // 2 rotis logic handled in calc
  { name: "Poha", gi: 70, carbsPer100g: 25, state: "cooked", cuisine: "Indian" },
  { name: "Poha with Namkeen", gi: 72, carbsPer100g: 30, state: "cooked", cuisine: "Indian" },
  { name: "Rice (White)", gi: 73, carbsPer100g: 28, state: "cooked", cuisine: "Indian" },
  { name: "Veg Biryani", gi: 68, carbsPer100g: 26, state: "cooked", cuisine: "Indian" },
  { name: "Chicken Biryani", gi: 60, carbsPer100g: 24, state: "cooked", cuisine: "Indian" },
  { name: "Makke ka Atta (Maize Flour)", gi: 70, carbsPer100g: 66, state: "raw", cuisine: "Indian" },
  { name: "Oats (Steel-cut)", gi: 52, carbsPer100g: 58, state: "raw", cuisine: "Global" },
  { name: "Oats (Rolled)", gi: 55, carbsPer100g: 60, state: "raw", cuisine: "Global" },
  { name: "Oats (Instant)", gi: 79, carbsPer100g: 66, state: "raw", cuisine: "Global" },
  { name: "Quinoa", gi: 53, carbsPer100g: 21, state: "cooked", cuisine: "Global" },
  { name: "Brown Rice", gi: 68, carbsPer100g: 23, state: "cooked", cuisine: "Global" },
  { name: "Red Rice", gi: 55, carbsPer100g: 23, state: "cooked", cuisine: "Global" },
  { name: "Black Rice", gi: 45, carbsPer100g: 22, state: "cooked", cuisine: "Global" },
  { name: "Basmati Rice", gi: 58, carbsPer100g: 25, state: "cooked", cuisine: "Global" },
  { name: "Millets (Foxtail)", gi: 54, carbsPer100g: 60, state: "raw", cuisine: "Indian" },
  { name: "Millets (Little)", gi: 50, carbsPer100g: 60, state: "raw", cuisine: "Indian" },
  { name: "Millets (Barnyard)", gi: 45, carbsPer100g: 55, state: "raw", cuisine: "Indian" },
  { name: "Cauliflower Rice", gi: 15, carbsPer100g: 3, state: "cooked", cuisine: "Global" },
  { name: "Cabbage Rice", gi: 10, carbsPer100g: 4, state: "cooked", cuisine: "Global" },
  { name: "Broccoli Rice", gi: 10, carbsPer100g: 4, state: "cooked", cuisine: "Global" },

  // --- Indian Breakfast / Snacks ---
  { name: "Besan Chilla", gi: 40, carbsPer100g: 18, state: "cooked", cuisine: "Indian" },
  { name: "Moong Dal Chilla", gi: 38, carbsPer100g: 16, state: "cooked", cuisine: "Indian" },
  { name: "Dosa (Moong + Urad)", gi: 50, carbsPer100g: 25, state: "cooked", cuisine: "Indian" },
  { name: "Dhokla", gi: 45, carbsPer100g: 20, state: "cooked", cuisine: "Indian" },
  { name: "Popcorn (Butter)", gi: 65, carbsPer100g: 45, state: "cooked", cuisine: "Global" },
  { name: "Makhana (Fox Nuts)", gi: 50, carbsPer100g: 65, state: "cooked", cuisine: "Indian" },
  { name: "Roasted Chana", gi: 28, carbsPer100g: 50, state: "raw", cuisine: "Indian" },
  { name: "Peanut Masala", gi: 18, carbsPer100g: 15, state: "cooked", cuisine: "Indian" },
  { name: "Panipuri (10 pcs)", gi: 75, carbsPer100g: 30, state: "cooked", cuisine: "Indian" }, // High est for puri + potatoes

  // --- Legumes, Pulses & Beans ---
  { name: "Moong Dal", gi: 30, carbsPer100g: 20, state: "cooked", cuisine: "Indian" },
  { name: "Urad Dal", gi: 30, carbsPer100g: 18, state: "cooked", cuisine: "Indian" },
  { name: "Rajma (Kidney Beans)", gi: 24, carbsPer100g: 22, state: "cooked", cuisine: "Indian" },
  { name: "Chole (Chickpeas)", gi: 28, carbsPer100g: 25, state: "cooked", cuisine: "Indian" },
  { name: "Dal (Generic Bowl)", gi: 30, carbsPer100g: 15, state: "cooked", cuisine: "Indian" },

  // --- Meat, Eggs & Seafood ---
  { name: "Egg (Boiled)", gi: 0, carbsPer100g: 1, state: "cooked", cuisine: "Global" },
  { name: "Omelette", gi: 0, carbsPer100g: 2, state: "cooked", cuisine: "Global" },
  { name: "Chicken Tikka", gi: 0, carbsPer100g: 5, state: "cooked", cuisine: "Indian" },
  { name: "Tandoori Chicken", gi: 0, carbsPer100g: 2, state: "cooked", cuisine: "Indian" },
  { name: "Chicken Soup", gi: 0, carbsPer100g: 5, state: "cooked", cuisine: "Global" },
  { name: "Butter Garlic Prawns", gi: 0, carbsPer100g: 3, state: "cooked", cuisine: "Global" },
  { name: "Chicken Seekh", gi: 0, carbsPer100g: 4, state: "cooked", cuisine: "Indian" },

  // --- Bakery, Wraps & Processed Foods ---
  { name: "Chicken Tikka Wrap", gi: 60, carbsPer100g: 25, state: "cooked", cuisine: "Indian" },
  { name: "Veg Puff", gi: 75, carbsPer100g: 35, state: "cooked", cuisine: "Indian" },
  { name: "Egg Puff", gi: 70, carbsPer100g: 30, state: "cooked", cuisine: "Indian" },
  { name: "Chicken Puff", gi: 70, carbsPer100g: 30, state: "cooked", cuisine: "Indian" },
  { name: "Chicken Seekh Puff", gi: 70, carbsPer100g: 30, state: "cooked", cuisine: "Indian" },
  { name: "Bakery Pastry/Item", gi: 80, carbsPer100g: 50, state: "cooked", cuisine: "Global" },

  // --- International / Restaurant Foods ---
  { name: "Asparagus Tempura Cream Cheese Roll", gi: 65, carbsPer100g: 35, state: "cooked", cuisine: "Japanese" },
  { name: "Falafel", gi: 50, carbsPer100g: 30, state: "cooked", cuisine: "Middle Eastern" },
  { name: "Hummus", gi: 10, carbsPer100g: 15, state: "cooked", cuisine: "Middle Eastern" },

  // --- Dairy & Protein Supplements ---
  { name: "Yogurt / Curd", gi: 30, carbsPer100g: 5, state: "raw", cuisine: "Global" },
  { name: "Greek Yogurt", gi: 25, carbsPer100g: 4, state: "raw", cuisine: "Global" },
  { name: "Whey Protein (Unflavoured)", gi: 0, carbsPer100g: 3, state: "raw", cuisine: "Global" },
  { name: "Whey Protein (Cocoa)", gi: 10, carbsPer100g: 5, state: "raw", cuisine: "Global" },
  { name: "Milk (Whole)", gi: 30, carbsPer100g: 5, state: "raw", cuisine: "Global" },
  { name: "Cold Coffee (No Sugar)", gi: 30, carbsPer100g: 6, state: "cooked", cuisine: "Global" },

  // --- Nuts, Seeds & Fats ---
  { name: "Peanuts", gi: 14, carbsPer100g: 16, state: "raw", cuisine: "Global" },
  { name: "Pistachios", gi: 15, carbsPer100g: 20, state: "raw", cuisine: "Global" },
  { name: "Mixed Nuts", gi: 20, carbsPer100g: 20, state: "raw", cuisine: "Global" },
  { name: "Chia Seeds", gi: 1, carbsPer100g: 42, state: "raw", cuisine: "Global" },
  { name: "Sunflower Seeds", gi: 35, carbsPer100g: 20, state: "raw", cuisine: "Global" },
  { name: "Pumpkin Seeds", gi: 25, carbsPer100g: 15, state: "raw", cuisine: "Global" },
  { name: "Coconut (Fresh)", gi: 45, carbsPer100g: 15, state: "raw", cuisine: "Global" },
  { name: "Coconut (Dry)", gi: 45, carbsPer100g: 24, state: "raw", cuisine: "Global" },
  { name: "Ghee", gi: 0, carbsPer100g: 0, state: "cooked", cuisine: "Indian" },
  { name: "Peanut Oil", gi: 0, carbsPer100g: 0, state: "cooked", cuisine: "Global" },

  // --- Vegetables ---
  { name: "Tomato", gi: 15, carbsPer100g: 4, state: "raw", cuisine: "Global" },
  { name: "Broccoli", gi: 10, carbsPer100g: 7, state: "cooked", cuisine: "Global" },
  { name: "Cauliflower", gi: 15, carbsPer100g: 5, state: "cooked", cuisine: "Global" },
  { name: "Mushrooms", gi: 10, carbsPer100g: 3, state: "cooked", cuisine: "Global" },
  { name: "Asparagus", gi: 15, carbsPer100g: 4, state: "cooked", cuisine: "Global" },
  { name: "Mix Veg Curry", gi: 40, carbsPer100g: 10, state: "cooked", cuisine: "Indian" },

  // --- Fruits ---
  { name: "Apple", gi: 36, carbsPer100g: 14, state: "raw", cuisine: "Global" },
  { name: "Banana", gi: 51, carbsPer100g: 23, state: "raw", cuisine: "Global" },
  { name: "Strawberries", gi: 40, carbsPer100g: 8, state: "raw", cuisine: "Global" },
  { name: "Blueberries", gi: 53, carbsPer100g: 14, state: "raw", cuisine: "Global" },
  { name: "Mango", gi: 51, carbsPer100g: 15, state: "raw", cuisine: "Global" },

  // --- Desserts ---
  { name: "Ice Cream (Vanilla)", gi: 60, carbsPer100g: 24, state: "frozen", cuisine: "Global" },
  { name: "Gelato", gi: 65, carbsPer100g: 28, state: "frozen", cuisine: "Global" },
  { name: "Hazelnut Rocher Ice Cream", gi: 70, carbsPer100g: 35, state: "frozen", cuisine: "Global" },
  { name: "Smoked Chocolate Ice Cream", gi: 70, carbsPer100g: 35, state: "frozen", cuisine: "Global" },
  { name: "Gulab Jamun", gi: 70, carbsPer100g: 40, state: "cooked", cuisine: "Indian" },

  // --- Beverages ---
  { name: "Milk Tea (Sugar)", gi: 60, carbsPer100g: 10, state: "cooked", cuisine: "Indian" },
  { name: "Cappuccino (No Sugar)", gi: 30, carbsPer100g: 5, state: "cooked", cuisine: "Global" },
  { name: "Cold Coffee (Sugar)", gi: 60, carbsPer100g: 25, state: "cooked", cuisine: "Global" },
  { name: "Mocha", gi: 55, carbsPer100g: 20, state: "cooked", cuisine: "Global" },
  { name: "Hot Chocolate (Spiced)", gi: 65, carbsPer100g: 25, state: "cooked", cuisine: "Global" },
  { name: "Coconut Water", gi: 54, carbsPer100g: 4, state: "raw", cuisine: "Global" },
  { name: "Kombucha", gi: 30, carbsPer100g: 5, state: "raw", cuisine: "Global" },
  { name: "Nimbu Soda (Sweet/Salt)", gi: 50, carbsPer100g: 12, state: "raw", cuisine: "Indian" },

  // --- Add-ons ---
  { name: "Cocoa Powder (Unswt)", gi: 20, carbsPer100g: 15, state: "raw", cuisine: "Global" },
  { name: "Butter", gi: 0, carbsPer100g: 0, state: "raw", cuisine: "Global" },
  { name: "Aloo Masala", gi: 70, carbsPer100g: 20, state: "cooked", cuisine: "Indian" },
  { name: "Jaljeera", gi: 40, carbsPer100g: 10, state: "raw", cuisine: "Indian" },
];
