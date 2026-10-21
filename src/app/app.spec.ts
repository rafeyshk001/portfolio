import { TestBed } from '@angular/core/testing';
import { App } from './app';

// jsdom has no IntersectionObserver; scroll-reveal directives need a stub.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('App', () => {
  beforeEach(async () => {
    globalThis.IntersectionObserver ??= IntersectionObserverStub as unknown as typeof IntersectionObserver;
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the name in the hero', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Abu Rafey');
  });
});
