/**
 * DHRUVAGOURI SPIRITUALS — Central Image Manifest
 * Master registry of all visual assets, canonical resolutions, display locations, and optimization metadata.
 */

export const IMAGE_MANIFEST = {
  // Brand Assets
  brand: {
    logoFull: {
      key: 'brand_logo_full',
      path: '/assets/logo_full.png',
      naturalDimensions: { width: 600, height: 168 },
      aspectRatio: '3.57:1',
      displayLocation: 'Header & Footer brand identity',
      altText: 'DHRUVAGOURI SPIRITUALS - Authentic Indian Spiritual Traditions',
      format: 'image/png',
      compressionTarget: '< 40KB (Lossless PNG)'
    },
    logoEmblem: {
      key: 'brand_logo_emblem',
      path: '/assets/logo_emblem.png',
      naturalDimensions: { width: 99, height: 84 },
      aspectRatio: '1.18:1',
      displayLocation: 'Mobile navigation & Favicon mark',
      altText: 'DhruvaGouri Sacred Kalash Emblem',
      format: 'image/png',
      compressionTarget: '< 15KB'
    }
  },

  // Hero Section Imagery
  hero: {
    desktopBackground: {
      key: 'hero_desktop_bg',
      path: '/assets/hero_bg_2x.jpg',
      webpPath: '/assets/hero_bg_2x.webp',
      fallbackPath: '/assets/hero_bg.png',
      naturalDimensions: { width: 3072, height: 724 },
      aspectRatio: '4.24:1',
      displayLocation: 'Cinematic full-width homepage hero background',
      altText: 'Sacred Vedic Still-Life: Himalayan Rudraksha beads, lit brass oil lamp, Sanskrit scriptures and temple lotus petals',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 290KB (WebP: 167KB)'
    }
  },

  // 10 Category Cards
  categories: [
    {
      id: 1,
      key: 'cat_rudraksha',
      path: '/assets/categories/cat_1_rudraksha.jpg',
      webpPath: '/assets/categories/cat_1_rudraksha.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 1',
      title: 'Rudraksha',
      altText: 'Macro photography of genuine Nepalese Mukhi Rudraksha beads with distinct natural mukhis on dark aged wood',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 220KB (WebP: 153KB)'
    },
    {
      id: 2,
      key: 'cat_sacred_malas',
      path: '/assets/categories/cat_2_sacred_malas.jpg',
      webpPath: '/assets/categories/cat_2_sacred_malas.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 2',
      title: 'Sacred Malas',
      altText: 'Hand-knotted 108-bead prayer japa mala coiled gracefully with traditional saffron silk tassel',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 270KB (WebP: 211KB)'
    },
    {
      id: 3,
      key: 'cat_spiritual_clothing',
      path: '/assets/categories/cat_3_spiritual_clothing.jpg',
      webpPath: '/assets/categories/cat_3_spiritual_clothing.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 3',
      title: 'Spiritual Clothing',
      altText: 'Artfully folded cream devotional raw silk angavastram featuring an intricate antique gold zari border',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 200KB (WebP: 130KB)'
    },
    {
      id: 4,
      key: 'cat_puja_essentials',
      path: '/assets/categories/cat_4_puja_essentials.jpg',
      webpPath: '/assets/categories/cat_4_puja_essentials.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 4',
      title: 'Puja Essentials',
      altText: 'Handcrafted temple brass pooja bell with Nandi finial, glowing diya, and consecrated brass kalash',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 220KB (WebP: 156KB)'
    },
    {
      id: 5,
      key: 'cat_idols',
      path: '/assets/categories/cat_5_idols.jpg',
      webpPath: '/assets/categories/cat_5_idols.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 5',
      title: 'Idols',
      altText: 'Sacred lost-wax cast antique brass Ganesha murti sculpted according to Agamic shilpa shastras',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 250KB (WebP: 188KB)'
    },
    {
      id: 6,
      key: 'cat_yantras',
      path: '/assets/categories/cat_6_yantras.jpg',
      webpPath: '/assets/categories/cat_6_yantras.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 6',
      title: 'Yantras',
      altText: 'Precision engraved copper Shree Yantra plate resting beside traditional brass prayer lamps',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 220KB (WebP: 148KB)'
    },
    {
      id: 7,
      key: 'cat_incense_dhoop',
      path: '/assets/categories/cat_7_incense_dhoop.jpg',
      webpPath: '/assets/categories/cat_7_incense_dhoop.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 7',
      title: 'Incense & Dhoop',
      altText: 'Pure temple agarbatti incense with gentle wisp of sacred fragrant smoke, brass burner and natural dhoop cones',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 180KB (WebP: 110KB)'
    },
    {
      id: 8,
      key: 'cat_temple_accessories',
      path: '/assets/categories/cat_8_temple_accessories.jpg',
      webpPath: '/assets/categories/cat_8_temple_accessories.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 8',
      title: 'Temple Accessories',
      altText: 'Authentic heavy brass temple bell with traditional carved relief and deep resonant tone',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 400KB (WebP: 337KB)'
    },
    {
      id: 9,
      key: 'cat_spiritual_books',
      path: '/assets/categories/cat_9_spiritual_books.jpg',
      webpPath: '/assets/categories/cat_9_spiritual_books.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 9',
      title: 'Spiritual Books',
      altText: 'Historic illuminated manuscript copy of the sacred Bhagavad Gita in classical Devanagari script',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 290KB (WebP: 207KB)'
    },
    {
      id: 10,
      key: 'cat_ayurvedic_wellness',
      path: '/assets/categories/cat_10_ayurvedic_wellness.jpg',
      webpPath: '/assets/categories/cat_10_ayurvedic_wellness.webp',
      naturalDimensions: { width: 1000, height: 840 },
      aspectRatio: '1.19:1 (Card frame: 138x116px)',
      displayLocation: 'Category Section — Card 10',
      title: 'Ayurvedic & Traditional Wellness',
      altText: 'Pure holistic Ayurvedic botanicals, medicinal roots, therapeutic spices and herbal preparations',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 430KB (WebP: 348KB)'
    }
  ],

  // 6 Featured Products
  featuredProducts: [
    {
      id: 1,
      key: 'prod_rudraksha_mala',
      path: '/assets/products/prod_1_rudraksha_mala.jpg',
      webpPath: '/assets/products/prod_1_rudraksha_mala.webp',
      naturalDimensions: { width: 1024, height: 1024 },
      aspectRatio: '1:1 (Square)',
      displayLocation: 'Featured Products Grid — Card 1',
      title: 'Vedic Mukhi Rudraksha Japa Mala',
      altText: 'Editorial close-up of genuine Vedic Mukhi Rudraksha Japa Mala with golden bead spacers on warm ivory silk background',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 750KB (WebP: 170KB)'
    },
    {
      id: 2,
      key: 'prod_devotional_clothing',
      path: '/assets/products/prod_2_devotional_clothing.jpg',
      webpPath: '/assets/products/prod_2_devotional_clothing.webp',
      naturalDimensions: { width: 1024, height: 1024 },
      aspectRatio: '1:1 (Square)',
      displayLocation: 'Featured Products Grid — Card 2',
      title: 'Temple Pure Silk Zari Angavastram',
      altText: 'Impeccably folded cream raw silk angavastram shawl with traditional woven gold zari border',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 750KB (WebP: 173KB)'
    },
    {
      id: 3,
      key: 'prod_brass_puja_lamp',
      path: '/assets/products/prod_3_brass_puja_lamp.jpg',
      webpPath: '/assets/products/prod_3_brass_puja_lamp.webp',
      naturalDimensions: { width: 1024, height: 1024 },
      aspectRatio: '1:1 (Square)',
      displayLocation: 'Featured Products Grid — Card 3',
      title: 'Traditional Stambh Deepam Oil Lamp',
      altText: 'Tall South Indian brass stambh deepam oil lamp with intricate peacock finial and glowing flame',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 750KB (WebP: 158KB)'
    },
    {
      id: 4,
      key: 'prod_ganesha_idol',
      path: '/assets/products/prod_4_ganesha_idol.jpg',
      webpPath: '/assets/products/prod_4_ganesha_idol.webp',
      naturalDimensions: { width: 1024, height: 1024 },
      aspectRatio: '1:1 (Square)',
      displayLocation: 'Featured Products Grid — Card 4',
      title: 'Handcrafted Antique Brass Ganesh Idol',
      altText: 'Artisan handcrafted solid antique brass Ganesha murti with detailed ornate mukut and traditional abhaya mudra',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 750KB (WebP: 161KB)'
    },
    {
      id: 5,
      key: 'prod_sacred_bead_collection',
      path: '/assets/products/prod_5_sacred_bead_collection.jpg',
      webpPath: '/assets/products/prod_5_sacred_bead_collection.webp',
      naturalDimensions: { width: 1024, height: 1024 },
      aspectRatio: '1:1 (Square)',
      displayLocation: 'Featured Products Grid — Card 5',
      title: 'Siddha Combination Sacred Beads',
      altText: 'Carefully arranged combination of energized 1 to 14 Mukhi Rudraksha beads coiled in sacred geometry',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 1.2MB (WebP: 466KB)'
    },
    {
      id: 6,
      key: 'prod_incense_accessories',
      path: '/assets/products/prod_6_incense_accessories.jpg',
      webpPath: '/assets/products/prod_6_incense_accessories.webp',
      naturalDimensions: { width: 1024, height: 1024 },
      aspectRatio: '1:1 (Square)',
      displayLocation: 'Featured Products Grid — Card 6',
      title: 'Sacred Temple Dhoop & Incense Set',
      altText: 'Complete devotional incense kit with natural botanical agarbatti sticks, dhoop cones and ornate brass holder',
      format: 'image/jpeg, image/webp',
      compressionTarget: '< 700KB (WebP: 126KB)'
    }
  ]
};

export default IMAGE_MANIFEST;
