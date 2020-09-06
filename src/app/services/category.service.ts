import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http'
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  productsPath = "http://localhost:3000/categories";

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.productsPath);
  }
}