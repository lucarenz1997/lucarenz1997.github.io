export interface Video {
  title: string;
  youtubeId: string; // only the ID, not the full URL
  location?: string;
  year?: number;
}

export const VIDEOS: Video[] = [
  {
    title: 'Sri Lanka Surf Trip',
    youtubeId: 'XXXXXXXXXXX',
    location: 'Ahangama, Sri Lanka',
    year: 2024,
  },
  {
    title: 'Patagonia Trekking Adventure',
    youtubeId: 'YYYYYYYYYYY',
    location: 'Patagonia, Chile/Argentina',
    year: 2023,
  },
  {
    title: 'Alpine Hikes & Lakes',
    youtubeId: 'ZZZZZZZZZZZ',
    location: 'Swiss Alps',
    year: 2022,
  },
];
