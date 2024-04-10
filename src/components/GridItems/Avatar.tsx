import Image from 'next/image';

export const Avatar = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={'/download.png'}
        className='rounded-xl object-cover hover:origin-bottom hover:-rotate-2'
        width={900}
        height={900}
        alt='Avatar'
      />
    </div>
  );
};
