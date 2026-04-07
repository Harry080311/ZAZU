/* =====================================================
   ZAZU v5.0 — JAVASCRIPT (COMPLETE & FIXED)
   All features connected and working
   ===================================================== */

'use strict';

/* =====================================================
   1. CONSTANTS & CONFIG
   ===================================================== */
const CONFIG = {
  whatsappNumber: '233247221043',
  freeDeliveryThreshold: 500,
  countdownHours: 11,
  toastDuration: 3000,
  loaderDelay: 2100,
  productsPerPage: 8,
  storageKeys: {
    theme: 'zazuTheme',
    cart: 'zazuCart',
    wishlist: 'zazuWishlist',
  },
};

/* =====================================================
   2. PRODUCT DATA
   ===================================================== */
const PRODUCTS = [
  {
    id: 1,
    name: 'ZazuTech Pro Smartwatch',
    category: 'tech',
    price: 780,
    oldPrice: 1200,
    discount: 35,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 204,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=85&auto=format&fit=crop',
    alt: 'ZazuTech Pro Smartwatch',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Smartwatch',
    colours: ['#1a1a1a', '#c0c0c0', '#4169E1'],
    description: 'Advanced smartwatch with heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life. Perfect for fitness enthusiasts and busy professionals across Ghana.',
  },
  {
    id: 2,
    name: 'Accra Vibes Streetwear Hoodie',
    category: 'fashion',
    price: 280,
    oldPrice: 380,
    discount: 26,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=85&auto=format&fit=crop',
    alt: 'Accra Vibes Streetwear Hoodie',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Hoodie',
    colours: ['#1a1a1a', '#006B3F', '#FCD116'],
    description: 'Premium cotton hoodie with bold Accra-inspired graphics. Soft, comfortable, and perfect for Ghana\'s cooler evenings. Available in Black, Green, and Gold.',
  },
  {
    id: 3,
    name: 'Chrome Wave Sunglasses',
    category: 'accessories',
    price: 155,
    oldPrice: 220,
    discount: 30,
    badge: 'new',
    badgeText: '✨ New',
    rating: 4,
    reviews: 63,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=85&auto=format&fit=crop',
    alt: 'Chrome Wave Sunglasses',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Sunglasses',
    colours: ['#1a1a1a', '#c0c0c0', '#8B4513'],
    description: 'UV400 protection sunglasses with polarized lenses. Beat the Ghana heat in style with these sleek chrome frames. Perfect for beach days and city vibes.',
  },
  {
    id: 4,
    name: 'BoomBox Mini Bluetooth Speaker',
    category: 'tech',
    price: 420,
    oldPrice: 650,
    discount: 35,
    badge: 'sale',
    badgeText: '💥 Sale',
    rating: 5,
    reviews: 311,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=85&auto=format&fit=crop',
    alt: 'BoomBox Mini Bluetooth Speaker',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Speaker',
    colours: ['#1a1a1a', '#CE1126', '#4169E1'],
    description: 'Powerful portable Bluetooth speaker with 360° sound, 12-hour battery, and waterproof design. Perfect for parties, picnics, and outdoor adventures.',
  },
  {
    id: 5,
    name: 'Air Force Sneaker',
    category: 'fashion',
    price: 390,
    oldPrice: 560,
    discount: 30,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 176,
    image: 'https://i.ibb.co/ZRzwS8Fp/Air-force-1-sneaker.webp',
    alt: 'Air Force Sneaker — classic style and ultimate comfort',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Air+Force+Sneaker',
    colours: ['#ffffff', '#1a1a1a', '#CE1126'],
    description: 'Classic Air Force style sneakers with premium leather finish. Iconic design meets all-day comfort. A must-have for every sneakerhead in Ghana.',
  },
  {
    id: 6,
    name: 'ZazuPhone X Pro Smartphone',
    category: 'phones',
    price: 1850,
    oldPrice: 2400,
    discount: 23,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=85&auto=format&fit=crop',
    alt: 'ZazuPhone X Pro Smartphone',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Phone',
    colours: ['#1a1a1a', '#4169E1', '#c0c0c0'],
    description: '6.7" AMOLED display, 108MP camera, 5000mAh battery, and 5G ready. Flagship performance at an unbeatable price. Perfect for content creators and power users.',
  },
  {
    id: 7,
    name: 'ProGamer RGB Headset',
    category: 'audio',
    price: 560,
    oldPrice: 800,
    discount: 30,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=85&auto=format&fit=crop',
    alt: 'ProGamer RGB Headset',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Headset',
    colours: ['#1a1a1a', '#CE1126', '#4169E1'],
    description: '7.1 surround sound gaming headset with RGB lighting, noise-canceling mic, and ultra-comfortable ear cushions. Dominate your games with crystal-clear audio.',
  },
  {
    id: 8,
    name: 'Kente Pattern Summer Dress',
    category: 'fashion',
    price: 320,
    oldPrice: 450,
    discount: 29,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=85&auto=format&fit=crop',
    alt: 'Kente Pattern Summer Dress',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Dress',
    colours: ['#FCD116', '#CE1126', '#006B3F'],
    description: 'Beautiful African-inspired summer dress with vibrant Kente patterns. Light, breathable fabric perfect for Ghana\'s tropical climate. Celebrate your heritage in style.',
  },
  {
    id: 9,
    name: 'ZazuBook Pro Laptop',
    category: 'tech',
    price: 3200,
    oldPrice: 4500,
    discount: 29,
    badge: 'sale',
    badgeText: '💥 Deal',
    rating: 4.5,
    reviews: 57,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=85&auto=format&fit=crop',
    alt: 'ZazuBook Pro Laptop',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Laptop',
    colours: ['#c0c0c0', '#1a1a1a'],
    description: 'Intel Core i7, 16GB RAM, 512GB SSD, and stunning 15.6" Full HD display. Perfect for students, creatives, and professionals. Fast delivery across Ghana.',
  },
  {
    id: 10,
    name: 'Explore Perfume 100ml',
    category: 'beauty',
    price: 210,
    oldPrice: 320,
    discount: 34,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 198,
    image: 'https://i.ibb.co/8LdwzC9S/Explore-Perfume.jpg',
    alt: 'Explore Perfume 100ml — a luxurious fragrance for every occasion',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Explore+Perfume',
    description: 'Long-lasting eau de parfum with exotic notes of jasmine, sandalwood, and vanilla. Sophisticated fragrance that makes a statement. 100ml bottle.',
  },
  {
    id: 11,
    name: 'ZazuCharge 20,000mAh Power Bank',
    category: 'tech',
    price: 185,
    oldPrice: 280,
    discount: 34,
    badge: 'hot',
    badgeText: '🔥 Must Have',
    rating: 4.5,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=85&auto=format&fit=crop',
    alt: 'ZazuCharge 20000mAh Power Bank',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Power+Bank',
    colours: ['#1a1a1a', '#ffffff', '#4169E1'],
    description: 'Ultra-high capacity 20,000mAh power bank with dual USB ports and fast charging. Never run out of battery again — essential for Ghana\'s power situation.',
  },
  {
    id: 12,
    name: 'Acer LED Earbuds',
    category: 'audio',
    price: 350,
    oldPrice: 480,
    discount: 27,
    badge: 'new',
    badgeText: '✨ New',
    rating: 4.5,
    reviews: 47,
    image: 'https://i.ibb.co/hFhrYxyc/Acer-LED-Earbuds.avif',
    alt: 'Acer LED Earbuds — premium sound quality',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Acer+LED+Earbuds',
    colours: ['#1a1a1a', '#ffffff', '#CE1126'],
    description: 'True wireless earbuds with LED display, 24-hour battery life, and premium sound quality. Perfect for music lovers and fitness enthusiasts.',
  },
  {
    id: 13,
    name: 'Electric Mist Diffuser',
    category: 'home',
    price: 450,
    oldPrice: 620,
    discount: 27,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 134,
    image: 'https://i.ibb.co/WNmR8TJB/Electric-air-refreshner.avif',
    alt: 'Electric Mist Diffuser — fill your home with beautiful fragrance',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Electric+Mist+Diffuser',
    colours: ['#ffffff', '#8B4513', '#1a1a1a'],
    description: 'Ultrasonic aroma diffuser with LED mood lighting and auto shut-off. Create a relaxing atmosphere in your home with essential oils. 300ml capacity.',
  },
  {
    id: 14,
    name: 'Hollow Out Slides',
    category: 'fashion',
    price: 120,
    oldPrice: 180,
    discount: 33,
    badge: 'new',
    badgeText: '✨ New',
    rating: 4.5,
    reviews: 78,
    image: 'https://i.ibb.co/TMM5CsJW/Crocs-for-men.avif',
    alt: 'Hollow Out Slides — stylish and comfortable footwear',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Hollow+Out+Slides',
    colours: ['#1a1a1a', '#4169E1', '#FCD116'],
    description: 'Ultra-lightweight EVA slides with breathable design. Perfect for casual wear, beach trips, or relaxing at home. Comfortable all-day wear.',
  },
  {
    id: 15,
    name: 'Shea Glow Skincare Set',
    category: 'beauty',
    price: 180,
    oldPrice: 260,
    discount: 31,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=85&auto=format&fit=crop',
    alt: 'Shea Glow Skincare Set',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Skincare',
    description: 'Complete skincare set with shea butter-infused products. Cleanser, toner, moisturizer, and face mask. Perfect for Ghana\'s climate. Glowing skin guaranteed.',
  },
  {
    id: 16,
    name: 'Lagos Leather Backpack',
    category: 'accessories',
    price: 320,
    oldPrice: 450,
    discount: 29,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=85&auto=format&fit=crop',
    alt: 'Lagos Leather Backpack',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Backpack',
    colours: ['#8B4513', '#1a1a1a', '#c0c0c0'],
    description: 'Premium leather backpack with laptop compartment, USB charging port, and anti-theft design. Perfect for students, travelers, and professionals.',
  },
  {
    id: 17,
    name: 'Hair Clipper',
    category: 'beauty',
    price: 1200,
    oldPrice: 1600,
    discount: 25,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 203,
    image: 'https://i.ibb.co/RTv80H10/hair-clipper.avif',
    alt: 'Hair Clipper — professional grade clipper for a clean cut',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Hair+Clipper',
    colours: ['#1a1a1a', '#c0c0c0'],
    description: 'Professional-grade hair clipper with ceramic blades, 4-hour battery, and 8 guide combs. Barber-quality cuts at home. Save money on haircuts.',
  },
  {
    id: 18,
    name: 'Smart LED Desk Lamp',
    category: 'home',
    price: 145,
    oldPrice: 210,
    discount: 31,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 156,
    image: 'https://i.ibb.co/yBKvh8yj/Smart-LED-Desk-Lamp.avif',
    alt: 'Smart LED Desk Lamp — perfect for your workspace!',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Smart+LED+Lamp',
    colours: ['#ffffff', '#1a1a1a'],
    description: 'Touch-control LED desk lamp with 3 brightness levels and USB charging port. Eye-friendly lighting perfect for studying, reading, or working late.',
  },
  {
    id: 19,
    name: 'British Retro Classic Shoes',
    category: 'fashion',
    price: 95,
    oldPrice: 140,
    discount: 32,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 5,
    reviews: 421,
    image: 'https://i.ibb.co/k20f9TRd/Clasic-Church-Shoe.avif',
    alt: 'British Retro Classic Shoes — timeless style for every occasion',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Classic+Shoes',
    colours: ['#1a1a1a', '#8B4513'],
    description: 'Timeless Oxford-style shoes with premium leather finish. Perfect for church, weddings, and formal occasions. Classic British elegance meets African style.',
  },
  {
    id: 20,
    name: 'Tripod Ring Light',
    category: 'tech',
    price: 380,
    oldPrice: 520,
    discount: 27,
    badge: 'new',
    badgeText: '✨ New',
    rating: 4.5,
    reviews: 88,
    image: 'https://i.ibb.co/FLbtf1K7/Tripod-ring-light.avif',
    alt: 'Tripod Ring Light — perfect for content creators and selfies',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Tripod+Ring+Light',
    colours: ['#1a1a1a', '#ffffff'],
    description: '12-inch LED ring light with adjustable tripod, phone holder, and 3 lighting modes. Essential for TikTok creators, YouTubers, and selfie lovers.',
  },
  {
    id: 21,
    name: 'Denim Shorts For Men',
    category: 'fashion',
    price: 120,
    oldPrice: 180,
    discount: 33,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 287,
    image: 'https://i.ibb.co/GftwFndW/Denim-shorts.avif',
    alt: 'Denim Shorts For Men — stylish and comfortable everyday wear',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Denim+Shorts',
    colours: ['#4169E1', '#1a1a1a'],
    description: 'Premium denim shorts with comfortable fit and modern style. Perfect for Ghana\'s hot weather. Multiple pockets for convenience.',
  },
  {
    id: 22,
    name: 'JBL Pro Sound Box',
    category: 'audio',
    price: 680,
    oldPrice: 950,
    discount: 28,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 167,
    image: 'https://i.ibb.co/vvrCcwYf/Jbl-pro.avif',
    alt: 'JBL Pro Sound Box — powerful bass and crystal clear sound',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=JBL+Pro+Sound+Box',
    colours: ['#1a1a1a', '#CE1126', '#4169E1'],
    description: 'Premium JBL speaker with deep bass, 20-hour battery, and PartyBoost pairing. Turn any gathering into an unforgettable party.',
  },
  {
    id: 23,
    name: 'USB Rechargeable Mini Fan',
    category: 'home',
    price: 85,
    oldPrice: 130,
    discount: 35,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 445,
    image: 'https://i.ibb.co/Jjk06pWW/Rechargeable-fan.avif',
    alt: 'USB Rechargeable Portable Mini Fan — perfect for Ghana heat!',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Mini+Fan',
    colours: ['#ffffff', '#4169E1', '#f97316'],
    description: 'Portable rechargeable fan with 3 speed settings and 6-hour battery. Essential for Ghana\'s hot weather. Lightweight and whisper-quiet.',
  },
  {
    id: 24,
    name: 'Mens Graphic T-Shirt',
    category: 'fashion',
    price: 95,
    oldPrice: 140,
    discount: 32,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 119,
    image: 'https://i.ibb.co/VYPC0Fnb/Mens-Graphic-T-shirt.avif',
    alt: 'Mens Graphic T-Shirt — stylish and comfortable everyday wear',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Mens+Graphic+Tshirt',
    colours: ['#1a1a1a', '#ffffff', '#006B3F'],
    description: '100% cotton graphic tee with bold African-inspired designs. Soft, breathable, and perfect for casual wear. Express yourself with style.',
  },
  {
    id: 25,
    name: 'Plaid Short Sleeve',
    category: 'fashion',
    price: 45,
    oldPrice: 70,
    discount: 36,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 532,
    image: 'https://i.ibb.co/nq8rVC90/Plaid-short-sleeve.avif',
    alt: 'Plaid Short Sleeve — stylish and comfortable everyday wear',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Plaid+Short+Sleeve',
    colours: ['#4169E1', '#CE1126', '#006B3F'],
    description: 'Classic plaid short-sleeve shirt in breathable cotton. Perfect for casual outings and everyday wear. Available in multiple color combinations.',
  },
  {
    id: 26,
    name: 'Mini Portable Blender',
    category: 'home',
    price: 195,
    oldPrice: 280,
    discount: 30,
    badge: 'sale',
    badgeText: '💥 Sale',
    rating: 4.5,
    reviews: 223,
    image: 'https://i.ibb.co/Fkbv8hqV/Portable-blender.avif',
    alt: 'Mini Portable Blender — perfect for smoothies on the go!',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Portable+Blender',
    colours: ['#ffffff', '#f97316', '#4169E1'],
    description: 'USB rechargeable portable blender with 6 blades. Make fresh smoothies anywhere — gym, office, or travel. 380ml capacity and easy to clean.',
  },
  {
    id: 27,
    name: 'Stainless Steel Vacuum Flask',
    category: 'home',
    price: 75,
    oldPrice: 110,
    discount: 32,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 189,
    image: 'https://i.ibb.co/kstyBWJN/Stainless-steel-vacuum-flask.avif',
    alt: 'Stainless Steel Vacuum Flask — keeps drinks hot or cold for hours',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Vacuum+Flask',
    colours: ['#c0c0c0', '#1a1a1a', '#4169E1'],
    description: 'Double-wall insulated flask keeps drinks hot for 12 hours or cold for 24 hours. Leak-proof design perfect for work, gym, or travel. 500ml capacity.',
  },
  {
    id: 28,
    name: 'Mini Action Camera 4K',
    category: 'tech',
    price: 750,
    oldPrice: 1050,
    discount: 29,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 4.5,
    reviews: 98,
    image: 'https://i.ibb.co/Lh1dtqqr/Mini-Action-Camera-4-K.avif',
    alt: 'Mini Action Camera 4K — capture every adventure in stunning detail',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Action+Camera',
    colours: ['#1a1a1a', '#c0c0c0'],
    description: '4K Ultra HD action camera with waterproof case, Wi-Fi connectivity, and wide-angle lens. Capture your adventures in stunning quality.',
  },
  {
    id: 29,
    name: 'Melanin Beauty Makeup Kit',
    category: 'beauty',
    price: 250,
    oldPrice: 360,
    discount: 31,
    badge: 'hot',
    badgeText: '🔥 Hot',
    rating: 5,
    reviews: 376,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=85&auto=format&fit=crop',
    alt: 'Melanin Beauty Makeup Kit',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Makeup+Kit',
    description: 'Complete makeup kit designed for melanin-rich skin tones. Includes foundation, concealer, eyeshadow palette, and brushes. Celebrate your natural beauty.',
  },
  {
    id: 30,
    name: 'Mens Elastic Boxer',
    category: 'fashion',
    price: 65,
    oldPrice: 95,
    discount: 32,
    badge: 'new',
    badgeText: '✨ New',
    rating: 5,
    reviews: 284,
    image: 'https://i.ibb.co/8gZyw9B1/Mens-Elastic-Boxer.jpg',
    alt: 'Mens Elastic Boxer — comfortable and stylish everyday wear',
    fallback: 'https://placehold.co/500x500/006B3F/fff?text=Mens+Boxer',
    colours: ['#1a1a1a', '#4169E1', '#CE1126'],
    description: 'Premium cotton-blend boxers with elastic waistband. Ultra-comfortable for all-day wear. Pack of 3 in assorted colors. Breathable and durable.',
  },
];

