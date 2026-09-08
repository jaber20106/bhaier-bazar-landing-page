// Product Data Structure
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

    hero: {
      title: "ভাইয়ের বাজার",
      subtitle: "চট্টগ্রামের আসল চিংড়ি বালাচাও",
      description:
        "ঘরোয়া ঐতিহ্যবাহী রেসিপিতে তৈরী ঝাল, মচমচে ও খাঁটি স্বাদের চিংড়ি বালাচাও - যা একবার খেলেই বারবার খেতে মন চাইবে।",
      badge: "১০০% খাঁটি – কোনো ভেজাল নেই",
      topBadge: "⭐ প্রিমিয়াম কোয়ালিটি",
      bottomBadge: "🌶️ চট্টগ্রামের আসল স্বাদ",
    },

    carouselImages: [
      {
        src: "/assets/balachao-jar.jpg",
        alt: "চিংড়ি বালাচাও জার",
      },
      {
        src: "/assets/balachao-jars-all.jpg",
        alt: "চিংড়ি বালাচাও একসঙ্গে",
      },
      {
        src: "/assets/balachao-plate.jpg",
        alt: "চিংড়ি বালাচাও প্লেটে পরিবেশিত",
      },
    ],

    stats: [
      { number: "৪টি", label: "সাইজ অপশন" },
      { number: "১০০%", label: "ফ্রেশ গ্যারান্টি" },
      { number: "০%", label: "রান্নার ঝামেলা" },
      { number: "চট্টগ্রাম", label: "ঐতিহ্যবাহী রেসিপি" },
    ],

    sizes: [
      { grams: "১৫০", originalPrice: "২৯০", price: "২৮০" },
      { grams: "২০০", originalPrice: "৩৯০", price: "৩৭০" },
      { grams: "৩০০", originalPrice: "৫৯০", price: "৫৫০" },
      { grams: "৫০০", originalPrice: "৮৯০", price: "৮৫০" },
    ],

    product: {
      title: "প্রিমিয়াম",
      titleEmphasis: "চিংড়ি বালাচাও",
      tagline: "চট্টগ্রামের আসল স্বাদের ঝাল ও মচমচে বালাচাও",
      description:
        'বালাচাও হচ্ছে এক প্রকার "রেডি টু ইট" সুস্বাদু ও মুখরোচক একটি খাবার। যা মূলত চিংড়ি, পেঁয়াজ, রসুন, শুকনো মরিচ ও মশলার একটি মিশ্রণ। বালাচাও হচ্ছে কক্সবাজার ও চট্টগ্রামের একটি জনপ্রিয় ঐতিহ্যবাহী খাবার। শুটকি প্রেমীদের কাছে অত্যন্ত প্রিয় এই খাবারটি।',
      image: "/assets/balachao-plate.jpg",
      name: "চিংড়ি বালাচাও",
    },

    ingredients: [
      "প্রিমিয়াম চিংড়ি শুটকি",
      "দেশি পেঁয়াজ",
      "রসুন",
      "চিলি ফ্লেক্স",
      "পটেটো স্লাইস",
      "সিক্রেট মশলা",
    ],

    whySpecial: {
      title: "কেন আমাদের বালাচাও",
      titleEmphasis: "স্পেশাল?",
      description:
        "বাছাইকৃত চিংড়ি শুঁটকি, দেশি পেঁয়াজ-রসুন আর আমাদের নিজস্ব সিক্রেট মশলার জাদুকরী মিশ্রণে তৈরি এই বালাচাও।",
      cards: [
        {
          icon: "🦐",
          title: "বাছাইকৃত চিংড়ি",
          description:
            "প্রিমিয়াম মানের চিংড়ি শুঁটকি ব্যবহার করা হয়, যা প্রতিটি কামড়ে আসল স্বাদ দেয়।",
        },
        {
          icon: "🌶️",
          title: "পারফেক্ট ঝাল-মচমচে ব্যালেন্স",
          description:
            "ঝাল আর মচমচে স্বাদের নিখুঁত ব্যালেন্স, যা আপনার রুচি বাড়িয়ে দেবে বহুগুণ।",
        },
        {
          icon: "✅",
          title: "সুপার ক্রাঞ্চি ও ফ্রেশ",
          description:
            "প্রতিটি ধাপে মান নিয়ন্ত্রণে সর্বোচ্চ গুরুত্ব দিয়ে শতভাগ ফ্রেশ স্বাদের গ্যারান্টি।",
        },
        {
          icon: "🏡",
          title: "ঘরে তৈরি রেসিপি",
          description:
            "চট্টগ্রামের ঐতিহ্যবাহী সিক্রেট মশলার রেসিপিতে তৈরি, কোনো কৃত্রিম উপাদান নেই।",
        },
        {
          icon: "⚡",
          title: "রেডি টু ইট",
          description:
            "কোনো রান্নার ঝামেলা নেই। সরাসরি প্যাকেট খুলে পরিবেশন করুন।",
        },
        {
          icon: "🎁",
          title: "সব বয়সের পছন্দ",
          description:
            "ছোট থেকে বড় সবাই পছন্দ করে এই ঐতিহ্যবাহী কক্সবাজার-চট্টগ্রামের বালাচাও।",
        },
      ],
    },

    howToEnjoy: {
      title: "কিভাবে",
      titleEmphasis: "উপভোগ করবেন?",
      description:
        "যেকোনো খাবারের সাথেই মিলিয়ে নিতে পারেন এই অসাধারণ বালাচাও।",
      items: [
        {
          emoji: "🍚",
          text: "ধোঁয়া ওঠা গরম ভাত এবং ডালের সাথে",
        },
        {
          emoji: "🍛",
          text: "খিচুড়ির সেরা সঙ্গী",
        },
        {
          emoji: "🥗",
          text: "মুড়ি মাখানো কিংবা বিকেলের হালকা নাস্তায়",
        },
        {
          emoji: "🥬",
          text: "যেকোনো ভর্তা বা ভাজা শাকের স্বাদ বাড়াতে",
        },
        {
          emoji: "😋",
          text: "এমনকি শুধু মুখে স্ন্যাকস হিসেবেও অতুলনীয়!",
        },
      ],
    },
  },

  // ============================================
  // SEVEN OCEANS NORWEGIAN BISCUIT
  // ============================================

  {
    id: "seven-oceans-biscuit",
    name: "Seven Oceans Biscuit",
    bengaliName: "সেভেন ওসেন বিস্কুট",
    description:
      "নরওয়ের জনপ্রিয় Seven Oceans-এর দীর্ঘস্থায়ী ও এনার্জি সমৃদ্ধ বিস্কুট",
    shortDesc: "নরওয়ের প্রিমিয়াম Seven Oceans Biscuit",
    image: "/assets/seven-ocean/sevenocean3.jpg",
    icon: "🍪",
    category: "snacks",
    featured: true,
    detailPage: "/products/seven-oceans-biscuit.html",

    // HERO SECTION
    hero: {
      title: "ভাইয়ের বাজার",
      subtitle: "নরওয়ের জনপ্রিয় Seven Oceans Biscuit",
      description:
        "হালকা, মচমচে ও খেতে সুস্বাদু Seven Oceans Biscuit। দীর্ঘদিন সংরক্ষণযোগ্য হওয়ায় বাসা, ভ্রমণ এবং জরুরি খাবারের জন্য এটি হতে পারে একটি চমৎকার পছন্দ।",
      badge: "⭐ প্রিমিয়াম কোয়ালিটি",
      topBadge: "🇳🇴 নরওয়ের জনপ্রিয় ব্র্যান্ড",
      bottomBadge: "🍪 রেডি টু ইট ও দীর্ঘস্থায়ী",
    },

    // CAROUSEL IMAGES
    carouselImages: [
      {
        src: "/assets/seven-ocean/sevenocean1.jpg",
        alt: "Seven Oceans Norwegian Biscuit প্যাকেট",
      },
      {
        src: "/assets/seven-ocean/sevenocean2.jpg",
        alt: "Seven Oceans Biscuit বার",
      },
      {
        src: "/assets/seven-ocean/sevenocean3.jpg",
        alt: "Seven Oceans Biscuit পরিবেশিত",
      },
    ],

    // STATS BAR
    stats: [
      { number: "৯টি", label: "বিস্কুট বার" },
      { number: "৫০০ গ্রাম", label: "প্যাকেট ওজন" },
      { number: "Ready", label: "খাওয়ার জন্য প্রস্তুত" },
      { number: "দীর্ঘস্থায়ী", label: "সংরক্ষণযোগ্য" },
    ],

    // SIZES / PACK OPTIONS
    sizes: [
      {
        grams: "৫০০",
        originalPrice: "৫৫০",
        price: "৫৯০",
      },
    ],

    // PRODUCT DETAILS
    product: {
      title: "প্রিমিয়াম",
      titleEmphasis: "Seven Oceans Biscuit",
      tagline: "নরওয়ের জনপ্রিয় দীর্ঘস্থায়ী ও এনার্জি সমৃদ্ধ বিস্কুট",
      description:
        "Seven Oceans Biscuit একটি বিশেষ ধরনের দীর্ঘস্থায়ী বিস্কুট, যা সহজে বহন করা যায় এবং প্রয়োজনের সময় দ্রুত খাওয়া যায়। প্রতিটি প্যাকেটে আলাদা আলাদা বিস্কুট বার থাকে, যা সংরক্ষণ ও ব্যবহারে সুবিধাজনক। বাসায় রাখার পাশাপাশি ভ্রমণ, ক্যাম্পিং, দীর্ঘ যাত্রা এবং জরুরি খাবারের স্টক হিসেবে এটি একটি ব্যবহারিক পছন্দ।",
      image: "/assets/seven-ocean/sevenocean3.jpg",
      name: "Seven Oceans Biscuit",
    },

    // PRODUCT HIGHLIGHTS / INGREDIENTS
    // প্রকৃত ingredient list প্যাকেটের nutrition label অনুযায়ী update করা ভালো।
    ingredients: [
      "উচ্চমানের গমজাত উপাদান",
      "উদ্ভিজ্জ তেল",
      "চিনি",
      "লবণ",
      "বিস্কুট তৈরির প্রয়োজনীয় উপাদান",
      "প্রস্তুতকারকের নির্ধারিত পুষ্টি উপাদান",
    ],

    // WHY SPECIAL SECTION
    whySpecial: {
      title: "কেন Seven Oceans Biscuit",
      titleEmphasis: "স্পেশাল?",
      description:
        "সহজে বহনযোগ্য প্যাকেজিং, দীর্ঘ সময় সংরক্ষণের সুবিধা এবং রেডি-টু-ইট হওয়ার কারণে এটি সাধারণ বিস্কুটের তুলনায় ভ্রমণ ও জরুরি খাবারের স্টকের জন্য বিশেষভাবে উপযোগী।",
      cards: [
        {
          icon: "🇳🇴",
          title: "নরওয়ের জনপ্রিয় পণ্য",
          description:
            "আন্তর্জাতিকভাবে পরিচিত Seven Oceans-এর প্রিমিয়াম মানের বিস্কুট।",
        },
        {
          icon: "⚡",
          title: "দ্রুত খাওয়ার সুবিধা",
          description:
            "কোনো রান্না বা প্রস্তুতির প্রয়োজন নেই। প্যাকেট খুলেই সরাসরি খাওয়া যায়।",
        },
        {
          icon: "🎒",
          title: "সহজে বহনযোগ্য",
          description:
            "ভ্রমণ, ট্যুর, ক্যাম্পিং বা দীর্ঘ যাত্রায় সহজে সঙ্গে বহন করা যায়।",
        },
        {
          icon: "📦",
          title: "দীর্ঘদিন সংরক্ষণযোগ্য",
          description:
            "উপযুক্ত পরিবেশে সংরক্ষণ করলে দীর্ঘ সময়ের জন্য খাবারের স্টক হিসেবে রাখা যায়।",
        },
        {
          icon: "🍪",
          title: "মচমচে ও সুস্বাদু",
          description:
            "হালকা ও মচমচে টেক্সচার এটিকে যেকোনো সময়ের সহজ খাবার হিসেবে উপভোগ্য করে তোলে।",
        },
        {
          icon: "🛟",
          title: "জরুরি খাবারের জন্য উপযোগী",
          description:
            "বাসা বা ভ্রমণে জরুরি খাবারের স্টক হিসেবে রাখার জন্য একটি সুবিধাজনক পণ্য।",
        },
      ],
    },

    // HOW TO ENJOY SECTION
    howToEnjoy: {
      title: "কিভাবে",
      titleEmphasis: "উপভোগ করবেন?",
      description:
        "যেকোনো সময় সহজেই খেতে পারেন এই মচমচে ও সুস্বাদু বিস্কুট।",
      items: [
        {
          emoji: "☕",
          text: "সকালে বা বিকেলে চা-কফির সাথে",
        },
        {
          emoji: "🎒",
          text: "ভ্রমণ বা দীর্ঘ যাত্রায় সঙ্গে নিয়ে",
        },
        {
          emoji: "🏕️",
          text: "ক্যাম্পিং ও আউটডোর অ্যাক্টিভিটিতে",
        },
        {
          emoji: "🏠",
          text: "বাসায় জরুরি খাবারের স্টক হিসেবে সংরক্ষণ করে",
        },
        {
          emoji: "😋",
          text: "ক্ষুধা লাগলে যেকোনো সময় সরাসরি স্ন্যাকস হিসেবে",
        },
      ],
    },
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
