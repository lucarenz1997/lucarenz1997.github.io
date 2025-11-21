// src/app/sections/photography/photography-album.component.ts
import { Component, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PHOTOS, Photo } from '../../data/photo';
import { ALBUMS, PhotoAlbum } from '../../data/photo-albums';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photography-album',
  templateUrl: './photography-album.component.html',
  styleUrls: ['./photography-album.component.scss'],
})
export class PhotographyAlbumComponent implements OnDestroy {
  photos: readonly Photo[] = PHOTOS;
  albums: readonly PhotoAlbum[] = ALBUMS;

  album: PhotoAlbum | null = null;
  albumPhotos: Photo[] = [];

  categories: string[] = [];
  activeCategories: string[] = [];

  selectedIndex: number | null = null;

  // NEW: global info toggle for this album
  showInfo = false;

  private routeSub?: Subscription;

  // swipe
  private touchStartX: number | null = null;
  private touchStartY: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
      const albumId = params.get('albumId');
      if (!albumId) {
        this.router.navigate(['/photography']);
        return;
      }
      this.loadAlbum(albumId);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  private loadAlbum(albumId: string) {
    this.album = this.albums.find((a) => a.id === albumId) ?? null;
    if (!this.album) {
      // unknown album -> go back to overview
      this.router.navigate(['/photography']);
      return;
    }

    // photos for this album
    this.albumPhotos = this.photos
      .filter((p) => p.albumId === albumId)
      .sort((a, b) => this.comparePhotoDate(b, a)); // newest first

    // categories for this album
    const set = new Set<string>();
    this.albumPhotos.forEach((p) => p.categories?.forEach((c) => set.add(c)));
    this.categories = Array.from(set);

    // reset filters & lightbox
    this.activeCategories = [];
    this.selectedIndex = null;
  }

  private comparePhotoDate(a: Photo, b: Photo): number {
    const ay = a.year ?? 0;
    const by = b.year ?? 0;
    if (ay !== by) return ay - by;

    const am = a.month ?? 0;
    const bm = b.month ?? 0;
    return am - bm;
  }

  // ----- derived list -----

  get filteredPhotos(): readonly Photo[] {
    let list = [...this.albumPhotos];

    if (this.activeCategories.length) {
      list = list.filter((p) =>
        p.categories?.some((cat) => this.activeCategories.includes(cat))
      );
    }
    return list;
  }

  get selectedPhoto(): Photo | null {
    if (this.selectedIndex === null) return null;
    const list = this.filteredPhotos;
    if (!list.length) return null;
    return list[this.selectedIndex] ?? null;
  }

  // ----- category filters -----

  isCategoryActive(cat: string): boolean {
    return this.activeCategories.includes(cat);
  }

  toggleCategory(cat: string) {
    if (this.isCategoryActive(cat)) {
      this.activeCategories = this.activeCategories.filter((c) => c !== cat);
    } else {
      this.activeCategories = [...this.activeCategories, cat];
    }
    this.selectedIndex = null;
  }

  clearFilters() {
    this.activeCategories = [];
    this.selectedIndex = null;
  }

  // NEW: info toggle
  toggleShowInfo() {
    this.showInfo = !this.showInfo;
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

  // ----- lightbox -----

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