/* Flash sale products */
const FLASH_PRODUCTS = [
  {
    id: 201,
    name: 'ZazuTech Smartwatch',
    price: 468,
    oldPrice: 780,
    discount: 40,
    soldPercent: 72,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=85&auto=format&fit=crop',
    alt: 'ZazuTech Smartwatch',
    fallback: 'https://placehold.co/400x400/006B3F/fff?text=Smartwatch',
  },
  {
    id: 202,
    name: 'Air Force Sneaker',
    price: 254,
    oldPrice: 390,
    discount: 35,
    soldPercent: 85,
    image: 'https://i.ibb.co/ZRzwS8Fp/Air-force-1-sneaker.webp',
    alt: 'Air Force Sneaker',
    fallback: 'https://placehold.co/400x400/CE1126/fff?text=Sneaker',
  },
  {
    id: 203,
    name: 'BoomBox Speaker',
    price: 231,
    oldPrice: 420,
    discount: 45,
    soldPercent: 91,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=85&auto=format&fit=crop',
    alt: 'BoomBox Speaker',
    fallback: 'https://placehold.co/400x400/FCD116/000?text=Speaker',
  },
  {
    id: 204,
    name: 'Chrome Wave Shades',
    price: 109,
    oldPrice: 155,
    discount: 30,
    soldPercent: 63,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=85&auto=format&fit=crop',
    alt: 'Chrome Wave Sunglasses',
    fallback: 'https://placehold.co/400x400/006B3F/fff?text=Shades',
  },
];

