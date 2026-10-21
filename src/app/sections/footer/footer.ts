import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/resume.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
  protected readonly showTop = signal(false);

  protected onScroll(): void {
    this.showTop.set(scrollY > 600);
  }

  protected toTop(): void {
    scrollTo({ top: 0, behavior: 'smooth' });
  }
}
