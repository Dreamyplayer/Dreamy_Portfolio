'use client';

import React from 'react';

import Image from 'next/image';

import { cn } from '@/utils/cn';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className='my-10 flex items-center justify-center'>
      <div className='h-full w-[1360px] rounded-xl border border-[#e4e4e7] bg-white px-2 pb-5 dark:border-[#27272a] dark:bg-black lg:h-[940px]'>
        <div className='-mb-12 mt-5 flex items-center justify-center'>
          <Image src={'/Groupn 246.svg'} width={310} height={40} alt='' className='rounded-xl' />
        </div>
        <div
          className={cn(
            'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-5 ',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const BentoGridItem = ({ className, content }: { className?: string; content?: React.ReactNode }) => {
  const radius = 500;
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
    radial-gradient(
      ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
      rgb(255 255 255 / .13),
      transparent 80%
    )
  `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn(
        'group/bento shadow-input row-span-1 flex items-center justify-center space-y-4 rounded-xl border bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className,
      )}
    >
      {content}
    </motion.div>
  );
};
