import {Component} from '@angular/core';
//import {Product, ProductService} from '../../services/product-service';

@Component({
  selector: 'app', // <1>
  template: `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product Details</a>
    <router-outlet></router-outlet>
  `, // <3>
  styleUrls: ['app/components/application/application.css'], // <4>
})
export class ApplicationComponent {
  /*products: Array<Product> = []; // <1>

  constructor(private productService: ProductService) { // <2>
    this.products = this.productService.getProducts(); // <3>
  }*/
}



