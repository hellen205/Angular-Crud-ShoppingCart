import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;
  productDetails : Product;
  constructor(private productService: ProductsService , private activatedRoute : ActivatedRoute , private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe((data) => {
        this.productDetails= data;
        console.log("Product" +this.productDetails);
      })
    })

  }

  updateProduct(form){

    const updateProduct = {
          id : form.value.id,
          categoryId : form.value.categoryId,
          productName : form.value.productName,
          description : form.value.description,
          rating : form.value.rating,
          price : form.value.price,
          productImg : '',
          isAvailable : form.value.isAvailable,
          color : form.value.color,
          review : form.value.review,

    }
    console.log(updateProduct);

    this.productService.updateProduct(this.productId , form.value).subscribe((data) => {
      console.log(data);
    })
    
  }

}
