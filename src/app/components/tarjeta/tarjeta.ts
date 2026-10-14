import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  protected readonly product = input<{ id: number; name: string; category: string; price: number }>();

  protected isFree() {
    return this.product().price === 0;
  }

  protected isOffer() {
    return this.product().price > 0 && this.product().price < 20;
  }

  protected isPremium() {
    return this.product().price > 100;
  }

  protected isFeatured() {
    return this.product().category === 'informàtica';
  }
}