/* =====================================================
   3. STATE
   ===================================================== */
const state = {
  cart: [],
  wishlist: new Set(),
  visibleProducts: CONFIG.productsPerPage,
  currentFilter: 'all',
  selectedNetwork: 'MTN MoMo',
  isCartOpen: false,
  isModalOpen: false,
  currentModalProduct: null,
  isCheckout: false,
};

/* =====================================================
   4. PDP STATE
   ===================================================== */
const pdpState = {
  currentProduct: null,
  quantity: 1,
  selectedColour: null,
};

/* Colour name lookup */
const COLOUR_NAMES = {
  '#1a1a1a': 'Black',
  '#ffffff': 'White',
  '#CE1126': 'Red',
  '#006B3F': 'Green',
  '#FCD116': 'Gold',
  '#4169E1': 'Blue',
  '#c0c0c0': 'Silver',
  '#FFD700': 'Gold',
  '#8B4513': 'Brown',
  '#f97316': 'Orange',
};

function getColourName(hex) {
  return COLOUR_NAMES[hex] || 'Custom';
}

/* =====================================================
   5. DOM HELPERS
   ===================================================== */
const $ = (id) => document.getElementById(id);
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);
const $q = (sel, ctx = document) => ctx.querySelector(sel);

/* =====================================================
   6. STORAGE HELPERS
   ===================================================== */
const storage = {
  get(key) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable — fail silently */
    }
  },
};

