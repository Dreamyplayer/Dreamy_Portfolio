const Badges = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 md:flex-row lg:flex-row'>
      {['Open to Work', 'Looking for Job', 'Do Not Disturb'].map((text, i) => (
        <div
          key={i}
          className={`flex items-center justify-around gap-2 rounded-full border border-black/20 bg-white px-4 py-0.5 text-xs font-semibold shadow-lg dark:border-none dark:bg-transparent md:text-base lg:text-base ${text === 'Open to Work' ? 'text-[#00f48d]' : text === 'Looking for Job' ? 'text-sky-400' : 'text-[#F04747]'}`}
        >
          <span className='relative flex h-3 w-3'>
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full ${text === 'Open to Work' ? 'bg-[#00f48d]' : text === 'Looking for Job' ? 'bg-sky-400' : 'bg-[#F04747]'} opacity-75`}
            ></span>
            <span
              className={`relative inline-flex h-3 w-3 rounded-full ${text === 'Open to Work' ? 'bg-[#00f48d]' : text === 'Looking for Job' ? 'bg-sky-400' : 'bg-[#F04747]'}`}
            ></span>
          </span>
          {text}
          {text === 'Looking for Job' ? <HoverTooltip text='👀' tooltip='without interview if possible 🥹' /> : ''}
        </div>
      ))}
    </div>
  );
};

export default Badges;

export const HoverTooltip = ({ text, tooltip }: { text: string; tooltip: string }) => {
  return (
    <div className='group relative flex flex-col items-center'>
      {text}
      <div className='absolute top-0 mt-6 hidden flex-col items-center group-hover:flex'>
        <div className='-mb-2 h-3 w-3 rotate-45 bg-white'></div>
        <span className='relative z-10 whitespace-nowrap rounded-xl bg-white p-2 text-xs leading-none text-black shadow-lg'>
          {tooltip}
        </span>
      </div>
    </div>
  );
};
