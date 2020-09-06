import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Category} from './category'
import { CategoryService } from '../services/category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  
  @Output()event:EventEmitter<string>=new EventEmitter();
  
  @Input() filterText: string;

 

  constructor(private ctegoryService:CategoryService) { }
  title ="Kategoriler";
  categories:Category[]=[];
  categoryName:string="Tüm Ürünler";
  ngOnInit(): void {
    this.ctegoryService.getCategories().subscribe(data=>this.categories=data);
  }

  sendToParent(newValue) {
    this.event.emit(this.filterText);
   }
   
   changeCategoryName(cName){
     this.categoryName=cName;
   }

}
