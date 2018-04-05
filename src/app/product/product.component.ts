import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private imgUrl: string = "http://placehold.it/800x300";
  constructor(private productServices: ProductService) { }

  ngOnInit() {
    this.products = this.productServices.getProducts();
  }

}

