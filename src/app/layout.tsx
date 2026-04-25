import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Lora, Nunito, Noto_Serif_Devanagari } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const notoDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-devanagari',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Nagpure Papad & Kurdya | घरघुती स्वाद, परंपरेची साथ | Since 1995',
    template: '%s | Nagpure Papad & Kurdya',
  },
  description:
    'Authentic homemade Maharashtrian Papad and Kurdya by Nagpure family since 1995. 100% natural, sun-dried, no preservatives. Order on WhatsApp for fresh delivery. पारंपारिक घरगुती पापड आणि कुरिया.',
  keywords: [
    'papad', 'kurdya', 'Nagpure', 'homemade papad', 'gharghuti papad',
    'maharashtrian papad', 'udid papad', 'sabudana papad', 'masala kurdya',
    'traditional papad', 'nagpur papad', 'पापड', 'कुरिया', 'घरगुती पापड',
  ],
  authors: [{ name: 'Nagpure Papad & Kurdya' }],
  creator: 'Nagpure Papad & Kurdya',
  publisher: 'Nagpure Papad & Kurdya',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'mr_IN',
    title: 'Nagpure Papad & Kurdya | Authentic Homemade Since 1995',
    description:
      'Order authentic Maharashtrian Papad and Kurdya on WhatsApp. Homemade, pure, no preservatives. Since 1995.',
    siteName: 'Nagpure Papad & Kurdya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nagpure Papad & Kurdya | Authentic Homemade Since 1995',
    description: 'Order authentic Maharashtrian Papad and Kurdya on WhatsApp.',
  },
  robots: { index: true, follow: true },
  category: 'food',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7B1C1C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${nunito.variable} ${notoDevanagari.variable}`}>
      <body className="font-body bg-cream-50 text-maroon-800 antialiased">
        {children}
      </body>
    </html>
  );
}