/* =====================================================
   7. PAGE LOADER
   ===================================================== */
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = $('page-loader');
    if (loader) loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, CONFIG.loaderDelay);
});

/* =====================================================
   8. INIT
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c ⚡ ZAZU v5.0 ',
    'background:#006B3F;color:#FCD116;font-size:14px;font-weight:900;padding:8px 16px;border-radius:8px;'
  );

  loadPersistedState();
  renderFlashSale();
  renderProducts();
  initDarkMode();
  initHeader();
  initMobileMenu();
  initSearch();
  initCartSidebar();
  initModalControls();
  initCategoryFilter();
  initScrollReveal();
  initStatsCounter();
  initLoadMore();
  initWishlist();
  initMomoInput();
  initNetworkButtons();
  initFooterYear();
  initPDP(); // ← CONNECTED!
  startCountdown();
  showChatTooltip();
  updateCartUI();
  updateWishlistFab();

  /* Mobile — close cart when navigating */
  $$('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      if (state.isCartOpen) closeCart();
    });
  });
});

/* =====================================================
   9. PERSIST & LOAD STATE
   ===================================================== */
function loadPersistedState() {
  const savedCart = storage.get(CONFIG.storageKeys.cart);
  if (Array.isArray(savedCart)) state.cart = savedCart;
  const savedWishlist = storage.get(CONFIG.storageKeys.wishlist);
  if (Array.isArray(savedWishlist)) state.wishlist = new Set(savedWishlist);
}

function persistCart() {
  storage.set(CONFIG.storageKeys.cart, state.cart);
}

function persistWishlist() {
  storage.set(CONFIG.storageKeys.wishlist, [...state.wishlist]);
}

/* =====================================================
   10. SCROLL LOCK
   ===================================================== */
function lockScroll() {
  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.dataset.scrollY = scrollY;
}

function unlockScroll() {
  const scrollY = document.body.dataset.scrollY || '0';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY, 10));
}

/* =====================================================
   11. RENDER HELPERS — Star rating
   ===================================================== */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  let html = '';
  for (let i = 0; i < full; i++) {
    html += '<i class="fa-solid fa-star" aria-hidden="true"></i>';
  }
  if (half) html += '<i class="fa-solid fa-star-half-stroke" aria-hidden="true"></i>';
  for (let i = 0; i < empty; i++) {
    html += '<i class="fa-regular fa-star" aria-hidden="true"></i>';
  }
  return html;
}

/* =====================================================
   12. RENDER FLASH SALE
   ===================================================== */
function renderFlashSale() {
  const grid = $('flashsale-grid');
  if (!grid) return;
  grid.innerHTML = FLASH_PRODUCTS.map((p) => `
    <article class="flash-card reveal" data-id="${p.id}">
      <div class="flash-card__img">
        <span class="flash-off">-${p.discount}%</span>
        <img
          src="${p.image}"
          alt="${p.alt}"
          loading="lazy"
          onerror="this.src='${p.fallback || 'https://placehold.co/400x400/006B3F/fff?text=Product'}'"
        />
      </div>
      <div class="flash-card__body">
        <p class="flash-card__name">${p.name}</p>
        <div class="flash-card__prices">
          <span class="flash-new">GH₵ ${p.price.toLocaleString()}</span>
          <span class="flash-old">GH₵ ${p.oldPrice.toLocaleString()}</span>
        </div>
        <div class="flash-progress-wrap">
          <div
            class="flash-progress"
            style="width:${p.soldPercent}%"
            role="progressbar"
            aria-valuenow="${p.soldPercent}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="${p.soldPercent}% sold"
          ></div>
        </div>
        <p class="flash-sold">🔥 ${p.soldPercent}% sold</p>
        <button
          class="btn btn--flash"
          data-action="flash-buy"
          data-id="${p.id}"
          data-name="${p.name} — Flash Deal"
          data-price="${p.price}"
        >
          <i class="fa-solid fa-bolt" aria-hidden="true"></i> Buy Now
        </button>
      </div>
    </article>
  `).join('');
}

/* =====================================================
   13. RENDER PRODUCTS
   ===================================================== */
