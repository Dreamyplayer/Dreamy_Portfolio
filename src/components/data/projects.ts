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
