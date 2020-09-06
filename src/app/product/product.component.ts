import { Component, OnInit } from '@angular/core';
import { Product } from './product'
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor
    (
      private alertifyService: AlertifyService,
      private productService: ProductService,
      private acitvatedRoute: ActivatedRoute
    ) { }
  filterText = ""
  title = "Ürünler"
  products: Product[] = []

  ngOnInit(): void {

    this.acitvatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => this.products = data);
      
    });
  }

  addToCart(product) {
    this.alertifyService.success(product.name + " Sepete Eklendi")
  }

  public setFilterTextDataFromChild(data) {
    this.filterText = data;
  }
}
