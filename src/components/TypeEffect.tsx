'use client';

import { useEffect, useState } from 'react';

import { Rock_Salt } from 'next/font/google';

import TypeIt from 'typeit-react';

const rockSaltFont = Rock_Salt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const TypingEffect = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showText && (
        <p
          className={`${rockSaltFont.className} absolute -mt-10 mr-[13.5rem] text-xs tracking-widest text-[#0070F3] md:mt-1 md:text-sm lg:mr-[18.5rem] lg:mt-4 lg:text-base`}
        >
          <TypeIt options={{ cursorChar: ' ' }}>aka</TypeIt>
        </p>
      )}
      <div className='flex items-center justify-center bg-gradient-to-br from-[#d8dbe9] to-[#727a9a] bg-clip-text text-2xl font-semibold tracking-tight text-transparent md:lg:text-4xl'>
        <TypeIt
          options={{
            cursorChar: ' ',
          }}
          getBeforeInit={instance => {
            instance.type('Sai Kumar Bungapatla').pause(3000).delete(20).pause(500).type('Dreamy Player');

            return instance;
          }}
        ></TypeIt>
      </div>
    </>
  );
};

export default TypingEffect;
