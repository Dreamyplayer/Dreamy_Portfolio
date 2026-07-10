'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ComponentProps } from 'react';

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: { children: React.ReactNode } & ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
