import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      { id: 1, name: 'Portàtil', category: 'informàtica', price: 899 },
      { id: 2, name: 'Auriculars', category: 'informàtica', price: 15 },
      { id: 3, name: 'Llibre', category: 'lectura', price: 0 },
      { id: 4, name: 'Teclat', category: 'informàtica', price: 20 },
      { id: 5, name: 'Monitor', category: 'informàtica', price: 120 },
    ];
  }
}
