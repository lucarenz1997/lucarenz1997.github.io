import { Component, HostListener } from '@angular/core';
import { PHOTOS, Photo } from '../../data/photo';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
})
export class PhotographyComponent {
  photos: readonly Photo[] = PHOTOS;

  // 🔹 list of all existing categories (i18n keys)
  categories: string[] = [];

  // 🔹 active filters (multi-select)
  activeCategories: string[] = [];

  selectedIndex: number | null = null;

  // swipe detection
  private touchStartX: number | null = null;
  private touchStartY: number | null = null;

  constructor() {
    this.categories = this.buildCategories(this.photos);
  }

  /** collect all unique category keys from all photos */
  private buildCategories(photos: readonly Photo[]): string[] {
    const set = new Set<string>();
    photos.forEach((p) => {
      p.categories?.forEach((cat) => set.add(cat));
    });
    return Array.from(set);
  }

  /** photos filtered by selected categories (OR logic) */
  get filteredPhotos(): readonly Photo[] {
    // no active filters → show all
    if (!this.activeCategories.length) return this.photos;

    return this.photos.filter((p) => {
      if (!p.categories || !p.categories.length) return false;
      // OR: photo matches if any of its categories is active
      return p.categories.some((cat) => this.activeCategories.includes(cat));
    });
  }

  /** current photo for lightbox, based on filtered list */
  get selectedPhoto(): Photo | null {
    if (this.selectedIndex === null) return null;
    const list = this.filteredPhotos;
    if (!list.length) return null;
    return list[this.selectedIndex] ?? null;
  }

  /** "All" button → clear all filters */
  clearFilters() {
    this.activeCategories = [];
    this.selectedIndex = null;
  }

  /** toggle one category on/off */
  toggleCategory(category: string) {
    if (this.activeCategories.includes(category)) {
      this.activeCategories = this.activeCategories.filter(
        (c) => c !== category
      );
    } else {
      this.activeCategories = [...this.activeCategories, category];
    }
    this.selectedIndex = null; // close lightbox when filters change
  }

  isCategoryActive(category: string): boolean {
    return this.activeCategories.includes(category);
  }

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

  /* -------------- SWIPE HANDLERS -------------- */

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
    const SWIPE_THRESHOLD = 50; // px

    // horizontal swipe that dominates vertical movement
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
