import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/products";

  

  constructor(private http : HttpClient) { }

  getAllProduct(){
    return this.http.get(this.url);
  }

  

  getCategories(data){
    const url = "http://localhost:3000/categories";
    return this.http.get(url , data);
  }

  createProduct(data) : Observable<Product> {
    return this.http.post<Product>(this.url , data); //returns an observable 
  }

  viewProduct(productId) : Observable<Product>{
    const url = "http://localhost:3000/products/" + productId ;
    return this.http.get<Product>(url);
  }

  updateProduct(productId , data) : Observable<Product>{
    const url = "http://localhost:3000/products/" + productId;
    return this.http.put<Product>(url , data);
  }

  deleteProduct(productId)  : Observable<Product>{
    const url = "http://localhost:3000/products/" + productId
    return this.http.delete<Product>(url);
  }

  searchCategoryProducts(categoryId) : Observable<Product> {
    const url = "http://localhost:3000/products?categoryId="+categoryId;
    return this.http.get<Product>(url);
  }

  searchDateProducts(dateParam) : Observable<Product> {
    const url = "http://localhost:3000/products/date="+dateParam;
    return this.http.get<Product>(url);
  }
}
