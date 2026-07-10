'use client';

import { cn } from '@/utils/cn';
import type { Container, Engine } from '@tsparticles/engine';
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, useAnimation } from 'framer-motion';
import { useMemo } from 'react';
import { buildSparklesOptions } from './sparkles-options';

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

const particlesEngineInit = async (engine: Engine) => {
  await loadSlim(engine);
};

export const SparklesCore = (props: ParticlesProps) => {
  return (
    <ParticlesProvider init={particlesEngineInit}>
      <SparklesInner {...props} />
    </ParticlesProvider>
  );
};

const SparklesInner = (props: ParticlesProps) => {
  const { id, className, background, minSize, maxSize, speed, particleColor, particleDensity } = props;
  const controls = useAnimation();
  const { loaded: init } = useParticlesProvider();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  const options = useMemo(
    () => buildSparklesOptions({ background, minSize, maxSize, speed, particleColor, particleDensity }),
    [background, minSize, maxSize, speed, particleColor, particleDensity],
  );

  return (
    <motion.div animate={controls} className={cn('opacity-0', className)}>
      {init && (
        <Particles
          id={id || 'tsparticles'}
          className={cn('h-full w-full')}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </motion.div>
  );
};
