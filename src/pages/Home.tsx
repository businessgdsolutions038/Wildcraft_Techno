import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import IndustriesSection from '@/components/IndustriesSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <AboutSection />
      <SolutionsSection />
      <ServicesSection />
      <PartnersSection />
      <IndustriesSection />
      <ContactSection />
    </>
  );
}
