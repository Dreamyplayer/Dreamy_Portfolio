'use client';

import Badges from '@/components/Badges';
import BentoBoxes from '@/components/BentoBoxes';
import HeroSection from '@/components/HeroSection';
import Logo from '@/components/Logo';
import useMediaQuery from '@/hooks/use-media-query';
import Footer from '@/ui/Footer';
import { SparklesCore } from '@/ui/sparkles';

export default function Home() {
  const { pageHeight } = useMediaQuery();
  const dynamicHeight = typeof pageHeight === 'number' ? pageHeight + 150 : 0;

  return (
    <main className='mt-5 h-auto lg:mt-10'>
      <div
        className={`pointer-events-none absolute top-0 flex w-full items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black`}
        style={{
          height: `${dynamicHeight}px`,
        }}
      ></div>

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
