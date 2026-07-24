export type Status = 'Live' | 'In Development' | 'Concept';

export type Project = {
  title: string;
  description: string;
  stack: string[];
  status: Status;
  link: string;
  linkLabel: string;
};

export const statusStyles: Record<Status, string> = {
  Live: 'text-[#00f48d] border-[#00f48d]/30 bg-[#00f48d]/10',
  'In Development': 'text-sky-400 border-sky-400/30 bg-sky-400/10',
  Concept: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
};

// TODO(Dreamy): swap `link` with real live/demo URLs once deployed publicly.
export const projects: Project[] = [
  {
    title: 'AnimeX',
    description:
      'Full-stack anime streaming platform with HLS proxying, multi-provider scraping (Zoro, AllAnime, KissKH), subtitle support, and a Cloudflare Worker layer to dodge CDN blocks and quota limits.',
    stack: ['Next.js', 'Cloudflare Workers', 'HLS', 'Vercel'],
    status: 'Live',
    link: 'https://github.com/Dreamyplayer',
    linkLabel: 'View Project',
  },
  {
    title: 'Lootly',
    description:
      'Link-in-bio platform for Instagram creators with affiliate link tracking and click analytics, built on a modern edge-first stack.',
    stack: ['Next.js 15', 'Turso', 'Drizzle', 'Better Auth', 'Cloudflare R2', 'Redis'],
    status: 'In Development',
    link: 'https://github.com/Dreamyplayer',
    linkLabel: 'View Project',
  },
  {
    title: 'Ride-Hailing Super App',
    description:
      'Rapido-inspired bike taxi, food delivery, and parcel delivery platform with shared captains. Business plan and MVP feature set locked for a Hyderabad/Bangalore-first launch.',
    stack: ['Next.js', 'Business Planning', 'MVP Design'],
    status: 'Concept',
    link: 'https://github.com/Dreamyplayer',
    linkLabel: 'View Project',
  },
  {
    title: 'MittiLab',
    description:
      'Organic farming knowledge platform with an MDX encyclopedia pipeline, Typesense search, and Gemini AI integration with rate-limit fallback handling.',
    stack: ['Next.js', 'MDX', 'Typesense', 'Gemini AI'],
    status: 'Live',
    link: 'https://github.com/Dreamyplayer',
    linkLabel: 'View Project',
  },
  {
    title: 'Private Meeting Assistant',
    description:
      'Windows desktop app with an invisible AI overlay excluded from screen capture. Live transcription via Groq Whisper, screen/vision context via Tesseract, and Gemini/Ollama-powered assistance.',
    stack: ['Electron', 'React', 'Groq Whisper', 'Ollama', 'Gemini'],
    status: 'Concept',
    link: 'https://github.com/Dreamyplayer',
    linkLabel: 'View Project',
  },
];

export const adventures = [
  {
    emoji: '🏴‍☠️',
    title: 'Current Voyage',
    status: '🌊 Sailing',
    description:
      'Sailing through new ideas, experimenting with modern web technologies, and enjoying every challenge.',
  },
  {
    emoji: '⚔️',
    title: 'Current Arc',
    status: '📖 Ongoing',
    description:
      'Learning. Building. Experimenting. Preparing for whatever the next island brings.',
  },
  {
    emoji: '💪',
    title: 'Training My Haki',
    status: '⚡ Training',
    description:
      'Strengthening my frontend, backend, and problem-solving abilities—one challenge at a time.',
  },
  {
    emoji: '🌊',
    title: 'New Seas',
    status: '🧭 Exploring',
    description:
      'Discovering better ways to build fast, beautiful, and meaningful digital experiences.',
  },
  {
    emoji: '💰',
    title: 'Treasure Hunt',
    status: '🪙 Searching',
    description:
      'Collecting experience, mastering new skills, and enjoying the journey more than the destination.',
  },
  {
    emoji: '⭐',
    title: 'Rising Bounty',
    status: '📈 Leveling Up',
    description:
      'Every project, bug, and lesson adds to my experience—and maybe my bounty too.',
  },
  {
    emoji: '🗺️',
    title: 'Next Island',
    status: '🏝️ Arrived',
    description:
      'Every new technology feels like another island waiting to be explored.',
  },
  {
    emoji: '📖',
    title: 'Adventure Log',
    status: '✍️ Writing',
    description:
      'Recording each lesson, challenge, and victory as I continue my journey as a developer.',
  },
  {
    emoji: '🚢',
    title: 'Dream Bigger',
    status: '🚀 Full Speed',
    description:
      'Just another stop on the journey toward becoming a world-class software engineer.',
  },
  {
    emoji: '☀️',
    title: 'Gathering My Crew',
    status: '🤝 Recruiting',
    description:
      'Learning from great people, building meaningful things, and preparing for bigger adventures.',
  },
];
