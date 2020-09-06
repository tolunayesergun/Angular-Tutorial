import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Category } from './category'
import { CategoryService } from '../services/category.service'
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  @Output() event: EventEmitter<string> = new EventEmitter();

  @Input() filterText: string;

  constructor(private ctegoryService: CategoryService, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.filterText="";
      this.sendToParent()
      if (this.router.url.substring(19)==="0") 
      {
        this.categoryName = "Tüm Ürünler";
      }
    });
  }
  title = "Kategoriler";
  categories: Category[] = [];
  categoryName: string = "Tüm Ürünler";
  ngOnInit(): void {
    this.ctegoryService.getCategories().subscribe(data => this.categories = data);

  }

  sendToParent() {
    this.event.emit(this.filterText);
  }

  changeCategoryName(cName) {
    this.categoryName = cName;

  }

}
