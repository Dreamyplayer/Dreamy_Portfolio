import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { ThemeProvider } from '@/app/themeProviders';

import './globals.css';

const pop = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: `Dreamy's Portfolio`,
  description: `Explore my portfolio for a showcase of my expertise in backend and full-stack development.
  From robust APIs to seamless user experiences, I demonstrate a proven track record of delivering high-quality solutions.
  Dive in to see how I tackle complex challenges and drive innovation in modern software development.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${pop.className} bg-grid-small-black/[0.3] dark:bg-grid-small-white/[0.2] scroll-smooth bg-white text-black duration-700 dark:bg-[#12181B] dark:text-white`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
