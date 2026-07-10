import { ThemeProvider } from '@/app/themeProviders';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { MotionConfig } from 'framer-motion';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
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
    <html suppressHydrationWarning lang='en'>
      <head>
        <meta name='darkreader-lock' content='' />
      </head>
      <body
        suppressHydrationWarning
        className={`${pop.className} bg-grid-pattern scroll-smooth bg-[#F5F2FF] text-black transition-colors duration-300 ease-in-out dark:bg-[#121316] dark:text-white`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <MotionConfig reducedMotion='user'>
            <>
              {children}
              <SpeedInsights />
            </>
          </MotionConfig>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId='G-DQMJQRSSK2' />
    </html>
  );
}