function renderProducts(filter = 'all', searchQuery = '') {
  const grid = $('products-grid');
  if (!grid) return;

  let filtered = PRODUCTS.filter((p) => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const total = filtered.length;
  const visible = filtered.slice(0, state.visibleProducts);

  const loadMoreBtn = $('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display =
      state.visibleProducts >= total ? 'none' : 'inline-flex';
  }

  const status = $('products-status');
  if (status) {
    status.textContent = total === 0
      ? 'No products found.'
      : `Showing ${visible.length} of ${total} products.`;
  }

  if (total === 0) {
    grid.innerHTML = `
      <div class="no-products-msg">
        <i class="fa-solid fa-box-open" aria-hidden="true"></i>
        <p>No products found${searchQuery ? ` for "${searchQuery}"` : ''} — try a different filter! 👀</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = visible.map((p) => {
    const isWishlisted = state.wishlist.has(p.id);
    const badgeClass =
      p.badge === 'hot' ? 'p-badge--hot' :
      p.badge === 'new' ? 'p-badge--new' : 'p-badge--sale';
    return `
      <article
        class="product-card reveal"
        data-category="${p.category}"
        data-id="${p.id}"
      >
        <div 
          class="product-card__img-wrap"
          role="button"
          tabindex="0"
          data-action="view-product"
          data-id="${p.id}"
          aria-label="View details for ${p.name}"
          style="cursor: pointer;"
        >
          <span class="p-badge ${badgeClass}" aria-label="${p.badgeText}">
            ${p.badgeText}
          </span>
          <button
            class="wishlist-btn ${isWishlisted ? 'active' : ''}"
            data-action="wishlist"
            data-id="${p.id}"
            data-name="${p.name}"
            aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}: ${p.name}"
            aria-pressed="${isWishlisted}"
          >
            <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart" aria-hidden="true"></i>
          </button>
          <img
            src="${p.image}"
            alt="${p.alt}"
            class="product-card__img"
            loading="lazy"
            width="500"
            height="500"
            onerror="this.src='${p.fallback || 'https://placehold.co/500x500/006B3F/fff?text=' + encodeURIComponent(p.name)}'"
          />
          <div class="product-card__hover">
            <button
              class="quick-add-btn"
              data-action="add-to-cart"
              data-id="${p.id}"
              data-name="${p.name}"
              data-price="${p.price}"
              aria-label="Quick add ${p.name} to cart"
            >
              <i class="fa-solid fa-bag-shopping" aria-hidden="true"></i> Quick Add
            </button>
          </div>
        </div>
        <div class="product-card__body">
          <span class="p-category">${p.category}</span>
          <button
            class="p-title-btn"
            data-action="view-product"
            data-id="${p.id}"
            aria-label="View details for ${p.name}"
          >
            <h3 class="p-title">${p.name}</h3>
          </button>
          <div class="p-stars" aria-label="${p.rating} out of 5 stars">
            ${renderStars(p.rating)}
            <span>(${p.reviews.toLocaleString()})</span>
          </div>
          <div class="p-pricing">
            <span class="p-price">GH₵ ${p.price.toLocaleString()}</span>
            <span class="p-old">GH₵ ${p.oldPrice.toLocaleString()}</span>
            <span class="p-off">-${p.discount}%</span>
          </div>
          <button
            class="btn btn--buy"
            data-action="momo-pay"
            data-id="${p.id}"
            data-name="${p.name}"
            data-price="${p.price}"
            aria-label="Pay for ${p.name} with MoMo — GH₵ ${p.price.toLocaleString()}"
          >
            <i class="fa-solid fa-mobile-screen-button" aria-hidden="true"></i> Pay with MoMo
          </button>
        </div>
      </article>
    `;
  }).join('');

  initScrollReveal();
}

/* =====================================================
   14. EVENT DELEGATION
   ===================================================== */
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;
  const { id, name, price } = target.dataset;
  switch (action) {
    case 'add-to-cart':
      addToCart(Number(id), name, Number(price));
      break;
    case 'flash-buy':
      addToCart(Number(id), name, Number(price));
      break;
    case 'momo-pay':
      openMomoModal(name, Number(price), false);
      break;
    case 'wishlist':
      toggleWishlist(Number(id), name, target);
      break;
    case 'view-product': // ← NOW CONNECTED!
      openPDP(Number(id));
      break;
    case 'cart-qty-increase':
      changeQty(Number(id), 1);
      break;
    case 'cart-qty-decrease':
      changeQty(Number(id), -1);
      break;
    case 'cart-remove':
      removeFromCart(Number(id));
      break;
    case 'network-select':
      selectNetwork(target.dataset.network, target);
      break;
  }
});

/* =====================================================
   15. CART
   ===================================================== */
function addToCart(id, name, price) {
  const existing = state.cart.find((x) => x.id === id);
  if (existing) {
    existing.quantity += 1;
    showToast(`🛒 ${name} — qty updated!`, '🛒');
  } else {
    const product = PRODUCTS.find((p) => p.id === id) ||
      FLASH_PRODUCTS.find((p) => p.id === id);
    state.cart.push({
      id,
      name,
      price,
      quantity: 1,
      image: product?.image || null,
    });
    showToast(`✅ ${name} added to cart!`, '✅');
  }
  persistCart();
  updateCartUI();
  bounceCartBtn();
}

function changeQty(id, delta) {
  const item = state.cart.find((x) => x.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }
  persistCart();
  updateCartUI();
}

function removeFromCart(id) {
  const item = state.cart.find((x) => x.id === id);
  state.cart = state.cart.filter((x) => x.id !== id);
  persistCart();
  updateCartUI();
  if (item) showToast(`🗑️ ${item.name} removed`, '🗑️');
}

function clearCart() {
  state.cart = [];
  persistCart();
  updateCartUI();
}

/* =====================================================
   16. CART UI
   ===================================================== */
function updateCartUI() {
  updateCartCount();
  renderCartItems();
  updateDeliveryBar();
}

function updateCartCount() {
  const total = state.cart.reduce((s, x) => s + x.quantity, 0);
  const countEl = $('cart-count');
  const headerCount = $('cart-header-count');
  const cartBtn = $('cart-btn');
  if (countEl) {
    countEl.textContent = total;
    countEl.classList.toggle('visible', total > 0);
  }
  if (headerCount) {
    headerCount.textContent = `${total} item${total !== 1 ? 's' : ''}`;
  }
  if (cartBtn) {
    cartBtn.setAttribute(
      'aria-label',
      `View cart — ${total} item${total !== 1 ? 's' : ''}`
    );
  }
}

function renderCartItems() {
  const wrap = $('cart-items');
  const footer = $('cart-footer');
  const empty = $('cart-empty');
  if (!wrap) return;
  $$('.cart-item', wrap).forEach((el) => el.remove());
  if (state.cart.length === 0) {
    if (empty) empty.style.display = 'flex';
    if (footer) footer.style.display = 'none';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (footer) footer.style.display = 'flex';
  const subtotal = state.cart.reduce(
    (s, x) => s + x.price * x.quantity, 0
  );
  const subtotalEl = $('cart-subtotal');
  const totalEl = $('cart-total');
  if (subtotalEl) subtotalEl.textContent = `GH₵ ${subtotal.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `GH₵ ${subtotal.toLocaleString()}`;
  const fragment = document.createDocumentFragment();
  state.cart.forEach((item) => {
    const el = document.createElement('div');
    el.classList.add('cart-item');
    el.innerHTML = `
      <div class="cart-item__thumb">
        ${item.image
          ? `<img src="${item.image}" alt="${item.name}" loading="lazy" />`
          : '🛍️'
        }
      </div>
      <div class="cart-item__info">
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__price">
          GH₵ ${(item.price * item.quantity).toLocaleString()}
        </p>
        <div class="cart-item__qty">
          <button
            class="qty-btn"
            data-action="cart-qty-decrease"
            data-id="${item.id}"
            aria-label="Decrease quantity of ${item.name}"
          >
            <i class="fa-solid fa-minus" aria-hidden="true"></i>
          </button>
          <span class="qty-num" aria-label="Quantity: ${item.quantity}">
            ${item.quantity}
          </span>
          <button
            class="qty-btn"
            data-action="cart-qty-increase"
            data-id="${item.id}"
            aria-label="Increase quantity of ${item.name}"
          >
            <i class="fa-solid fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <button
        class="cart-item__rm"
        data-action="cart-remove"
        data-id="${item.id}"
        aria-label="Remove ${item.name} from cart"
      >
        <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
      </button>
    `;
    fragment.appendChild(el);
  });
  wrap.insertBefore(fragment, empty);
}

function updateDeliveryBar() {
  const subtotal = state.cart.reduce(
    (s, x) => s + x.price * x.quantity, 0
  );
  const pct = Math.min(
    (subtotal / CONFIG.freeDeliveryThreshold) * 100, 100
  );
  const fill = $('cart-delivery-fill');
  const txt = $('cart-delivery-text');
  const bar = $('delivery-progress-bar');
  if (fill) fill.style.width = `${pct}%`;
  if (bar) bar.setAttribute('aria-valuenow', Math.round(pct));
  if (txt) {
    if (subtotal >= CONFIG.freeDeliveryThreshold) {
      txt.textContent = '🎉 FREE delivery unlocked! Yɛ da wo ase!';
      txt.style.color = '#059669';
    } else {
      const remaining = CONFIG.freeDeliveryThreshold - subtotal;
      txt.textContent = `Add GH₵ ${remaining.toLocaleString()} more for free delivery! 🚚`;
      txt.style.color = '';
    }
  }
}

/* =====================================================
   17. CART SIDEBAR
   ===================================================== */
function initCartSidebar() {
  const cartBtn = $('cart-btn');
  const closeBtn = $('cart-close-btn');
  const overlay = $('cart-overlay');
  const shopLink = $('cart-shop-link');
  const momoBtn = $('momo-checkout-btn');
  const waBtn = $('whatsapp-order-btn');
  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);
  if (shopLink) shopLink.addEventListener('click', closeCart);
  if (momoBtn) {
    momoBtn.addEventListener('click', () => {
      const subtotal = state.cart.reduce(
        (s, x) => s + x.price * x.quantity, 0
      );
      if (!subtotal) {
        showToast('⚠️ Your cart is empty!', '⚠️');
        return;
      }
      closeCart();
      const itemCount = state.cart.length;
      openMomoModal(
        `Your Cart (${itemCount} item${itemCount > 1 ? 's' : ''})`,
        subtotal,
        true
      );
    });
  }
  if (waBtn) waBtn.addEventListener('click', orderViaWhatsApp);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.isModalOpen) closeModal();
      else if (state.isCartOpen) closeCart();
      else if (pdpState.currentProduct) closePDP();
    }
  });
}

