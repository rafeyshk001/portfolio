import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';
const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  readonly theme = signal<Theme>(this.initialTheme());

  constructor() {
    this.apply(this.theme());
  }

  /** Toggles the theme with a circular reveal originating from the clicked element. */
  toggle(event?: MouseEvent): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    const reduceMotion = this.matches('(prefers-reduced-motion: reduce)');

    if (!this.doc.startViewTransition || reduceMotion) {
      this.apply(next);
      return;
    }

    const x = event?.clientX ?? innerWidth / 2;
    const y = event?.clientY ?? 0;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = this.doc.startViewTransition(() => this.apply(next));
    transition.ready.then(() => {
      this.doc.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' },
      );
    });
  }

  private apply(theme: Theme): void {
    this.theme.set(theme);
    this.doc.documentElement.dataset['theme'] = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable */
    }
  }

  private initialTheme(): Theme {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      /* storage unavailable */
    }
    return this.matches('(prefers-color-scheme: light)') ? 'light' : 'dark';
  }

  private matches(query: string): boolean {
    return typeof matchMedia === 'function' && matchMedia(query).matches;
  }
}
