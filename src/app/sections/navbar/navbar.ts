import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/resume.data';
import { Icon } from '../../shared/icon';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);
  protected readonly active = signal('');

  constructor() {
    const doc = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);

    // Lock page scroll while the mobile menu is open.
    effect(() => {
      doc.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });

    afterNextRender(() => {
      this.onScroll();
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      doc.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    this.scrolled.set(el.scrollTop > 24);
    this.progress.set(max > 0 ? el.scrollTop / max : 0);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
