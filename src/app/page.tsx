import Badges from '@/components/Badges';
import BentoBoxes from '@/components/BentoBoxes';
import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import Footer from '@/ui/Footer';
import { SparklesCore } from '@/ui/sparkles';

export default function Home() {
  return (
    <main className='mt-5 h-auto lg:mt-10'>
      {/* Core component */}
      <SparklesCore
        background='transparent'
        minSize={0.4}
        maxSize={1}
        particleDensity={120}
        className='fixed inset-0 -z-10'
      />

      <Logo />
      <HeroSection />

      {/* Tags */}
      <Badges />

      {/* Bento UI */}
      <BentoBoxes />

      {/* END */}
      <Footer />
    </main>
  );
}
