import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/resume.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { Tilt } from '../../shared/tilt.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Icon, Tilt],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly name = signal('');
  protected readonly message = signal('');
  protected readonly copied = signal(false);
  private copyTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.copyTimer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(false), 2200);
    } catch {
      location.href = `mailto:${this.profile.email}`;
    }
  }

  /** No backend needed: opens the visitor's mail client with the message pre-filled. */
  protected send(event: Event): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Hello from ${this.name() || 'your portfolio'}`);
    const body = encodeURIComponent(this.message());
    location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
