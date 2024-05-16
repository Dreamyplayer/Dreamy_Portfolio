import Badges from '@/components/Badges';
import BentoBoxes from '@/components/BentoBoxes';
import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import Footer from '@/ui/Footer';
import { SparklesCore } from '@/ui/sparkles';

export default function Home() {
  return (
    <main className='mt-5 h-auto lg:mt-10'>
      <div className='pointer-events-none absolute top-0 flex h-[160rem] w-full items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black md:h-[118rem] lg:h-[88rem]'></div>
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
