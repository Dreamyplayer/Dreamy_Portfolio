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
      <h5 className='-mt-3 text-base font-normal lg:text-2xl'>{`Hello, I'm`}</h5>
      <TypingEffect />
      <p className='text-base font-medium lg:text-xl'>a Full-stack Developer.</p>
      <div className='mt-3 mb-4 flex flex-col gap-5 md:flex-row lg:flex-row'>
        <Link href='/Sai_Kumar_Resume_Upgraded.pdf' rel='noopener noreferrer' target='_blank'>
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