function openCart() {
  const sidebar = $('cart-sidebar');
  const overlay = $('cart-overlay');
  if (!sidebar) return;
  sidebar.classList.add('open');
  sidebar.setAttribute('aria-hidden', 'false');
  if (overlay) {
    overlay.classList.add('visible');
    overlay.setAttribute('aria-hidden', 'false');
  }
  lockScroll();
  state.isCartOpen = true;
  const closeBtn = $('cart-close-btn');
  if (closeBtn) setTimeout(() => closeBtn.focus(), 100);
}

function closeCart() {
  const sidebar = $('cart-sidebar');
  const overlay = $('cart-overlay');
  if (!sidebar) return;
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  if (overlay) {
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
  }
  unlockScroll();
  state.isCartOpen = false;
  const cartBtn = $('cart-btn');
  if (cartBtn) cartBtn.focus();
}

function bounceCartBtn() {
  const btn = $('cart-btn');
  if (!btn) return;
  btn.style.transform = 'scale(1.35)';
  setTimeout(() => { btn.style.transform = ''; }, 200);
}

/* =====================================================
   18. WHATSAPP ORDER
   ===================================================== */
function orderViaWhatsApp() {
  if (!state.cart.length) {
    showToast('⚠️ Cart is empty!', '⚠️');
    return;
  }
  const lines = state.cart.map(
    (x) => `• ${x.name} x${x.quantity} = GH₵ ${(x.price * x.quantity).toLocaleString()}`
  );
  const total = state.cart.reduce(
    (s, x) => s + x.price * x.quantity, 0
  );
  const msg =
    `Hi Zazu! 👋 I want to order:\n\n` +
    `${lines.join('\n')}\n\n` +
    `Total: GH₵ ${total.toLocaleString()}\n\n` +
    `Please confirm. Medaase! 🙏`;
  window.open(
    `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,
    '_blank',
    'noopener,noreferrer'
  );
}

/* =====================================================
   19. MOMO MODAL
   ===================================================== */
function openMomoModal(name, price, isCheckout = false) {
  state.currentModalProduct = { name, price };
  state.isCheckout = isCheckout;
  const productEl = $('modal-product-name');
  const priceEl = $('modal-price');
  const input = $('momo-number');
  if (productEl) productEl.textContent = name;
  if (priceEl) priceEl.textContent = `GH₵ ${price.toLocaleString()}`;
  if (input) {
    input.value = '';
    input.classList.remove('error');
    input.style.borderColor = '';
  }
  $$('.net-btn').forEach((b) => b.classList.remove('active'));
  const mtnBtn = $q('.net-btn--mtn');
  if (mtnBtn) mtnBtn.classList.add('active');
  state.selectedNetwork = 'MTN MoMo';
  const overlay = $('modal-overlay');
  if (overlay) {
    overlay.classList.add('visible');
    overlay.setAttribute('aria-hidden', 'false');
  }
  lockScroll();
  state.isModalOpen = true;
  const input2 = $('momo-number');
  if (input2) setTimeout(() => input2.focus(), 350);
}

function closeModal() {
  const overlay = $('modal-overlay');
  if (overlay) {
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
  }
  unlockScroll();
  state.isModalOpen = false;
  state.currentModalProduct = null;
}

function selectNetwork(networkName, btn) {
  $$('.net-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  state.selectedNetwork = networkName;
}

function confirmMoMoPayment() {
  const input = $('momo-number');
  if (!input) return;
  const val = input.value.trim();
  if (!/^\d{10}$/.test(val)) {
    input.classList.add('error');
    input.classList.remove('shake');
    void input.offsetWidth;
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
    showToast('⚠️ Enter a valid 10-digit number', '⚠️');
    input.focus();
    return;
  }
  input.classList.remove('error');
  const btn = $('confirm-pay-btn');
  if (!btn) return;
  const origHTML = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Processing...';
  btn.disabled = true;
  setTimeout(() => {
    closeModal();
    btn.innerHTML = origHTML;
    btn.disabled = false;
    showToast(
      `🎉 ${state.selectedNetwork} prompt sent! Check your phone.`,
      '🎉'
    );
    if (state.isCheckout) clearCart();
    state.isCheckout = false;
  }, 1800);
}

function initModalControls() {
  const closeBtn = $('modal-close');
  const overlay = $('modal-overlay');
  const confirmBtn = $('confirm-pay-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  if (confirmBtn) confirmBtn.addEventListener('click', confirmMoMoPayment);
}

function initNetworkButtons() {
  $$('.net-btn').forEach((btn) => {
    btn.dataset.action = 'network-select';
  });
}

/* =====================================================
   20. MOMO INPUT
   ===================================================== */
function initMomoInput() {
  const inp = $('momo-number');
  if (!inp) return;
  inp.addEventListener('input', () => {
    inp.value = inp.value.replace(/\D/g, '').slice(0, 10);
    if (inp.value.length === 10) {
      inp.classList.remove('error');
      inp.style.borderColor = '#006B3F';
    } else {
      inp.style.borderColor = '';
    }
  });
}

/* =====================================================
   21. SEARCH — debounced
   ===================================================== */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function initSearch() {
  const btn = $('search-btn');
  const bar = $('search-bar');
  const inp = $('search-input');
  const closeBtn = $('search-close');
  if (!btn || !bar || !inp) return;
  btn.addEventListener('click', () => {
    const isOpen = bar.classList.toggle('open');
    bar.setAttribute('aria-hidden', String(!isOpen));
    btn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) setTimeout(() => inp.focus(), 200);
  });
  closeBtn?.addEventListener('click', () => {
    bar.classList.remove('open');
    bar.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    inp.value = '';
    state.visibleProducts = CONFIG.productsPerPage;
    renderProducts(state.currentFilter);
  });
  const handleSearch = debounce((query) => {
    state.visibleProducts = CONFIG.productsPerPage;
    renderProducts(state.currentFilter, query);
  }, 300);
  inp.addEventListener('input', () => handleSearch(inp.value));
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      bar.classList.remove('open');
      bar.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      inp.value = '';
      state.visibleProducts = CONFIG.productsPerPage;
      renderProducts(state.currentFilter);
    }
  });
}

/* =====================================================
   22. HEADER SCROLL
   ===================================================== */
function initHeader() {
  const header = $('header');
  if (!header) return;
  window.addEventListener(
    'scroll',
    debounce(() => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, 50),
    { passive: true }
  );
}

/* =====================================================
   23. MOBILE MENU
   ===================================================== */
function initMobileMenu() {
  const btn = $('hamburger-btn');
  const menu = $('nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('mobile-open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
  $$('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('mobile-open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    });
  });
}

/* =====================================================
   24. CATEGORY FILTER
   ===================================================== */
function initCategoryFilter() {
  const pills = $$('.cat-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => {
        p.classList.remove('active');
        p.removeAttribute('aria-current');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-current', 'true');
      state.currentFilter = pill.dataset.filter;
      state.visibleProducts = CONFIG.productsPerPage;
      renderProducts(state.currentFilter);
    });
  });
}

/* =====================================================
   25. LOAD MORE
   ===================================================== */
function initLoadMore() {
  const btn = $('load-more-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const prevCount = state.visibleProducts;
    state.visibleProducts += CONFIG.productsPerPage;
    btn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Loading...';
    btn.disabled = true;
    setTimeout(() => {
      renderProducts(state.currentFilter);
      btn.innerHTML =
        '<i class="fa-solid fa-arrow-rotate-right" aria-hidden="true"></i> Load More Products';
      btn.disabled = false;
      const allCards = $$('.product-card');
      const firstNew = allCards[prevCount];
      if (firstNew) {
        firstNew.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        firstNew.focus({ preventScroll: true });
      }
      const total = PRODUCTS.filter(
        (p) => state.currentFilter === 'all' ||
          p.category === state.currentFilter
      ).length;
      if (state.visibleProducts >= total) {
        showToast('🎉 You\'ve seen all products! New drops every week.', '🎉');
      }
    }, 600);
  });
}

/* =====================================================
   26. WISHLIST
   ===================================================== */
function initWishlist() {
  const fab = $('wishlist-fab');
  if (fab) {
    fab.addEventListener('click', () => {
      showToast(
        `❤️ ${state.wishlist.size} item${state.wishlist.size !== 1 ? 's' : ''} in your wishlist!`,
        '❤️'
      );
    });
  }
}

function toggleWishlist(id, name, btn) {
  const isWishlisted = state.wishlist.has(id);
  if (isWishlisted) {
    state.wishlist.delete(id);
    showToast(`💔 ${name} removed from wishlist`, '💔');
  } else {
    state.wishlist.add(id);
    showToast(`❤️ ${name} saved to wishlist!`, '❤️');
  }
  persistWishlist();
  updateWishlistFab();
  const icon = btn.querySelector('i');
  const nowWishlisted = state.wishlist.has(id);
  btn.classList.toggle('active', nowWishlisted);
  btn.setAttribute('aria-pressed', String(nowWishlisted));
  btn.setAttribute(
    'aria-label',
    `${nowWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}: ${name}`
  );
  if (icon) {
    icon.className = `fa-${nowWishlisted ? 'solid' : 'regular'} fa-heart`;
    icon.setAttribute('aria-hidden', 'true');
  }
}

function updateWishlistFab() {
  const fab = $('wishlist-fab');
  const count = $('wishlist-count');
  if (!fab) return;
  const total = state.wishlist.size;
  fab.style.display = total > 0 ? 'flex' : 'none';
  fab.setAttribute(
    'aria-label',
    `Wishlist — ${total} item${total !== 1 ? 's' : ''}`
  );
  if (count) count.textContent = total;
}

/* =====================================================
   27. DARK MODE
   ===================================================== */
function initDarkMode() {
  const btn = $('theme-toggle');
  const sun = $('icon-sun');
  const moon = $('icon-moon');
  const html = document.documentElement;
  const saved = storage.get(CONFIG.storageKeys.theme) || 'light';
  applyTheme(saved);
  btn?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storage.set(CONFIG.storageKeys.theme, next);
    showToast(
      next === 'dark' ? '🌙 Dark mode on!' : '☀️ Light mode on!',
      next === 'dark' ? '🌙' : '☀️'
    );
  });
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (sun) sun.style.display = theme === 'dark' ? 'none' : 'block';
    if (moon) moon.style.display = theme === 'dark' ? 'block' : 'none';
    btn?.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
}

/* =====================================================
   28. COUNTDOWN TIMER
   ===================================================== */
function startCountdown() {
  const storageKey = 'zazuCountdownEnd';
  let endTime = storage.get(storageKey);
  if (!endTime || endTime < Date.now()) {
    endTime = Date.now() + CONFIG.countdownHours * 60 * 60 * 1000;
    storage.set(storageKey, endTime);
  }
  const els = {
    hh: $('h-hours'),
    hm: $('h-mins'),
    hs: $('h-secs'),
    fh: $('fs-hours'),
    fm: $('fs-mins'),
    fs: $('fs-secs'),
  };
  function pad(n) {
    return String(n).padStart(2, '0');
  }
  function tick() {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      endTime = Date.now() + CONFIG.countdownHours * 60 * 60 * 1000;
      storage.set(storageKey, endTime);
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (els.hh) els.hh.textContent = pad(h);
    if (els.hm) els.hm.textContent = pad(m);
    if (els.hs) els.hs.textContent = pad(s);
    if (els.fh) els.fh.textContent = pad(h);
    if (els.fm) els.fm.textContent = pad(m);
    if (els.fs) els.fs.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);
}

/* =====================================================
   29. SCROLL REVEAL
   ===================================================== */
function initScrollReveal() {
  const items = $$('.reveal:not(.revealed)');
  if (!items.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );
  items.forEach((el) => obs.observe(el));
}

/* =====================================================
   30. STATS COUNTER
   ===================================================== */
function initStatsCounter() {
  const nums = $$('.about-stat__num');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((el) => obs.observe(el));
}

function countUp(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = target.toLocaleString();
    return;
  }
  const duration = 1500;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString();
    }
  }
  requestAnimationFrame(step);
}

/* =====================================================
   31. TOAST
   ===================================================== */
let toastTimer = null;

function showToast(msg, icon = '✅') {
  const toast = $('toast');
  const msgEl = $('toast-message');
  const iconEl = $('toast-icon');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  if (iconEl) iconEl.textContent = icon;
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, CONFIG.toastDuration);
}

/* =====================================================
   32. ACTIVE NAV
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const sections = $$('section[id]');
  const links = $$('.nav__link');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            const isActive =
              link.getAttribute('href') === `#${entry.target.id}`;
            link.classList.toggle('active-link', isActive);
            if (isActive) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
  );
  sections.forEach((s) => obs.observe(s));
});

