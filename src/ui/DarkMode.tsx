'use client';

import { SVGIcons } from '@/components/svgs';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { JSX, useSyncExternalStore } from 'react';

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

function subscribe() {
  return () => {};
}

// Server always renders `false`; client flips to `true` post-hydration.
// This avoids the theme-mismatch flash without a mount-effect render.
function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

const DarkModeSwitch = () => {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  const handleModeChange = (mode: ThemeMode['Mode']) => {
    setTheme(mode);
  };

  return (
    <div className={`grid place-content-center transition-colors md:mx-10 lg:mx-10`}>
      <div className='relative flex items-center'>
        {ThemeModes.map(mode => (
          <button
            type='button'
            key={mode.Mode}
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
            className='h-full w-1/3 rounded-xl border border-white/20 bg-zinc-950 ring-1 ring-white/10'
          />
        </div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
