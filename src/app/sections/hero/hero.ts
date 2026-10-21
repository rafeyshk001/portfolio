import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { PROFILE } from '../../data/resume.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  host: { '(pointermove)': 'onPointerMove($event)' },
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly typed = signal('');
  protected readonly orbit = ['Angular', '.NET', 'Node.js', 'C#', 'SQL', 'RxJS'];

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
    afterNextRender(() => this.startTyping());
  }

  protected onPointerMove(event: PointerEvent): void {
    const rect = this.host.getBoundingClientRect();
    this.host.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    this.host.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  private startTyping(): void {
    const roles = this.profile.roles;
    let role = 0;
    let length = 0;
    let deleting = false;

    const tick = () => {
      const word = roles[role];
      length += deleting ? -1 : 1;
      this.typed.set(word.slice(0, length));

      let delay = deleting ? 45 : 90;
      if (!deleting && length === word.length) {
        deleting = true;
        delay = 1900;
      } else if (deleting && length === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        delay = 380;
      }
      this.timer = setTimeout(tick, delay);
    };

    this.timer = setTimeout(tick, 1100);
  }
}
