import { Rock_Salt } from 'next/font/google';
import Link from 'next/link';

import GradientButtons from '@/components/GradientButtons';
import { AnimatedTooltip } from '@/ui/animates-tooltip';
import { TextRevealCard } from '@/ui/text-reveal';

const rockSaltFont = Rock_Salt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='my-5'>
        <AnimatedTooltip />
      </div>
      <h5 className='text-base font-normal md:lg:text-2xl'>{`Hello, I'm`}</h5>
      <p
        className={`${rockSaltFont.className} absolute -mt-10 mr-[12rem] text-xs tracking-widest text-[#0070F3] md:lg:text-base md:lg:mt-4 md:lg:mr-[17.5rem]`}
      >
        aka
      </p>
      <TextRevealCard text='Dreamy Player' revealText='Sai Kumar Bungapatla' />
      <p className='text-base font-medium md:lg:text-xl'>a Full-stack Developer.</p>
      <div className='mb-4 mt-3 flex flex-col gap-5 md:lg:flex-row md:lg:flex'>
        <Link href='/saikumar_Resume.docx.pdf'>
          <GradientButtons text='📃 Check Resume' />
        </Link>
        <Link href='https://github.com/Dreamyplayer'>
          <GradientButtons text='✨ Github Profile' />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
