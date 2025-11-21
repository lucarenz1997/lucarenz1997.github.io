// src/app/sections/photography/photography-overview.component.ts
import { Component, HostListener } from '@angular/core';
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

  // show/hide info toggle (grid + lightbox)
  showInfo = false;

  // lightbox state
  selectedIndex: number | null = null;

  // swipe
  private touchStartX: number | null = null;
  private touchStartY: number | null = null;

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
    // close any open lightbox when filters change
    this.selectedIndex = null;
  }

  clearFilters() {
    this.activeCategories = [];
    this.selectedIndex = null;
  }

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
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

  get selectedPhoto(): Photo | null {
    if (this.selectedIndex === null) return null;
    const list = this.filteredPhotos;
    if (!list.length) return null;
    return list[this.selectedIndex] ?? null;
  }

  // ---- lightbox ----

  openPhoto(index: number) {
    this.selectedIndex = index;
  }

  closePhoto() {
    this.selectedIndex = null;
  }

  nextPhoto() {
    if (this.selectedIndex === null) return;
    const list = this.filteredPhotos;
    if (!list.length) return;
    this.selectedIndex = (this.selectedIndex + 1) % list.length;
  }

  prevPhoto() {
    if (this.selectedIndex === null) return;
    const list = this.filteredPhotos;
    if (!list.length) return;
    this.selectedIndex = (this.selectedIndex - 1 + list.length) % list.length;
  }

  // ----- keyboard nav -----
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (this.selectedIndex === null) return;

    if (event.key === 'Escape') {
      this.closePhoto();
    } else if (event.key === 'ArrowRight') {
      this.nextPhoto();
    } else if (event.key === 'ArrowLeft') {
      this.prevPhoto();
    }
  }

  // ----- swipe -----
  onTouchStart(event: TouchEvent) {
    if (!this.selectedPhoto) return;
    const touch = event.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
  }

  onTouchEnd(event: TouchEvent) {
    if (this.touchStartX === null || this.touchStartY === null) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - this.touchStartX;
    const dy = touch.clientY - this.touchStartY;

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const SWIPE_THRESHOLD = 50;

    if (absDx > SWIPE_THRESHOLD && absDx > absDy) {
      if (dx < 0) {
        this.nextPhoto();
      } else {
        this.prevPhoto();
      }
    }

    this.touchStartX = null;
    this.touchStartY = null;
  }
}
