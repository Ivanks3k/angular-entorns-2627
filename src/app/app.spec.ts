import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render product badges based on their prices', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.product-card');

    expect(compiled.querySelector('h1')?.textContent).toContain('Catàleg de productes');
    expect(cards[0].querySelector('.premium')?.textContent).toContain('Premium');
    expect(cards[1].querySelector('.offer')?.textContent).toContain('Oferta');
    expect(cards[2].querySelector('.free')?.textContent).toContain('Gratuït');
    expect(cards[3].querySelector('.badge')).toBeNull();
    expect(cards[4].querySelector('.premium')?.textContent).toContain('Premium');
  });

  it('should highlight products in the computing category', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.product-card');

    expect(cards[0].querySelector('.featured')?.textContent).toContain('Destacat');
    expect(cards[2].querySelector('.featured')).toBeNull();
  });
});
