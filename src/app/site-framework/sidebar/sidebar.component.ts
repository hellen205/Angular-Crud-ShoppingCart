import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  data : any;
  categoryList : any;

  constructor( private productService : ProductsService) { }

  ngOnInit() {
   this.productService.getCategories(this.data).subscribe((data) => {
     this.categoryList = data;
     console.log(data);
   })
  }

}

