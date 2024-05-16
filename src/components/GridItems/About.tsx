'use client';

import Image from 'next/image';

import useMediaQuery from '@/hooks/use-media-query';

export const About = () => {
  const { isMobile } = useMediaQuery();
  return (
    <div className='flex flex-col items-start justify-between gap-y-5 px-4'>
      <p className='font-bold'>About</p>
      <div className='font-medium'>
        <Image src={'/backend.svg'} className='h-auto w-40' width={150} height={150} alt='Strong Backend' />
        <span className='font-bold text-yellow-300'>Full-stack Developer</span> &{' '}
        <Image
          src={'/Learning.svg'}
          className={`absolute -mt-20 ml-32 h-24 w-24 md:ml-48 lg:ml-48 ${isMobile ? 'hidden' : ''}`}
          width={150}
          height={150}
          alt='Learning'
        />
        <span className='font-bold text-sky-500'>UI/UX Designer</span>, building the magic that bridges backend to
        beautiful interfaces.
      </div>
    </div>
  );
};
