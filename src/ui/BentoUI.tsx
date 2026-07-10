'use client';

import { cn } from '@/utils/cn';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

export const BentoGrid = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <div className='my-10 flex items-center justify-center'>
      <div className='z-10 mx-4 h-full w-340 rounded-xl border border-[#e4e4e7] bg-[#fffdf8] px-2 pb-5 lg:h-235 dark:border-[#27272a] dark:bg-black'>
        <div className='mt-5 -mb-12 flex items-center justify-center'>
          <Image src={'/design_develop_ship.svg'} width={310} height={40} alt='' className='h-auto w-auto' />
        </div>
        <div
          className={cn(
            'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-65 md:grid-cols-3 lg:grid-cols-5',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const BentoGridItem = ({ className, content }: { className?: string; content?: ReactNode }) => {
  const radius = 500;
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

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
      ${theme === 'light' ? 'rgb(244 242 244 / .20)' : 'transparent 80%'}
    )
  `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn(
        'group/bento shadow-input row-span-1 flex items-center justify-center space-y-4 rounded-xl border p-4 transition duration-200 hover:shadow-xl dark:border-white/20 dark:shadow-none',
        className,
      )}
    >
      {content}
    </motion.div>
  );
};
