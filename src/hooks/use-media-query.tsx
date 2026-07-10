'use client';

import { useSyncExternalStore } from 'react';

type Device = 'mobile' | 'tablet' | 'desktop';

type MediaState = {
  device: Device;
  width: number;
  height: number;
  pageWidth: number;
  pageHeight: number;
};

function getDevice(width: number): Device {
  if (width >= 300 && width <= 640) return 'mobile';
  if (width >= 641 && width <= 1024) return 'tablet';
  return 'desktop';
}

function readState(): MediaState {
  const width = window.innerWidth;
  return {
    device: getDevice(width),
    width,
    height: window.innerHeight,
    pageWidth: window.document.body.scrollWidth,
    pageHeight: window.document.body.scrollHeight,
  };
}

let cached: MediaState | undefined;

function subscribe(callback: () => void) {
  const onResize = () => callback();

  window.addEventListener('resize', onResize);

  return () => {
    window.removeEventListener('resize', onResize);
  };
}

function getSnapshot(): MediaState {
  const next = readState();

  if (
    cached &&
    cached.width === next.width &&
    cached.height === next.height &&
    cached.pageWidth === next.pageWidth &&
    cached.pageHeight === next.pageHeight
  ) {
    return cached;
  }

  cached = next;
  return cached;
}

// SSR has no window — return a neutral default, resolved on hydration.
const SERVER_SNAPSHOT: MediaState = {
  device: 'desktop',
  width: 0,
  height: 0,
  pageWidth: 0,
  pageHeight: 0,
};

function getServerSnapshot(): MediaState {
  return SERVER_SNAPSHOT;
}

export default function useMediaQuery() {
  const { device, width, height, pageWidth, pageHeight } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return {
    device,
    width,
    height,
    pageWidth,
    pageHeight,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };
}
