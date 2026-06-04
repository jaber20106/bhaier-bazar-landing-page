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

    // HERO SECTION
    hero: {
      title: "ভাইয়ের বাজার",
      subtitle: "চট্টগ্রামের আসল চিংড়ি বালাচাও",
      description:
        "ঘরোয়া ঐতিহ্যবাহী রেসিপিতে তৈরী ঝাল, মচমচে ও খাঁটি স্বাদের চিংড়ি বালাচাও - যা একবার খেলেই বারবার খেতে মন চাইবে।",
      badge: "১০০% খাঁটি – কোনো ভেজাল নেই",
      topBadge: "⭐ প্রিমিয়াম কোয়ালিটি",
      bottomBadge: "🌶️ চট্টগ্রামের আসল স্বাদ",
    },

    // CAROUSEL IMAGES
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

    // STATS BAR
    stats: [
      { number: "৪টি", label: "সাইজ অপশন" },
      { number: "১০০%", label: "ফ্রেশ গ্যারান্টি" },
      { number: "০%", label: "রান্নার ঝামেলা" },
      { number: "চট্টগ্রাম", label: "ঐতিহ্যবাহী রেসিপি" },
    ],

    // SIZES
    sizes: [
      { grams: "১৫০", originalPrice: "২৯০", price: "২৮০" },
      { grams: "২০০", originalPrice: "৩৯০", price: "৩৬০" },
      { grams: "৩০০", originalPrice: "৫৯০", price: "৫৫০" },
      { grams: "৫০০", originalPrice: "৮৯০", price: "৮৫০" },
    ],

    // PRODUCT DETAILS
    product: {
      title: "প্রিমিয়াম",
      titleEmphasis: "চিংড়ি বালাচাও",
      tagline: "চট্টগ্রামের আসল স্বাদের ঝাল ও মচমচে বালাচাও",
      description:
        'বালাচাও হচ্ছে এক প্রকার "রেডি টু ইট" সুস্বাদু ও মুখরোচক একটি খাবার। যা মূলত চিংড়ি, পেঁয়াজ, রসুন, শুকনো মরিচ ও মশলার একটি মিশ্রণ। বালাচাও হচ্ছে কক্সবাজার ও চট্টগ্রামের একটি জনপ্রিয় ঐতিহ্যবাহী খাবার। শুটকি প্রেমীদের কাছে অত্যন্ত প্রিয় এই খাবারটি।',
      image: "/assets/balachao-plate.jpg",
      name: "চিংড়ি বালাচাও",
    },

    // INGREDIENTS
    ingredients: [
      "প্রিমিয়াম চিংড়ি শুটকি",
      "দেশি পেঁয়াজ",
      "রসুন",
      "চিলি ফ্লেক্স",
      "পটেটো স্লাইস",
      "সিক্রেট মশলা",
    ],

    // WHY SPECIAL SECTION
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

    // HOW TO ENJOY SECTION (Chingri specific)
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
  {
    id: "nuts-kaju",
    name: "প্রিমিয়াম কাজু বাদাম",
    bengaliName: "কাজু বাদাম",
    description: "প্রিমিয়াম মানের কাজু বাদাম - সুস্বাদু এবং পুষ্টিকর",
    shortDesc: "প্রিমিয়াম কাজু বাদাম",
    image: "/assets/nuts/kaju.jpg",
    icon: "🥜",
    category: "nuts",
    featured: false,
    detailPage: "/products/nuts-kaju.html",

    // HERO SECTION
    hero: {
      title: "ভাইয়ের বাজার",
      subtitle: "প্রিমিয়াম কাজু বাদাম",
      description:
        "বিশ্বমানের প্রিমিয়াম কাজু বাদাম যা সুস্বাদু, ক্রাঞ্চি এবং অত্যন্ত পুষ্টিকর। প্রতিটি কাজু সযত্নে নির্বাচিত।",
      badge: "১০০% প্রাকৃতিক ও পুষ্টিগুণে ভরপুর",
      topBadge: "⭐ প্রিমিয়াম কোয়ালিটি",
      bottomBadge: "🥜 সুস্বাদু এবং পুষ্টিকর",
    },

    // CAROUSEL IMAGES
    carouselImages: [
      {
        src: "/assets/nuts/kaju.jpg",
        alt: "প্রিমিয়াম কাজু বাদাম",
      },
      {
        src: "/assets/nuts/kaju.jpg",
        alt: "প্রিমিয়াম কাজু বাদাম",
      },
      {
        src: "/assets/nuts/kaju.jpg",
        alt: "প্রিমিয়াম কাজু বাদাম",
      },
    ],

    // STATS BAR
    stats: [
      { number: "২টি", label: "সাইজ অপশন" },
      { number: "১০০%", label: "প্রাকৃতিক" },
      { number: "স্বাস্থ্যকর", label: "এবং পুষ্টিগুনে ভরপুর" },
    ],

    // SIZES
    sizes: [
      { grams: "৫০০", originalPrice: "৮৫০", price: "৮০০" },
      { grams: "১০০০", originalPrice: "১৭০০", price: "১৬০০" },
    ],

    // PRODUCT DETAILS
    product: {
      title: "প্রিমিয়াম",
      titleEmphasis: "কাজু বাদাম",
      tagline: "বিশ্বমানের সুস্বাদু এবং ক্রাঞ্চি কাজু",
      description:
        "কাজু বাদাম একটি অত্যন্ত জনপ্রিয় এবং পুষ্টিকর খাবার যা প্রোটিন, স্বাস্থ্যকর চর্বি এবং বিভিন্ন খনিজ পদার্থে সমৃদ্ধ। আমাদের কাজু বাদাম সর্বোচ্চ মানের এবং সতেজ অবস্থায় সরবরাহ করা হয়। এটি শুধুমাত্র সুস্বাদুই নয়, বরং স্বাস্থ্যের জন্যও অত্যন্ত উপকারী।",
      image: "/assets/nuts/kaju.jpg",
      name: "কাজু বাদাম",
    },

    // INGREDIENTS
    ingredients: ["প্রিমিয়াম কাজু বাদাম"],

    // WHY SPECIAL SECTION
    whySpecial: {
      title: "কেন আমাদের কাজু বাদাম",
      titleEmphasis: "স্পেশাল?",
      description:
        "বিশ্বমানের প্রিমিয়াম কাজু বাদাম সযত্নে নির্বাচিত এবং প্রস্তুত।",
      cards: [
        {
          icon: "🥜",
          title: "প্রিমিয়াম মানের",
          description:
            "সর্বোচ্চ মানের কাজু বাদাম যা আন্তর্জাতিক মানদণ্ড মেনে চলে এবং সম্পূর্ণ ফ্রেশ।",
        },
        {
          icon: "💪",
          title: "পুষ্টিকর এবং স্বাস্থ্যকর",
          description:
            "প্রোটিন, হেলদি ফ্যাট এবং খনিজ পদার্থে সমৃদ্ধ - স্বাস্থ্যের জন্য বেশি উপকারী।",
        },
        {
          icon: "🌍",
          title: "আন্তর্জাতিক মান",
          description:
            "বিশ্বমানের প্রক্রিয়াকরণ এবং মান নিয়ন্ত্রণে তৈরি কাজু বাদাম।",
        },
        {
          icon: "⚡",
          title: "তাৎক্ষণিক শক্তি",
          description: "প্রাকৃতিক শক্তি এবং স্টেমিনা বৃদ্ধির জন্য আদর্শ খাবার।",
        },
        {
          icon: "🎁",
          title: "সব সময়ের জন্য",
          description:
            "স্ন্যাকস, ডেজার্ট বা যেকোনো উপলক্ষে ব্যবহার করা যায় এই সুস্বাদু কাজু বাদাম।",
        },
      ],
    },
  },
  {
    id: "nuts-kat",
    name: "কাট বাদাম",
    bengaliName: "কাট বাদাম",
    description: "প্রিমিয়াম মানের কাট বাদাম - সুস্বাদু এবং পুষ্টিকর",
    shortDesc: "প্রিমিয়াম কাট বাদাম",
    image: "/assets/nuts/kat.jpg",
    icon: "🥜",
    category: "nuts",
    featured: false,
    detailPage: "/products/nuts-kat.html",

    // HERO SECTION
    hero: {
      title: "ভাইয়ের বাজার",
      subtitle: "কাট বাদাম",
      description:
        "প্রিমিয়াম কাট বাদাম - প্রতিটি কামড়ে নতুন স্বাদের অনুভূতি।",
      badge: "১০০% প্রাকৃতিক - কোনো ভেজাল নেই",
      topBadge: "⭐ স্বাদের মেলবন্ধন",
      bottomBadge: "🥜 বৈচিত্র্যময় এবং সুস্বাদু",
    },

    // CAROUSEL IMAGES
    carouselImages: [
      {
        src: "/assets/nuts/kat.jpg",
        alt: "কাট নাট মিক্স",
      },
      {
        src: "/assets/nuts/kat.jpg",
        alt: "কাট বাদাম প্যাকেজিং",
      },
      {
        src: "/assets/nuts/kat.jpg",
        alt: "কাট বাদাম প্যাকেজিং",
      },
    ],

    // STATS BAR
    stats: [
      { number: "২টি", label: "সাইজ অপশন" },
      { number: "১০০%", label: "প্রাকৃতিক" },
      { number: "সুস্বাদু", label: "এবং পুষ্টিকর" },
    ],

    // SIZES
    sizes: [
      { grams: "৫০০", originalPrice: "৭৫০", price: "৭০০" },
      { grams: "১০০০", originalPrice: "১৫০০", price: "১৪০০" },
    ],

    // PRODUCT DETAILS
    product: {
      title: "পুষ্টিগুণে ভরপুর",
      titleEmphasis: "কাট বাদাম",
      tagline: "পুষ্টিগুণ সম্পন্ন সুস্বাদু বাদাম",
      description:
        "প্রতিটি কাট বাদাম সযত্নে নির্বাচিত। এটি শুধুমাত্র সুস্বাদুই নয়, বরং পুষ্টিগুণে ভরপুর এবং স্বাস্থ্যের জন্য অত্যন্ত উপকারী। বিভিন্ন ধরনের বাদামের সুস্বাদু মিশ্রণ যা প্রতিটি কামড়ে নতুন স্বাদের অনুভূতি দেয়।",
      image: "/assets/nuts/kat.jpg",
      name: "কাট বাদাম",
    },

    // INGREDIENTS
    ingredients: [
      "বিভিন্ন প্রকার প্রিমিয়াম বাদাম",
    ],

    // WHY SPECIAL SECTION
    whySpecial: {
      title: "কেন আমাদের কাট বাদাম",
      titleEmphasis: "স্পেশাল?",
      description:
        "বিশ্বমানের প্রিমিয়াম কাট বাদাম সযত্নে নির্বাচিত এবং প্রস্তুত।",
      cards: [
        {
          icon: "🥜",
          title: "প্রিমিয়াম মানের",
          description:
            "সর্বোচ্চ মানের কাট বাদাম যা আন্তর্জাতিক মানদণ্ড মেনে চলে এবং সম্পূর্ণ ফ্রেশ।",
        },
        {
          icon: "💪",
          title: "পুষ্টিকর এবং স্বাস্থ্যকর",
          description:
            "প্রোটিন, হেলদি ফ্যাট এবং খনিজ পদার্থে সমৃদ্ধ - স্বাস্থ্যের জন্য বেশি উপকারী।",
        },
        {
          icon: "🌍",
          title: "আন্তর্জাতিক মান",
          description:
            "বিশ্বমানের প্রক্রিয়াকরণ এবং মান নিয়ন্ত্রণে তৈরি কাট বাদাম।",
        },
        {
          icon: "⚡",
          title: "তাৎক্ষণিক শক্তি",
          description: "প্রাকৃতিক শক্তি এবং স্টেমিনা বৃদ্ধির জন্য আদর্শ খাবার।",
        },
        {
          icon: "🎁",
          title: "সব সময়ের জন্য",
          description:
            "স্ন্যাকস, ডেজার্ট বা যেকোনো উপলক্ষে ব্যবহার করা যায় এই সুস্বাদু কাট বাদাম।",
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
