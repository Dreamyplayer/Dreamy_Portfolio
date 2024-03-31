'use client';

import { useEffect, useState } from 'react';

import IconButton from '@/components/IconButton';
import { SVGIcons } from '@/components/svgs';
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
    <div className='z-10 flex items-center justify-center md:mx-10 lg:mx-10'>
      {ThemeModes.map((mode, i) => (
        <IconButton
          key={i}
          defaultIcon={mode.Icon}
          classname={theme === mode.Mode ? 'dark:bg-black rounded-xl ring-1 ring-white/10 bg-zinc-950' : ''}
          onClickHandle={() => handleModeChange(mode.Mode)}
        />
      ))}
    </div>
  );
};

export default DarkModeSwitch;
