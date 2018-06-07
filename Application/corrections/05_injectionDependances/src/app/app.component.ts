import { Component, Inject } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/ProductService';
import { CustomerService } from './services/CustomerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public  total=0;
  public products:Product[];

  constructor(private productService:ProductService, private customerService:CustomerService, @Inject('annonce') public title:string){
    this.products = productService.getProducts();
  }

  getTotal(): number {
    return this.customerService.getTotal();
  }

  updatePrice(event) {
    this.customerService.addProduct(event);
    this.productService.decreaseStock(event.title);
    this.total=this.customerService.getTotal();
  }

  isAvailable(title: string): boolean {
    return this.productService.isAvailable(title);
  }
}
