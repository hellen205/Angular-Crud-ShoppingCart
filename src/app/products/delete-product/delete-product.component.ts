import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId = 0;

  constructor(private router : Router , private productService : ProductsService , private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data.id;

      this.productService.deleteProduct(this.productId).subscribe((data) => {
        console.log(data);
        this.router.navigate(['']);
      })
  });

}

}
