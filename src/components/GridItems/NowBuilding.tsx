'use client';

import { adventures } from '@/components/data/projects';
import { useEffect, useState } from 'react';

export default function NowBuilding() {
  const [current, setCurrent] = useState(adventures[0]); // deterministic initial value

  useEffect(() => {
    const saved = localStorage.getItem('adventure');

    if (saved) {
      setCurrent(JSON.parse(saved));
      return;
    }

    const random = adventures[Math.floor(Math.random() * adventures.length)];

    localStorage.setItem('adventure', JSON.stringify(random));
    setCurrent(random);
  }, []);

  const randomizeAdventure = () => {
    let next = current;

    // Keep picking until it's different
    while (next.title === current.title) {
      next = adventures[Math.floor(Math.random() * adventures.length)];
    }

    localStorage.setItem('adventure', JSON.stringify(next));
    setCurrent(next);
  };

  return (
    <div className='relative flex h-full flex-col overflow-hidden rounded-md hover:-translate-y-1'>
      {/* Background decoration */}
      {/* <div className='absolute -top-8 -right-8 h-24 w-24 rounded-full bg-sky-500/5 blur-2xl' /> */}

      <div className='relative flex h-full flex-col'>
        {/* Header */}
        <div className='flex items-center justify-center'>
          <p className='text-[11px] font-black tracking-[0.3em] text-amber-500 uppercase'>CURRENT BOUNTY</p>
        </div>

        <div className='mt-px flex items-center justify-around gap-3'>
          <span className='text-sm'>{current.emoji}</span>

          <p className='text-xs leading-tight font-bold whitespace-nowrap'>{current.title}</p>

                    <button
            onClick={randomizeAdventure}
            title='Set Sail'
            aria-label='Set Sail'
            className='group rounded-full p-1.5 transition-all duration-300 hover:bg-sky-500/10 cursor-pointer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 64 64'
              className='h-7 w-7 text-sky-400 transition-all duration-700 group-hover:rotate-180 group-active:rotate-360'
              fill='none'
            >
              {/* Outer ring */}
              <circle cx='32' cy='32' r='28' stroke='currentColor' strokeWidth='2.5' opacity='0.35' />

              {/* Inner glass */}
              <circle cx='32' cy='32' r='18' stroke='currentColor' strokeWidth='2' opacity='0.8' />

              {/* Glass highlight */}
              <ellipse cx='27' cy='24' rx='6' ry='10' fill='currentColor' opacity='0.08' />

              {/* Compass needle */}
              <path d='M32 17 L36 32 L32 47 L28 32 Z' fill='currentColor' />

              {/* Center gem */}
              <circle cx='32' cy='32' r='3' fill='currentColor' />

              {/* Small ticks */}
              <line x1='32' y1='7' x2='32' y2='11' stroke='currentColor' strokeWidth='2' />
              <line x1='57' y1='32' x2='53' y2='32' stroke='currentColor' strokeWidth='2' />
              <line x1='32' y1='57' x2='32' y2='53' stroke='currentColor' strokeWidth='2' />
              <line x1='7' y1='32' x2='11' y2='32' stroke='currentColor' strokeWidth='2' />
            </svg>
          </button>
        </div>

        <div className='my-2 h-px bg-linear-to-r from-amber-500/60 via-neutral-500/30 to-transparent' />

        {/* Description */}
        <p className='line-clamp-6 flex-1 text-xs leading-7 text-neutral-600 dark:text-neutral-300'>
          {current.description}
        </p>

        {/* Footer */}
        <div className='mt-1.5 flex items-center justify-between'>
          <span className='text-xs tracking-widest text-neutral-500 uppercase'>Status</span>

          <span className='rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400'>
            {current.status}
          </span>
        </div>
      </div>
    </div>
  );
}
