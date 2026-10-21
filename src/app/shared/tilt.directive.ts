import { Directive, ElementRef, inject, input } from '@angular/core';

/** 3D tilt + cursor spotlight. Exposes --rx, --ry, --mx, --my CSS variables. */
@Directive({
  selector: '[appTilt]',
  host: {
    '(pointermove)': 'onMove($event)',
    '(pointerleave)': 'reset()',
  },
})
export class Tilt {
  readonly maxTilt = input(8);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected onMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    const rect = this.el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const max = this.maxTilt();
    this.el.style.setProperty('--rx', `${(0.5 - y) * max}deg`);
    this.el.style.setProperty('--ry', `${(x - 0.5) * max}deg`);
    this.el.style.setProperty('--mx', `${x * 100}%`);
    this.el.style.setProperty('--my', `${y * 100}%`);
  }

  protected reset(): void {
    this.el.style.setProperty('--rx', '0deg');
    this.el.style.setProperty('--ry', '0deg');
  }
}
