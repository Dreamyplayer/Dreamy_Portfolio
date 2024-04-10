'use client';

import { useState } from 'react';

import Image from 'next/image';

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const people = [
  {
    id: 1,
    name: 'Dreamy',
    designation: 'IT & Software',
    image: '/download.png',
  },
];

export const AnimatedTooltip = ({
  items = people,
}: {
  items?: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className='group  relative -mr-4'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode='wait'>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className='absolute md:lg:-left-1/2 -right-8 -top-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl'
              >
                <div className='absolute inset-x-8 bottom-0  z-30 h-px w-[30%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent dark:-bottom-px ' />
                <div className='absolute bottom-0 left-12 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent dark:-bottom-px ' />
                <div className='relative z-30 text-base font-bold text-white'>{item.name}</div>
                <div className='text-xs text-white'>{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            unoptimized
            height={100}
            width={100}
            title='Dreamy.'
            src={'https://media1.tenor.com/m/Iv5nneqwvPAAAAAC/rikka-takanashi-tuvigif.gif'}
            alt={item.name}
            className='relative !m-0 md:lg:h-14 md:lg:w-14 h-10 w-10 rounded-full object-cover object-top !p-0 transition duration-500  group-hover:z-30 group-hover:scale-110 '
          />
        </div>
      ))}
    </>
  );
};
