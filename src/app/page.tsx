import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import Footer from '@/ui/Footer';
import { SparklesCore } from '@/ui/sparkles';

export default function Home() {
  return (
    <main className='mt-10 h-auto'>
      {/* Core component */}
      <SparklesCore
        background='transparent'
        minSize={0.4}
        maxSize={1}
        particleDensity={120}
        className='fixed -mt-10 h-full w-full'
      />

      <Logo />
      <HeroSection />

      {/* END */}
      <Footer />
    </main>
  );
}
