import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList : any;

  constructor( private productService : ProductsService) { }

  ngOnInit() {
    this.productService.getAllProduct().subscribe((data) => {
      this.productList = data;
    })
  }

}
