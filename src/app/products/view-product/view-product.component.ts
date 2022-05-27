import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

productId = 0;
productDetails : any;

  constructor(private productService : ProductsService, private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((data) => {
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe((data) => {
        this.productDetails = data;

      })
    });

    


   

    }
  

}
