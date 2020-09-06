import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms',
  templateUrl: './product-add-forms.component.html',
  styleUrls: ['./product-add-forms.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddFormsComponent implements OnInit {

  constructor(
    private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService
  ) { }
  model :Product= new Product();
  categories : Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {this.categories=data});
  }

  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{this.alertifyService.success(data.name+" Başarıyla Eklendi")})
  }
}
