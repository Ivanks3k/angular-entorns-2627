import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './components/tarjeta/tarjeta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Catàleg de productes');
  protected readonly products = [
    { id: 1, name: 'Portàtil', category: 'informàtica', price: 899 },
    { id: 2, name: 'Auriculars', category: 'informàtica', price: 15 },
    { id: 3, name: 'Llibre', category: 'lectura', price: 0 },
    { id: 4, name: 'Teclat', category: 'informàtica', price: 20 },
    { id: 5, name: 'Monitor', category: 'informàtica', price: 120 },
  ];
}
