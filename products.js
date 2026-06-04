// Products data structure
const products = [
  {
    id: "chingri-balachao",
    name: "চিংড়ি বালাচাও",
    bengaliName: "চিংড়ি বালাচাও",
    description: "চট্টগ্রামের আসল স্বাদের ঝাল ও মচমচে চিংড়ি বালাচাও",
    shortDesc: "ঐতিহ্যবাহী চিংড়ি বালাচাও",
    image: "/assets/balachao-jar.jpg",
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
    id: "nuts-kaju",
    name: "কাজু বাদাম",
    bengaliName: "কাজু বাদাম",
    description: "প্রিমিয়াম মানের কাজু বাদাম - সুস্বাদু এবং পুষ্টিকর",
    shortDesc: "প্রিমিয়াম কাজু বাদাম",
    image: "/assets/nuts/kaju.jpg",
    category: "nuts",
    featured: true,
    detailPage: "/products/nuts-kaju.html",
    sizes: [
      { grams: 500, originalPrice: 850, price: 800 },
      { grams: 1000, originalPrice: 1700, price: 1600 },
    ],
    ingredients: [
      "প্রিমিয়াম কাজু বাদাম",
      "প্রাকৃতিক তেল",
      "সামুদ্রিক লবণ",
      "মশলা",
    ],
  },
  {
    id: "nuts-kat",
    name: "কাট বাদাম",
    bengaliName: "কাট বাদাম",
    description: "প্রিমিয়াম মানের কাট বাদাম - সুস্বাদু এবং পুষ্টিকর",
    shortDesc: "প্রিমিয়াম কাট বাদাম",
    image: "/assets/nuts/kat.jpg",
    category: "nuts",
    featured: false,
    detailPage: "/products/nuts-kat.html",
    sizes: [
      { grams: 500, originalPrice: 750, price: 700 },
      { grams: 1000, originalPrice: 1500, price: 1400 },
    ],
    ingredients: [
      "বিভিন্ন প্রকার বাদাম",
      "প্রাকৃতিক তেল",
      "মশলা",
      "সামুদ্রিক লবণ",
    ],
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
