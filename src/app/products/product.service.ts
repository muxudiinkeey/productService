import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct  [] = [

    
  ]

  constructor() { }
}
