import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import BannerSection from '@/components/home/BannerSection';
import ProductsSection from '@/components/products/ProductsSection';
import QualitySection from '@/components/home/QualitySection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/contact/ContactSection';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Nagpure Papad & Kurdya | Authentic Homemade Since 1995',
  description:
    'Order authentic Maharashtrian Papad and Kurdya on WhatsApp. 100% homemade, pure & natural, sun dried, no preservatives. Gharghuti since 1995.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BannerSection />
        <ProductsSection />
        <QualitySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
