import Image from 'next/image';

export const ComingSoon = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='absolute font-bold text-neutral-900 [text-shadow:_black_0_2px_15px] dark:text-white dark:[text-shadow:_white_0_2px_15px]'>
        Coming Soon
      </p>
      <Image
        src={'/download.png'}
        className='scale-110 rounded-xl object-cover opacity-30 blur-sm'
        width={900}
        height={900}
        alt=''
      />
    </div>
  );
};
