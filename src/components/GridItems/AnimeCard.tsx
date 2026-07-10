import AnimeCardClient from './AnimeCardClient';

type AnimeResult = {
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

const titles = [
  'One Piece',
  'Solo Leveling',
  'Jujutsu Kaisen',
  'Demon Slayer',
  "Hell's Paradise",
  'Death Note',
  'Sakamoto Days',
  'From Old Country Bumpkin to Master Swordsman',
];

async function fetchAnime(title: string): Promise<AnimeResult | null> {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`, {
      next: {
        revalidate: 86400,
      },
    });

    if (!res.ok) return null;

    const data = await res.json();

    return data.data?.[0] ?? null;
  } catch {
    return null;
  }
}

export default async function AnimeCard() {
  const results = await Promise.all(titles.map(fetchAnime));

  const anime = results.filter((a): a is AnimeResult => a !== null);

  return <AnimeCardClient anime={anime} />;
}
