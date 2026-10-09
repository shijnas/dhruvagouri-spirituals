export const NAV_LINKS = [
  { name: 'Home', href: '#', active: true },
  { name: 'Shop All', href: '#shop-all' },
  { 
    name: 'Rudraksha & Malas', 
    href: '#rudraksha-malas',
    hasDropdown: true,
    items: [
      { name: '1 to 21 Mukhi Rudraksha', href: '#' },
      { name: 'Siddha Mala & Special Combinations', href: '#' },
      { name: 'Tulsi & Sandalwood Malas', href: '#' },
      { name: 'Rudraksha Bracelets', href: '#' },
    ]
  },
  { 
    name: 'Puja Essentials', 
    href: '#puja-essentials',
    hasDropdown: true,
    items: [
      { name: 'Brass Diyas & Oil Lamps', href: '#' },
      { name: 'Panchapatra & Arghya Vessels', href: '#' },
      { name: 'Puja Thalis & Bell Accessories', href: '#' },
      { name: 'Havan & Homa Samagri', href: '#' },
    ]
  },
  { 
    name: 'Sacred Living', 
    href: '#sacred-living',
    hasDropdown: true,
    items: [
      { name: 'Pure Brass & Bronze Idols', href: '#' },
      { name: 'Energized Sacred Yantras', href: '#' },
      { name: 'Traditional Devotional Clothing', href: '#' },
      { name: 'Organic Incense & Dhoop', href: '#' },
    ]
  },
  { name: 'Our Heritage', href: '#our-heritage' },
];

export const BRAND_PRINCIPLES = [
  {
    id: 1,
    title: 'Tradition First',
    description: 'Inspired by enduring Indian spiritual practices.',
    icon: 'lotus',
  },
  {
    id: 2,
    title: 'Thoughtfully Selected',
    description: 'A considered range for devotional living.',
    icon: 'sprig',
  },
  {
    id: 3,
    title: 'Quality in Every Detail',
    description: 'Product information presented with care and clarity.',
    icon: 'diamond',
  },
  {
    id: 4,
    title: 'Rooted in Devotion',
    description: 'Created around respect for spiritual traditions.',
    icon: 'hands',
  },
];

export const CATEGORIES = [
  {
    id: 1,
    name: 'Rudraksha',
    image: '/assets/categories/cat_1_rudraksha.png',
    href: '#rudraksha',
    description: 'Authentic Himalayan Rudraksha beads selected for sacred alignment.'
  },
  {
    id: 2,
    name: 'Sacred Malas',
    image: '/assets/categories/cat_2_sacred_malas.png',
    href: '#sacred-malas',
    description: 'Traditional 108-bead japa malas hand-knotted on natural cords.'
  },
  {
    id: 3,
    name: 'Spiritual Clothing',
    image: '/assets/categories/cat_3_spiritual_clothing.png',
    href: '#spiritual-clothing',
    description: 'Handwoven natural silk & cotton dhotis, kurtas, and angavastrams.'
  },
  {
    id: 4,
    name: 'Puja Essentials',
    image: '/assets/categories/cat_4_puja_essentials.png',
    href: '#puja-essentials',
    description: 'Handcrafted brass lamps, kalash, thalis, and ritual vessels.'
  },
  {
    id: 5,
    name: 'Idols',
    image: '/assets/categories/cat_5_idols.png',
    href: '#idols',
    description: 'Vedic brass, bronze, and stone deities sculpted with traditional iconography.'
  },
  {
    id: 6,
    name: 'Yantras',
    image: '/assets/categories/cat_6_yantras.png',
    href: '#yantras',
    description: 'Sacred geometric copper & brass yantras etched according to ancient shastras.'
  },
  {
    id: 7,
    name: 'Incense & Dhoop',
    image: '/assets/categories/cat_7_incense_dhoop.png',
    href: '#incense-dhoop',
    description: 'Pure botanical resin, temple agarbatti, and natural herbal sambrani.'
  },
  {
    id: 8,
    name: 'Temple Accessories',
    image: '/assets/categories/cat_8_temple_accessories.png',
    href: '#temple-accessories',
    description: 'Traditional temple bells, conch shells, chamars, and sacred ornamentation.'
  },
  {
    id: 9,
    name: 'Spiritual Books',
    image: '/assets/categories/cat_9_spiritual_books.png',
    href: '#spiritual-books',
    description: 'Timeless Vedic commentaries, Upanishads, Bhagavad Gita, and sacred hymns.'
  },
  {
    id: 10,
    name: 'Ayurvedic & Traditional Wellness',
    image: '/assets/categories/cat_10_ayurvedic_wellness.png',
    href: '#ayurvedic-wellness',
    description: 'Pure herbs, brass pestles, sacred oils, and traditional rasayanas.'
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Vedic Mukhi Rudraksha Japa Mala',
    badge: 'New',
    image: '/assets/products/prod_1_rudraksha_mala.jpg',
    category: 'Sacred Malas',
    price: 3450,
    originalPrice: 3950,
    description: 'Authentic 108+1 bead 5-Mukhi Rudraksha mala knotted in traditional silk thread with tassel.',
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: 2,
    name: 'Temple Pure Silk Zari Angavastram',
    badge: 'Bestseller',
    image: '/assets/products/prod_2_devotional_clothing.jpg',
    category: 'Spiritual Clothing',
    price: 4800,
    originalPrice: 5500,
    description: 'Handwoven natural raw silk devotional cloth with authentic woven antique gold border.',
    rating: 5.0,
    reviewsCount: 64
  },
  {
    id: 3,
    name: 'Traditional Stambh Deepam Oil Lamp',
    badge: null,
    image: '/assets/products/prod_3_brass_puja_lamp.jpg',
    category: 'Puja Essentials',
    price: 2850,
    originalPrice: 3200,
    description: 'Solid brass handcrafted pedestal lamp designed for daily sanctum illumination.',
    rating: 4.8,
    reviewsCount: 29
  },
  {
    id: 4,
    name: 'Handcrafted Antique Brass Ganesh Idol',
    badge: null,
    image: '/assets/products/prod_4_ganesha_idol.jpg',
    category: 'Idols',
    price: 6200,
    originalPrice: 7000,
    description: 'Intricately cast brass idol representing Lord Ganesha with traditional abhaya mudra.',
    rating: 5.0,
    reviewsCount: 82
  },
  {
    id: 5,
    name: 'Siddha Combination Sacred Beads',
    badge: null,
    image: '/assets/products/prod_5_sacred_bead_collection.jpg',
    category: 'Rudraksha',
    price: 5400,
    originalPrice: 6100,
    description: 'Curated combination of energized Nepal Rudraksha beads for profound meditation.',
    rating: 4.9,
    reviewsCount: 45
  },
  {
    id: 6,
    name: 'Sacred Temple Dhoop & Incense Set',
    badge: null,
    image: '/assets/products/prod_6_incense_accessories.jpg',
    category: 'Incense & Dhoop',
    price: 1650,
    originalPrice: 1950,
    description: 'Charcoal-free pure sandalwood and guggul incense sticks paired with a carved brass stand.',
    rating: 4.9,
    reviewsCount: 51
  },
];
