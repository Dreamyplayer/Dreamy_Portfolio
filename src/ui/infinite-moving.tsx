'use client';

import { cn } from '@/utils/cn';
import React, { useEffect, useLayoutEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
  children,
}: {
  items: {
    title: string;
    src: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
  children: React.ReactNode;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  // Starts true directly — useLayoutEffect below duplicates the DOM
  // synchronously before paint, so there's no visible unduplicated frame
  // to gate against, and no state written from a mount effect.
  const [start] = useState(true);

  // useLayoutEffect (not useEffect): must clone children before the browser
  // paints, or the un-duplicated list flashes for one frame.
  useLayoutEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  }, []);

  // Keep direction/speed CSS vars in sync without re-duplicating cards.
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty('--animation-direction', direction === 'left' ? 'forwards' : 'reverse');

    containerRef.current.style.setProperty(
      '--animation-duration',
      speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s',
    );
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-64 overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] md:max-w-sm lg:max-w-md',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {children}
      </ul>
    </div>
  );
};
