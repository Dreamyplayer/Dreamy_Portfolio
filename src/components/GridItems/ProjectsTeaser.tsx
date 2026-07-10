'use client';

import { useState } from 'react';

import { ProjectsModal } from './ProjectsModal';

export const ProjectsTeaser = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='group flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center'
      >
        <p className='text-3xl font-bold'>5</p>
        <p className='text-sm font-medium text-neutral-600 dark:text-neutral-300'>Projects Shipped</p>
        <span className='rounded-md bg-sky-500 px-3 py-1 text-xs font-semibold text-white transition group-hover:bg-sky-600 cursor-pointer'>
          View All Projects
        </span>
      </button>
      <ProjectsModal open={open} onCloseAction={() => setOpen(false)} />
    </>
  );
};

export default ProjectsTeaser;
