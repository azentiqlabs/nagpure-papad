import { WHATSAPP_NUMBER, BUSINESS_NAME } from './constants';
import { WhatsAppInquiryParams } from '@/types';

export function buildWhatsAppUrl({ productName, productPrice, quantity, isGeneral }: WhatsAppInquiryParams): string {
  let message: string;

  if (isGeneral) {
    message = `Namaste! 🙏\n\nI'm interested in your products from *${BUSINESS_NAME}*.\n\nCould you please share more details about your products and pricing?\n\nThank you!`;
  } else {
    message = `Namaste! 🙏\n\nI'd like to order:\n\n*Product:* ${productName}\n*Price:* ₹${productPrice} per pack${quantity ? `\n*Quantity:* ${quantity}` : ''}\n\nPlease confirm availability and delivery details.\n\nThank you! 🙏`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppCallUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}
