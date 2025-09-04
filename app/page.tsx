import HeroSection from '../components/HeroSection';
import TextSection from '../components/TextSection';
import ImageTextSection from '../components/ImageTextSection';
import BrandLogos from '../components/BrandLogos';
import ContactSection from '../components/ContactSection';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section (full width) */}
      <HeroSlider />

      <div className="container">
        <HeroSection />
      </div>
      <div className="container">
        <TextSection />
      </div>
      <div className="container">
        <ImageTextSection />
      </div>

      {/* BrandLogos (full width) */}
      <BrandLogos />

      <div className="container">
        <ContactSection />
      </div>
    </>
  );
}

