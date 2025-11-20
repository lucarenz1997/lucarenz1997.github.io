export interface Video {
  title: string;
  youtubeId: string;
  location?: string;
  year?: number;
}

export const VIDEOS: Video[] = [
  {
    title: 'Norway Roadtrip',
    youtubeId: 'HV2KW7A8FVY',
    location: '',
    year: 2023,
  },
];
