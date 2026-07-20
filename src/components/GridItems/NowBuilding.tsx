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

  return (
    <div className='relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/60'>
      {/* Background decoration */}
      <div className='absolute -top-8 -right-8 h-24 w-24 rounded-full bg-sky-500/5 blur-2xl' />

      <div className='relative flex h-full flex-col'>
        {/* Header */}
        <p className='text-[11px] font-black tracking-[0.3em] whitespace-nowrap text-amber-500 uppercase'>
          ⭐ CURRENT BOUNTY
        </p>

        <div className='mt-3 flex items-center gap-3'>
          <span className='text-sm'>{current.emoji}</span>

          <p className='text-xs leading-tight font-bold whitespace-nowrap'>{current.title}</p>
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
