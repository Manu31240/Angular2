import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu/menu.component';

import { ProductService } from './services/ProductService';
import { CustomerService } from './services/CustomerService';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ProductService,
  CustomerService,
  {provide: 'annonce', useValue: 'Yesssss'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
