export const NowBuilding = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-2 px-4'>
      <div className='flex items-center gap-2'>
        <span className='relative flex h-2.5 w-2.5'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
          <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400'></span>
        </span>
        <p className='text-sm font-bold'>Currently Building</p>
      </div>
      <p className='text-sm text-neutral-600 dark:text-neutral-300'>
        <span className='font-semibold text-sky-500'>Lootly</span> — a link-in-bio + affiliate tracking platform for
        Instagram creators.
      </p>
    </div>
  );
};

export default NowBuilding;
