import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

/** Animates a number from 0 to the target once it scrolls into view. */
@Directive({ selector: '[appCountUp]' })
export class CountUp {
  readonly appCountUp = input.required<number>();
  readonly duration = input(1600);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);
    let frame = 0;

    afterNextRender(() => {
      el.textContent = '0';
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          const target = this.appCountUp();
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / this.duration(), 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = String(Math.round(target * eased));
            if (t < 1) frame = requestAnimationFrame(step);
          };
          frame = requestAnimationFrame(step);
        },
        { threshold: 0.5 },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => {
        observer.disconnect();
        cancelAnimationFrame(frame);
      });
    });
  }
}
