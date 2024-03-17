'use client';

import { useEffect, useState } from 'react';

import IconButton from '@/components/IconButton';
import { Light, Moon, System } from '@/components/svgs';
import { useTheme } from 'next-themes';

type ThemeMode = {
  Mode: 'light' | 'dark' | 'system';
  Icon: JSX.Element;
};

const ThemeModes: ThemeMode[] = [
  {
    Mode: 'light',
    Icon: <Light />,
  },
  {
    Mode: 'system',
    Icon: <System />,
  },
  {
    Mode: 'dark',
    Icon: <Moon />,
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
    <div className='mx-10 flex h-10 w-fit items-center justify-center'>
      {ThemeModes.map((mode, i) => (
        <IconButton
          key={i}
          defaultIcon={mode.Icon}
          classname={theme === mode.Mode ? 'dark:bg-black rounded-full ring-1 ring-white/10 bg-zinc-950' : ''}
          onClickHandle={() => handleModeChange(mode.Mode)}
        />
      ))}
    </div>
  );
};

export default DarkModeSwitch;
