import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {



  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {

  }

  updateProduct(): void {

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
