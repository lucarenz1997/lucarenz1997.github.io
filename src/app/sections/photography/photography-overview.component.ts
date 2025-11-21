// src/app/sections/photography/photography-overview.component.ts
import { Component } from '@angular/core';
import { ALBUMS, PhotoAlbum } from '../../data/photo-albums';
import { PHOTOS, Photo } from '../../data/photo';

interface PhotoAlbumWithCount extends PhotoAlbum {
  photoCount: number;
}

@Component({
  selector: 'app-photography-overview',
  templateUrl: './photography-overview.component.html',
  styleUrls: ['./photography-overview.component.scss'],
})
export class PhotographyOverviewComponent {
  // base data
  private allPhotos: readonly Photo[] = PHOTOS;

  albums: PhotoAlbumWithCount[] = this.buildAlbumsWithCounts(
    ALBUMS,
    this.allPhotos
  );

  // global categories across *all* photos
  categories: string[] = this.buildCategories(this.allPhotos);
  activeCategories: string[] = [];

  // ----- albums -----
  private buildAlbumsWithCounts(
    albums: readonly PhotoAlbum[],
    photos: readonly Photo[]
  ): PhotoAlbumWithCount[] {
    return [...albums]
      .map((album) => {
        const photoCount = photos.filter((p) => p.albumId === album.id).length;
        return { ...album, photoCount };
      })
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0)); // newest album first
  }

  // ----- categories for "All photos" -----
  private buildCategories(photos: readonly Photo[]): string[] {
    const set = new Set<string>();
    photos.forEach((p) => p.categories?.forEach((c) => set.add(c)));
    return Array.from(set);
  }

  isCategoryActive(cat: string): boolean {
    return this.activeCategories.includes(cat);
  }

  toggleCategory(cat: string) {
    if (this.isCategoryActive(cat)) {
      this.activeCategories = this.activeCategories.filter((c) => c !== cat);
    } else {
      this.activeCategories = [...this.activeCategories, cat];
    }
  }

  clearFilters() {
    this.activeCategories = [];
  }

  // ----- filtered photos for overview grid -----
  get filteredPhotos(): readonly Photo[] {
    let list = [...this.allPhotos];

    if (this.activeCategories.length) {
      list = list.filter((p) =>
        p.categories?.some((cat) => this.activeCategories.includes(cat))
      );
    }

    // nice ordering: newest first by year/month
    return list.sort((a, b) => {
      const ay = a.year ?? 0;
      const by = b.year ?? 0;
      if (ay !== by) return by - ay;

      const am = a.month ?? 0;
      const bm = b.month ?? 0;
      return bm - am;
    });
  }
}
