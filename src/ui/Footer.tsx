const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Dreamy 🏴‍☠️ — Sailing the Grand Line, chasing the One Piece ⚓`;

  return (
    <footer className='relative z-30 mt-auto flex w-full flex-col items-center justify-center gap-1 border-t border-gray-300 bg-gray-100 px-4 py-2 text-center text-xs text-[#647488] sm:flex-row sm:py-0 lg:h-8 lg:flex-row lg:text-base dark:border-neutral-700 dark:bg-neutral-800/30'>
      <span className='cursor-pointer'>{footerText}</span>
      <span className='absolute top-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40'></span>
    </footer>
  );
};

export default Footer;
