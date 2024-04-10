'use client';

import { useEffect, useState } from 'react';

import { SVGIcons } from '@/components/svgs';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export type ThemeMode = {
  Mode: 'light' | 'dark' | 'system';
  Icon: JSX.Element;
};

const ThemeModes: ThemeMode[] = [
  {
    Mode: 'light',
    Icon: <SVGIcons type={'light'} />,
  },
  {
    Mode: 'system',
    Icon: <SVGIcons type={'system'} />,
  },
  {
    Mode: 'dark',
    Icon: <SVGIcons type={'dark'} />,
  },
];

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleModeChange = (mode: ThemeMode['Mode']) => {
    setTheme(mode);
  };

  return (
    <div className={`grid place-content-center transition-colors md:mx-10 lg:mx-10`}>
      <div className='relative flex items-center'>
        {ThemeModes.map((mode, i) => (
          <button
            key={i}
            className='relative z-10 flex items-center gap-2 px-2 py-2 transition-colors'
            onClick={() => handleModeChange(mode.Mode)}
          >
            {mode.Icon}
          </button>
        ))}

        <div
          className={`absolute inset-0 z-0 flex ${
            theme === 'dark' ? 'justify-end' : theme === 'system' ? 'justify-center' : 'justify-start'
          }`}
        >
          <motion.span
            layout
            transition={{ type: 'spring', damping: 15, stiffness: 250 }}
            className='h-full w-1/3 rounded-xl border border-white/[0.2] bg-zinc-950 ring-1 ring-white/10'
          />
        </div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
