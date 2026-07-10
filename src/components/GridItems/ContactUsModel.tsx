'use client';

import EyesFollow from '@/ui/TrackingCursor';
import Image from 'next/image';
import { useState } from 'react';
import { ContactFormModal } from './ContactFormModal';

export const ContactModel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='cursor-GearBone grid grid-flow-col place-items-center'
        aria-label='Open contact form'
      >
        <Image src={'/lets_talk.svg'} alt='Lets Talk' className='h-32 w-32' height={130} width={130} />
        <EyesFollow />
      </button>
      <ContactFormModal open={open} onCloseAction={() => setOpen(false)} />
    </>
  );
};
