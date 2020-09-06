import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  productsPath = "http://localhost:3000/products";

  getProducts(categoryId): Observable<Product[]> {
 
    let selectedPath = this.productsPath;
    if (categoryId && categoryId!='0')selectedPath += "?categoryId=" + categoryId;


    return this.http.get<Product[]>(selectedPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.productsPath,product,httpOptions);
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir Hata oluştu' + err.error.message
    }
    else {
      errorMessage = 'Sistemsel Bir Hata'
    }
    return throwError(errorMessage);
  }
}
