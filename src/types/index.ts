export interface Product {
  id: string;
  name: string;
  nameMarathi: string;
  category: 'papad' | 'kurdya' | 'combo';
  description: string;
  descriptionMarathi: string;
  price: number;
  unit: string;
  image: string;
  badge?: string;
  isPopular?: boolean;
  isBestseller?: boolean;
  variants?: { weight: string; price: number }[];
}

export interface NavItem {
  label: string;
  labelMarathi: string;
  href: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface WhatsAppInquiryParams {
  productName?: string;
  productPrice?: number;
  quantity?: string;
  isGeneral?: boolean;
}
