import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = 'component-data-service';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

productS: IProduct []= [];


constructor (private ProductService: ProductService){}


 toggleImage(): void {
  this.showImage = !this.showImage;
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.productS = this.ProductService.getProducts();
}
}
