import Image from 'next/image';

export default function Loading() {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center bg-[#121316] text-white bg-grid-small-white/[0.2]`}
    >
      <div className='pointer-events-none absolute top-0 flex h-screen w-full items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <Image
        unoptimized
        height={200}
        width={200}
        priority
        title='Loading'
        src={'https://media.tenor.com/ZRHVn5t3nm4AAAAi/sataniasalaught.gif'}
        alt='Loading...'
        className='h-52 w-52'
      />
      <button
        disabled
        type='button'
        className='flex items-center justify-center gap-1 py-2.5 text-sm font-medium dark:text-gray-400'
      >
        Loading
        <div className='ml-1 h-2 w-2 animate-bounce rounded-full bg-rose-500 font-bold [animation-delay:-0.3s]'>.</div>
        <div className='h-2 w-2 animate-bounce rounded-full bg-yellow-500 font-bold [animation-delay:-0.15s]'>.</div>
        <div className='h-2 w-2 animate-bounce rounded-full bg-rose-500 font-bold'>.</div>
      </button>
    </div>
  );
}
