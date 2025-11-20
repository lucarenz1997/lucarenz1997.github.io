export interface Photo {
  src: string;
  alt: string;
  location?: string;
  year?: number;
}

export const PHOTOS: Photo[] = [
  {
    src: 'assets/photos/arvigrat.webp',
    alt: 'Sunset over swiss alps',
    location: 'Arvigrat',
    year: 2025,
  },
];
