'use client';

import useMediaQuery from '@/hooks/use-media-query';

export default function Background() {
  const { pageHeight } = useMediaQuery();

  const dynamicHeight = typeof pageHeight === 'number' ? pageHeight + 150 : 0;

  return (
    <div
      className={`pointer-events-none absolute top-0 flex w-full items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black`}
      style={{
        height: `${dynamicHeight}px`,
      }}
    />
  );
}
