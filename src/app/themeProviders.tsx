'use client';

import { useState } from 'react';

import Loading from '@/app/loading';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: { children: React.ReactNode } & ThemeProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const intervalId = setInterval(() => {
    if (typeof window !== 'undefined') {
      const loadingState = window.document.readyState;

      if (loadingState === 'complete') {
        setIsLoading(false);
        clearInterval(intervalId);
      }
    }
  }, 100);

  return <>{isLoading ? <Loading /> : <NextThemesProvider {...props}>{children}</NextThemesProvider>}</>;
}
