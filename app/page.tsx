import HeroSection from '../components/HeroSection/HeroSection';
import TextSection from '../components/TextSection/TextSection';
import ImageTextSection from '../components/ImageTextSection/ImageTextSection';
import BrandLogos from '../components/BrandLogos/BrandLogos';
import ContactSection from '../components/ContactSection/ContactSection';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import FeaturedProduct from '@/components/FeaturedProduct/FeaturedProduct';
import ProductsSec from '@/components/ProductsSec/ProductsSec';
import QuizBanner from '@/components/QuizBanner/QuizBanner';
import VideoSec from '@/components/VideoSec/VideoSec';

export default function Home() {
  return (
    <>
      {/* Hero Section (full width) */}
      <HeroSlider />

      {/* <div className="container">
        <HeroSection />
      </div> */}
      <div className="container">
        <TextSection />
      </div>
      <div className='container'>
        <FeaturedProduct />
      </div>
      <div className='container'>
        <ProductsSec />
      </div>
      {/* <div className="container">
        <ImageTextSection />
      </div> */}

      <QuizBanner />

      <VideoSec />



      {/* <BrandLogos /> */}

      {/* <div className="container">
        <ContactSection />
      </div> */}
    </>
  );
}

