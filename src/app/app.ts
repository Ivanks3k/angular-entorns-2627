import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './components/tarjeta/tarjeta';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Catàleg de productes');
  protected readonly products = inject(ProductService).getProducts();
}