/* =====================================================
   33. CHAT TOOLTIP
   ===================================================== */
function showChatTooltip() {
  const tooltip = $('chat-tooltip');
  if (!tooltip) return;
  setTimeout(() => {
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateX(0)';
    setTimeout(() => {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateX(8px)';
    }, 5000);
  }, 4000);
}

/* =====================================================
   34. FOOTER YEAR
   ===================================================== */
function initFooterYear() {
  const el = $('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* =====================================================
   35. PRODUCT DETAIL PANEL (PDP) — COMPLETE
   ===================================================== */

/* Open PDP */
function openPDP(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  pdpState.currentProduct = product;
  pdpState.quantity = 1;
  pdpState.selectedColour = product.colours?.[0] || null;

  populatePDP(product);

  const panel = $('pdp-panel');
  const overlay = $('pdp-overlay');

  if (panel) {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    panel.scrollTop = 0;
  }
  if (overlay) {
    overlay.classList.add('visible');
    overlay.setAttribute('aria-hidden', 'false');
  }

  lockScroll();

  setTimeout(() => {
    const closeBtn = $('pdp-close');
    if (closeBtn) closeBtn.focus();
  }, 400);
}

/* Populate PDP with product data */
function populatePDP(product) {
  // Image
  const img = $('pdp-img');
  if (img) {
    img.src = product.image;
    img.alt = product.alt;
  }

  // Badge
  const badge = $('pdp-badge');
  if (badge) {
    badge.textContent = product.badgeText;
    badge.className = 'pdp-badge';
    if (product.badge === 'hot') badge.classList.add('pdp-badge--hot');
    else if (product.badge === 'new') badge.classList.add('pdp-badge--new');
    else badge.classList.add('pdp-badge--sale');
  }

  // Category
  const cat = $('pdp-category');
  if (cat) cat.textContent = product.category;

  // Rating
  const rating = $('pdp-rating');
  if (rating) {
    rating.innerHTML = `
      ${renderStars(product.rating)}
      <span>(${product.reviews.toLocaleString()} reviews)</span>
    `;
    rating.setAttribute(
      'aria-label',
      `${product.rating} out of 5 stars, ${product.reviews} reviews`
    );
  }

  // Title
  const title = $('pdp-title');
  if (title) title.textContent = product.name;

  // Pricing
  const price = $('pdp-price');
  const old = $('pdp-old');
  const off = $('pdp-off');
  if (price) price.textContent = `GH₵ ${product.price.toLocaleString()}`;
  if (old) old.textContent = `GH₵ ${product.oldPrice.toLocaleString()}`;
  if (off) off.textContent = `-${product.discount}%`;

  // Description
  const desc = $('pdp-desc');
  if (desc) {
    desc.textContent = product.description ||
      'Premium quality product. Contact us on WhatsApp for more details.';
  }

  // Colours
  const coloursWrap = $('pdp-colours-wrap');
  const swatches = $('pdp-colour-swatches');
  const selectedColourLabel = $('pdp-selected-colour');

  if (coloursWrap && swatches) {
    if (!product.colours || product.colours.length === 0) {
      coloursWrap.style.display = 'none';
    } else {
      coloursWrap.style.display = 'block';
      swatches.innerHTML = product.colours.map((colour, i) => `
        <button
          class="colour-swatch ${i === 0 ? 'active' : ''}"
          style="background-color:${colour};
                 ${colour === '#ffffff' ? 'border-color: #ccc;' : ''}"
          data-colour="${colour}"
          data-colour-name="${getColourName(colour)}"
          aria-label="Select colour: ${getColourName(colour)}"
          aria-pressed="${i === 0}"
        ></button>
      `).join('');

      if (selectedColourLabel && product.colours[0]) {
        selectedColourLabel.textContent = getColourName(product.colours[0]);
      }

      $$('.colour-swatch', swatches).forEach((swatch) => {
        swatch.addEventListener('click', () => {
          $$('.colour-swatch', swatches).forEach((s) => {
            s.classList.remove('active');
            s.setAttribute('aria-pressed', 'false');
          });
          swatch.classList.add('active');
          swatch.setAttribute('aria-pressed', 'true');
          pdpState.selectedColour = swatch.dataset.colour;
          if (selectedColourLabel) {
            selectedColourLabel.textContent = swatch.dataset.colourName;
          }
        });
      });
    }
  }

  // Quantity reset
  const qtyNum = $('pdp-qty-num');
  if (qtyNum) qtyNum.textContent = '1';
  pdpState.quantity = 1;

  // Related products
  renderRelatedProducts(product);
}

/* Render Related Products */
function renderRelatedProducts(product) {
  const grid = $('pdp-related-grid');
  if (!grid) return;

  const related = PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  if (related.length === 0) {
    const relatedSection = $q('.pdp-related');
    if (relatedSection) relatedSection.style.display = 'none';
    return;
  }

  const relatedSection = $q('.pdp-related');
  if (relatedSection) relatedSection.style.display = 'block';

  grid.innerHTML = related.map((p) => `
    <div 
      class="pdp-related-card" 
      data-id="${p.id}"
      role="button"
      tabindex="0"
      aria-label="View ${p.name} — GH₵ ${p.price.toLocaleString()}"
    >
      <img 
        src="${p.image}" 
        alt="${p.alt}" 
        loading="lazy"
        onerror="this.onerror=null;this.src='${p.fallback}'"
      />
      <div class="pdp-related-card__info">
        <p class="pdp-related-card__name">${p.name}</p>
        <p class="pdp-related-card__price">GH₵ ${p.price.toLocaleString()}</p>
      </div>
    </div>
  `).join('');

  $$('.pdp-related-card', grid).forEach((card) => {
    card.addEventListener('click', () => {
      const id = Number(card.dataset.id);
      openPDP(id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPDP(Number(card.dataset.id));
      }
    });
  });
}

/* Close PDP */
function closePDP() {
  const panel = $('pdp-panel');
  const overlay = $('pdp-overlay');

  if (panel) {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }
  if (overlay) {
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
  }

  unlockScroll();
  pdpState.currentProduct = null;
}

/* Init PDP Controls */
function initPDP() {
  // Close button
  const closeBtn = $('pdp-close');
  if (closeBtn) closeBtn.addEventListener('click', closePDP);

  // Overlay click
  const overlay = $('pdp-overlay');
  if (overlay) overlay.addEventListener('click', closePDP);

  // Quantity buttons
  const incBtn = $('pdp-qty-inc');
  const decBtn = $('pdp-qty-dec');
  const qtyNum = $('pdp-qty-num');

  if (incBtn) {
    incBtn.addEventListener('click', () => {
      pdpState.quantity = Math.min(pdpState.quantity + 1, 10);
      if (qtyNum) qtyNum.textContent = pdpState.quantity;
    });
  }
  if (decBtn) {
    decBtn.addEventListener('click', () => {
      pdpState.quantity = Math.max(pdpState.quantity - 1, 1);
      if (qtyNum) qtyNum.textContent = pdpState.quantity;
    });
  }

  // Add to Cart button
  const addCartBtn = $('pdp-add-cart');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      const p = pdpState.currentProduct;
      if (!p) return;

      for (let i = 0; i < pdpState.quantity; i++) {
        addToCart(p.id, p.name, p.price);
      }

      addCartBtn.innerHTML =
        '<i class="fa-solid fa-check" aria-hidden="true"></i> Added!';
      addCartBtn.style.background =
        'linear-gradient(135deg, #059669, #047857)';
      setTimeout(() => {
        addCartBtn.innerHTML =
          '<i class="fa-solid fa-bag-shopping" aria-hidden="true"></i> Add to Cart';
        addCartBtn.style.background = '';
      }, 1500);
    });
  }

  // MoMo Pay button
  const momoBtn = $('pdp-momo-btn');
  if (momoBtn) {
    momoBtn.addEventListener('click', () => {
      const p = pdpState.currentProduct;
      if (!p) return;
      const totalPrice = p.price * pdpState.quantity;
      closePDP();
      setTimeout(() => {
        openMomoModal(
          `${p.name}${pdpState.quantity > 1 ? ` x${pdpState.quantity}` : ''}`,
          totalPrice,
          false
        );
      }, 300);
    });
  }

  // Keyboard support for product cards
  document.addEventListener('keydown', (e) => {
    const target = e.target.closest('[data-action="view-product"]');
    if (target && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openPDP(Number(target.dataset.id));
    }
  });
}