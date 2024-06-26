'use client';

import { FC, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import useMediaQuery from '@/hooks/use-media-query';

interface EyesFollowProps {}

const EyesFollow: FC<EyesFollowProps> = () => {
  const { isMobile } = useMediaQuery();
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const eyesRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    setCursorX(event.clientX);
    setCursorY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateAngle = (mouseX: number, mouseY: number): number => {
    const anchor = eyesRef.current;
    if (!anchor) return 0;

    const rect = anchor.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const dy = mouseY - anchorY;
    const dx = mouseX - anchorX;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;

    return deg;
  };

  return (
    <div className='relative cursor-default'>
      <div ref={eyesRef} id='eyes'>
        <Image src={'/Luffy.png'} width={200} height={200} alt='One Piece Luffy' />
        <Image
          style={{
            transform: `rotate(${90 + calculateAngle(cursorX, cursorY)}deg)`,
          }}
          src={'/eyeball.png'}
          width={13}
          height={13}
          alt=''
          className={`absolute left-[75px] top-[83px] rounded-full ${isMobile ? 'hidden' : ''}`}
        />

        <Image
          style={{
            transform: `rotate(${90 + calculateAngle(cursorX, cursorY)}deg)`,
          }}
          src={'/eyeball.png'}
          width={13}
          height={13}
          alt=''
          className={`absolute left-[110px] top-[83px] rounded-full ${isMobile ? 'hidden' : ''}`}
        />
      </div>
    </div>
  );
};

export default EyesFollow;
