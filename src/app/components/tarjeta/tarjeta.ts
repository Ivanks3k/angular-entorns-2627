import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  readonly product = input.required<Product>();

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
