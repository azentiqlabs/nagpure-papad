import { Product, NavItem, Testimonial } from '@/types';

export const WHATSAPP_NUMBER = '8329305232'; // Replace with actual number
export const BUSINESS_NAME = 'Nagpure Papad & Kurdya';
export const BUSINESS_TAGLINE = 'घरघुती स्वाद, परंपरेची साथ';
export const BUSINESS_TAGLINE_EN = 'Homemade Taste, Traditional Touch';
export const SINCE_YEAR = 1995;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', labelMarathi: 'होम', href: '#home' },
  { label: 'Papad', labelMarathi: 'पापड', href: '#papad' },
  { label: 'Kurdya', labelMarathi: 'कुरिया', href: '#kurdya' },
  { label: 'Combos', labelMarathi: 'कॉम्बो', href: '#combos' },
  { label: 'Our Quality', labelMarathi: 'आमची गुणवत्ता', href: '#quality' },
  { label: 'About Us', labelMarathi: 'आमच्याबहल', href: '#about' },
  { label: 'Contact', labelMarathi: 'संपर्क', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'udid-papad',
    name: 'Udid Papad',
    nameMarathi: 'उडीद पापड',
    category: 'papad',
    description: 'Classic black gram papad made from pure urad dal with traditional spices. Crispy, light, and utterly irresistible.',
    descriptionMarathi: 'शुद्ध उडीद डाळीपासून बनवलेला पारंपारिक पापड. खुसखुशीत आणि चविष्ट.',
    price: 120,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80',
    isBestseller: true,
    variants: [
      { weight: '250g', price: 120 },
      { weight: '500g', price: 220 },
      { weight: '1kg', price: 400 },
    ],
  },
  {
    id: 'sabudana-papad',
    name: 'Sabudana Papad',
    nameMarathi: 'साबुदाणा पापड',
    category: 'papad',
    description: 'Light tapioca papad perfect for fasting. Made with pure sabudana and minimal spices for a delicate crunch.',
    descriptionMarathi: 'उपवासासाठी आदर्श साबुदाणा पापड. शुद्ध साबुदाण्यापासून बनवलेला.',
    price: 100,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80',
    badge: 'Upwas Special',
    variants: [
      { weight: '250g', price: 100 },
      { weight: '500g', price: 190 },
    ],
  },
  {
    id: 'rice-papad',
    name: 'Tanhul Papad',
    nameMarathi: 'तांहुळ पापड',
    category: 'papad',
    description: 'Thin rice papad with a subtle flavor. Sun-dried to perfection, these melt in your mouth when fried.',
    descriptionMarathi: 'तांदळाचा पातळ पापड. सूर्यप्रकाशात वाळवलेला.',
    price: 90,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    variants: [
      { weight: '250g', price: 90 },
      { weight: '500g', price: 170 },
    ],
  },
  {
    id: 'masala-kurdya',
    name: 'Masala Kurdya',
    nameMarathi: 'मसाला कुरिया',
    category: 'kurdya',
    description: 'Spicy wafer-shaped kurdya with a blend of secret masalas. The crunch that every Maharashtrian household craves.',
    descriptionMarathi: 'खास मसाल्यांनी भरलेल्या कुरिया. प्रत्येक घरातील आवडता स्नॅक.',
    price: 150,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80',
    isBestseller: true,
    isPopular: true,
    variants: [
      { weight: '250g', price: 150 },
      { weight: '500g', price: 280 },
      { weight: '1kg', price: 520 },
    ],
  },
  {
    id: 'plain-kurdya',
    name: 'Sada Kurdya',
    nameMarathi: 'साडा कुरिया',
    category: 'kurdya',
    description: 'Plain salted kurdya for those who love simple, authentic flavors. Perfect with dal and rice.',
    descriptionMarathi: 'साध्या मीठाचे कुरिया. वरण-भातासोबत अप्रतिम लागतात.',
    price: 130,
    unit: '250g',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=80',
    variants: [
      { weight: '250g', price: 130 },
      { weight: '500g', price: 250 },
    ],
  },
  {
    id: 'family-combo',
    name: 'Family Combo Pack',
    nameMarathi: 'फॅमिली कॉम्बो पॅक',
    category: 'combo',
    description: 'Best of both worlds! Includes Udid Papad 500g + Masala Kurdya 500g + Sabudana Papad 250g. Perfect for families.',
    descriptionMarathi: 'घरातील सर्वांसाठी आदर्श पॅक. उडीद पापड + मसाला कुरिया + साबुदाणा पापड.',
    price: 550,
    unit: 'Combo',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    badge: 'Save ₹110',
    isPopular: true,
    variants: [
      { weight: 'Family Pack', price: 550 },
      { weight: 'Mega Pack', price: 980 },
    ],
  },
];

export const QUALITY_FEATURES = [
  {
    icon: '🌿',
    title: '100% Homemade',
    titleMarathi: '१००% घरगुती',
    desc: 'Made in our own kitchen with love and care',
  },
  {
    icon: '🌱',
    title: 'Pure & Natural',
    titleMarathi: 'शुद्ध आणि नैसर्गिक',
    desc: 'No artificial colors or preservatives',
  },
  {
    icon: '☀️',
    title: 'Sun Dried',
    titleMarathi: 'सूर्यताप वाळवलेले',
    desc: 'Traditional sun-drying for authentic taste',
  },
  {
    icon: '🚫',
    title: 'No Preservatives',
    titleMarathi: 'कोणतेही प्रिझर्वेटिव्ह नाही',
    desc: 'Taste that brings families together',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sunita Deshmukh',
    location: 'Pune',
    text: 'Nagpure papad takes me back to my childhood! The masala kurdya is exactly how my mother used to make them. Ordered twice already!',
    rating: 5,
  },
  {
    name: 'Rajesh Kulkarni',
    location: 'Nagpur',
    text: 'Best sabudana papad for upwas! My family orders the family combo every month. Quick WhatsApp response and fresh products.',
    rating: 5,
  },
  {
    name: 'Priya Joshi',
    location: 'Mumbai',
    text: 'Sent these as gifts to relatives abroad — everyone loved them! The quality and packaging is excellent. Highly recommended!',
    rating: 5,
  },
];
