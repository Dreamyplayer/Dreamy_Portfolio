import Link from 'next/link';

import GradientButtons from '@/components/GradientButtons';
import TypingEffect from '@/components/TypeEffect';
import { AnimatedTooltip } from '@/ui/animates-tooltip';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='my-5'>
        <AnimatedTooltip />
      </div>
      <h5 className='text-base -mt-3 font-normal lg:text-2xl'>{`Hello, I'm`}</h5>
      <TypingEffect />
      <p className='text-base font-medium lg:text-xl'>a Full-stack Developer.</p>
      <div className='mb-4 mt-3 flex flex-col gap-5 md:flex-row lg:flex-row'>
        <Link href='/saikumar_Resume.docx.pdf' rel='noopener noreferrer' target='_blank'>
          <GradientButtons text='📃 Check Resume' />
        </Link>
        <Link href='https://github.com/Dreamyplayer' rel='noopener noreferrer' target='_blank'>
          <GradientButtons text='✨ Github Profile' />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
