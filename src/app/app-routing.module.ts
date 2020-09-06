import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import { ProductAddReactiveFormsComponent } from './product/product-add-reactive-forms/product-add-reactive-forms.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'product-add-forms',component:ProductAddFormsComponent},
  {path:'product-add-reactive-forms',component:ProductAddReactiveFormsComponent},
  {path:'products/category/:categoryId',component:ProductComponent },
  {path:'',redirectTo:'products/category/0',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
