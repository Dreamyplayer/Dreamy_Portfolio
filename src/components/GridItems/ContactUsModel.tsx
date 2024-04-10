'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DragCloseDrawer } from '@/ui/DragCloseModel';
import { Input } from '@/ui/input';
import EyesFollow from '@/ui/TrackingCursor';

interface FormData {
  name: string;
  lastname?: string;
  email: string;
  message: string;
}

export const ContactModel = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    console.log('Updating', name, 'with value:', value);
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setError('');
      } else {
        const errorData = await response.json();
        setError(errorData || 'Something went wrong.');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError('Something went wrong. Please try again later.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className='grid cursor-GearBone grid-flow-col place-items-center'>
        <Image src={'/contactus.svg'} alt='' height={130} width={130} />

        <button onClick={() => setOpen(true)}>
          <EyesFollow />
        </button>
      </div>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className='mx-auto max-w-2xl space-y-4 text-neutral-400'>
          <div className='grid place-items-center'>
            <h4 className='text-4xl font-semibold text-black dark:text-white'>Contact Us</h4>
            <p className='text-sm text-neutral-700 dark:text-neutral-400'>{`Ready, set, submit! Let's chat.`}</p>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <Input onChange={handleChange} required id='firstname' name='name' placeholder='Full Name' type='text' />

            <Input
              onChange={handleChange}
              required
              id='email'
              name='email'
              placeholder='ex. dreamy@gmail.com'
              type='text'
            />
            <textarea
              onChange={handleChange}
              required
              id='message'
              name='message'
              placeholder='Write your message here...'
              className='dark:placeholder-text-neutral-600 duration-400 flex h-20 w-full resize-none rounded-md border-2 border-neutral-400 bg-gray-50 px-3 py-2  text-sm text-black
          transition placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400
           disabled:cursor-not-allowed disabled:opacity-50
           dark:border-none dark:bg-zinc-800 dark:text-white dark:placeholder:text-neutral-600 dark:focus-visible:ring-neutral-600'
            ></textarea>
            <button
              type='submit'
              className='group/btn relative mb-2 block h-8 w-full rounded-md bg-[#0070f3]  font-medium text-white'
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {error && <p className='text-red-500'>{error}</p>}
          {success && <p className='text-green-500'>Message sent successfully!</p>}{' '}
        </div>
      </DragCloseDrawer>
    </div>
  );
};
