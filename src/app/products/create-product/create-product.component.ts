import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    let newProduct = {
      id : 11,
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

    console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe((data) => {
      console.log("new product:" +data);
    });
  }

}
