export interface PhotoAlbum {
  id: PhotoAlbumEnum;
  titleKey: string;
  descriptionKey?: string;
  coverSrc: string; // hero
  year?: number;
  location?: string;
}

export enum PhotoAlbumEnum {
  SwissMountain = 'switzerland-mountains',
  Indonesia = 'indonesia',
}

export const ALBUMS: readonly PhotoAlbum[] = [
  {
    id: PhotoAlbumEnum.SwissMountain,
    titleKey: 'photography.album.switzerlandMountains.title',
    descriptionKey: 'photography.album.switzerlandMountains.description',
    coverSrc: 'assets/photos/arvigrat03.webp',
    year: 2025,
    location: 'Switzerland',
  },
  {
    id: PhotoAlbumEnum.Indonesia,
    titleKey: 'photography.album.indonesia.title',
    descriptionKey: 'photography.album.indonesia.description',
    coverSrc: 'assets/photos/indo01.webp',
    year: 2024,
    location: 'Indonesia',
  },
];
