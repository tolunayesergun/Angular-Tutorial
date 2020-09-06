import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-reactive-forms',
  templateUrl: './product-add-reactive-forms.component.html',
  styleUrls: ['./product-add-reactive-forms.component.css']
})
export class ProductAddReactiveFormsComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder
  ) { }
    
  productAddForm:FormGroup;
  product:Product=new Product();
  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["",Validators.required],
      desc:["",Validators.required],
      imgUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required],
    });
  }

  ngOnInit(): void {
  }

  add(){
    if(this.productAddForm.valid){
      this.product =Object.assign({},this.productAddForm.value)
    }
  }
}
