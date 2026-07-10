import Image from 'next/image';

const principles = ['Dark mode first', 'Micro-interactions', 'Responsive', 'Minimal'];

export const UIUX = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-2 px-4 text-center'>
      <Image
        src={'https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256'}
        width={40}
        height={40}
        className='h-8 w-8'
        alt='Figma'
      />
      <p className='text-sm font-bold'>UI/UX</p>
      <div className='flex flex-wrap justify-center gap-1'>
        {principles.map(p => (
          <span
            key={p}
            className='rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UIUX;
