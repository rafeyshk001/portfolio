import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

export type RevealVariant = 'up' | 'left' | 'right' | 'zoom' | '';

/** Fades/slides an element in the first time it scrolls into view. */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[attr.data-reveal]': 'appReveal() || "up"',
    '[style.--reveal-delay]': 'revealDelay() + "ms"',
  },
})
export class Reveal {
  readonly appReveal = input<RevealVariant>('');
  readonly revealDelay = input(0);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
