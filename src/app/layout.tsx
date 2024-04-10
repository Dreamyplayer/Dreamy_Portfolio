import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { ThemeProvider } from '@/app/themeProviders';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        className={`${pop.className} scroll-smooth bg-[#F5F2FF] text-black transition-colors duration-500 bg-grid-small-black/[0.3] dark:bg-[#121316] dark:text-white dark:bg-grid-small-white/[0.2]`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <>
            <div className='pointer-events-none absolute top-0 flex h-[152rem] w-full items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black md:h-[118rem] lg:h-[88rem]'></div>
            {children}
            <SpeedInsights />
          </>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId='G-DQMJQRSSK2' />
    </html>
  );
}
