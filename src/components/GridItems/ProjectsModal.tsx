'use client';

import { projects, statusStyles } from '@/components/data/projects';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export const ProjectsModal = ({ open, onCloseAction }: { open: boolean; onCloseAction: () => void }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onCloseAction}
      onClick={e => {
        if (e.target === dialogRef.current) onCloseAction();
      }}
      aria-label='Projects modal'
      className='m-auto max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-black/10 bg-white p-0 shadow-2xl backdrop:bg-black/50 dark:border-white/10 dark:bg-[#121316]'
    >
      <div className='p-6'>
        <div className='mb-5 flex items-center justify-between'>
          <h3 className='text-lg font-bold'>Projects</h3>
          <button
            type='button'
            onClick={onCloseAction}
            className='text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
          >
            ✕
          </button>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {projects.map(project => (
            <div
              key={project.title}
              className='flex flex-col justify-between rounded-xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/3'
            >
              <div>
                <div className='mb-2 flex items-center justify-between gap-2'>
                  <h4 className='text-base font-semibold'>{project.title}</h4>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className='text-sm text-neutral-600 dark:text-neutral-300'>{project.description}</p>
              </div>
              <div className='mt-3'>
                <div className='mb-3 flex flex-wrap gap-1.5'>
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className='rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-semibold text-sky-500 hover:underline'
                >
                  {project.linkLabel} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default ProjectsModal;
