import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Product, ProductService, Comment } from 'app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let productID: number = this.routeInfo.snapshot.params['productID'];
    this.product = this.productService.getProduct(productID);
    this.comments = this.productService.getCommentsForProductId(productID);
  }
}
