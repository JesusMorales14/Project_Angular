import { Component } from '@angular/core';
import { Home } from "../home/home";
import { ProductHome } from "./product-home/product-home";

@Component({
  selector: 'app-product',
  imports: [ProductHome],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

}
