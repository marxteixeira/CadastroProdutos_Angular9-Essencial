import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  //product: Product = {} as Product;
  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //const id = '1'
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      const id = +idParam;
      this.productService.readById(id).subscribe(product => {
        this.product = product;
      });
    } else {
      // Lidar com o caso em que o parâmetro 'id' é nulo, se necessário
      console.error('ID is null');
    }

  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluído com sucesso");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
