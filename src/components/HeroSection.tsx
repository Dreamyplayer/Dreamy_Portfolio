import { Rock_Salt } from 'next/font/google';
import Link from 'next/link';

import GradientButtons from '@/components/GradientButtons';
import { AnimatedTooltip } from '@/ui/animates-tooltip';
import { TextRevealCard } from '@/ui/text-reveal';

const rock_salt = Rock_Salt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const Hero_Section = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='my-5'>
        <AnimatedTooltip />
      </div>
      <h5 className={`text-2xl font-normal`}>{`Hello, I'm`}</h5>
      <p className={`${rock_salt.className} absolute mr-[17.5rem] mt-4 text-base tracking-widest text-[#0070F3]`}>
        aka
      </p>
      <TextRevealCard text='Dreamy Player' revealText='Sai Kumar Bungapatla' />
      <p className={`text-xl font-medium`}>a Full-stack Developer.</p>
      <div className='mb-4 mt-3 flex gap-5'>
        <Link href={'/saikumar_Resume.docx.pdf'}>
        <GradientButtons text='📃 Check Resume' />
        </Link>
        <Link href={'https://github.com/Dreamyplayer'}>
          <GradientButtons text='✨ Github Profile' />
        </Link>
      </div>
    </div>
  );
};

export default Hero_Section;
