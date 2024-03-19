'use client';

import React, { memo, useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  const rotateDeg = (widthPercentage + 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn('relative flex md:lg:w-[27rem] w-[22rem] items-center justify-center overflow-hidden', className)}
    >
      {children}

      <div className='relative flex items-center overflow-hidden text-3xl'>
        <motion.div
          style={{
            width: '100%',
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.6 }}
          className='absolute z-20 bg-white will-change-transform bg-grid-small-black/[0.2] dark:bg-[#121316] dark:bg-grid-small-white/[0.2]'
        >
          <h1
            className={`mx-6 my-1 w-[25rem] md:lg:text-4xl text-2xl font-medium tracking-tight`}
          >
            {revealText}
          </h1>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.6 }}
          className='absolute z-50 h-40 w-[6px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform dark:bg-gradient-to-b dark:from-transparent dark:via-neutral-100 dark:to-transparent'
        ></motion.div>

        <div className=' overflow-hidden '>
          <p className={`mx-24 my-1 w-[45rem] md:lg:text-4xl text-2xl font-medium tracking-tight`}>{text}</p>
          {/* <MemoizedStars /> */}
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h2 className={twMerge('mb-2 text-lg text-white', className)}>{children}</h2>;
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={twMerge('text-sm text-[#a9a9a9]', className)}>{children}</p>;
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className='absolute inset-0'>
      {[...Array(140)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            zIndex: 1,
          }}
          className='inline-block'
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
