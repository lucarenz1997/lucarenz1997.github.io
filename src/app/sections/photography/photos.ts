export interface Photo {
  src: string; // path under /assets
  alt: string;
  location?: string;
  year?: number;
}

export const PHOTOS: Photo[] = [
  {
    src: 'assets/photos/arvigrat.JPG',
    alt: 'Sunrise over jagged Patagonia peaks',
    location: 'Patagonia',
    year: 2023,
  },
];
