// Products data structure
const products = [
  {
    id: "chingri-balachao",
    name: "চিংড়ি বালাচাও",
    bengaliName: "চিংড়ি বালাচাও",
    description: "চট্টগ্রামের আসল স্বাদের ঝাল ও মচমচে চিংড়ি বালাচাও",
    shortDesc: "ঐতিহ্যবাহী চিংড়ি বালাচাও",
    image: "/assets/balachao-jar.jpg",
    icon: "🦐",
    category: "seafood",
    featured: true,
    detailPage: "/products/chingri-balachao.html",
    sizes: [
      { grams: 150, originalPrice: 290, price: 280 },
      { grams: 200, originalPrice: 390, price: 360 },
      { grams: 300, originalPrice: 590, price: 550 },
      { grams: 500, originalPrice: 890, price: 850 },
    ],
    ingredients: [
      "প্রিমিয়াম চিংড়ি শুটকি",
      "দেশি পেঁয়াজ",
      "রসুন",
      "চিলি ফ্লেক্স",
      "পটেটো স্লাইস",
      "সিক্রেট মশলা",
    ],
  },
  {
    id: "nuts-mix",
    name: "নাট মিক্স",
    bengaliName: "নাট মিক্স",
    description: "প্রিমিয়াম বাদাম, পিস্তা এবং অন্যান্য মশলাদার মিক্স",
    shortDesc: "স্বাস্থ্যকর বাদাম মিশ্রণ",
    image: "/assets/nuts-mix.jpg",
    icon: "🥜",
    category: "nuts",
    featured: false,
    detailPage: "/products/nuts.html",
    sizes: [
      { grams: 100, originalPrice: 250, price: 240 },
      { grams: 200, originalPrice: 450, price: 420 },
      { grams: 500, originalPrice: 950, price: 900 },
    ],
    ingredients: ["বাদাম", "পিস্তা", "কাজু বাদাম", "চিনাবাদাম", "ঘি", "মশলা"],
  },
  {
    id: "dates-premium",
    name: "প্রিমিয়াম খেজুর",
    bengaliName: "প্রিমিয়াম খেজুর",
    description: "আরব থেকে আমদানিকৃত মিষ্টি ও রসালো খেজুর",
    shortDesc: "সুস্বাদু প্রিমিয়াম খেজুর",
    image: "/assets/dates.jpg",
    icon: "🌰",
    category: "dates",
    featured: false,
    detailPage: "/products/dates.html",
    sizes: [
      { grams: 250, originalPrice: 350, price: 330 },
      { grams: 500, originalPrice: 650, price: 620 },
      { grams: 1000, originalPrice: 1200, price: 1150 },
    ],
    ingredients: ["প্রিমিয়াম খেজুর", "প্রাকৃতিক সুগার"],
  },
];

// Get all products
function getAllProducts() {
  return products;
}

// Get featured products
function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

// Get product by ID
function getProductById(id) {
  return products.find((p) => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}
