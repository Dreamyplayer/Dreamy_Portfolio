'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const ContactFormModal = ({ open, onCloseAction }: { open: boolean; onCloseAction: () => void }) => {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!open) return null;

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4' onClick={onCloseAction}>
      <div
        className='w-full max-w-md rounded-xl border border-black/10 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#121316]'
        onClick={e => e.stopPropagation()}
      >
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-lg font-bold'>{`Let's talk`}</h3>
          <button
            type='button'
            onClick={onCloseAction}
            className='text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
          >
            ✕
          </button>
        </div>

        {status === 'sent' ? (
          <p className='py-6 text-center text-sm font-medium text-[#00f48d]'>
            Thanks! I&apos;ll get back to you soon. 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
              required
              type='text'
              placeholder='Your name'
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className='rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-sky-400 dark:border-white/10'
            />
            <input
              required
              type='email'
              placeholder='Your email'
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className='rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-sky-400 dark:border-white/10'
            />
            <textarea
              required
              rows={4}
              placeholder='Your message'
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className='rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-sky-400 dark:border-white/10'
            />
            <button
              type='submit'
              disabled={status === 'sending'}
              className='mt-1 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:opacity-60'
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className='text-xs font-medium text-[#F04747]'>Something went wrong. Try again in a bit.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
