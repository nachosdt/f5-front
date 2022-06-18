import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-agotados',
  templateUrl: './productos-agotados.component.html',
  styleUrls: ['./productos-agotados.component.scss'],
})
export class ProductosAgotadosComponent implements OnInit {
  productsOutOfStock!: Producto[];

  constructor(private productsService: ProductosService, private title: Title) {
    if (this.productsService.productList.length) {
      this.productsOutOfStock = this.productsService.productList.filter(
        (product) => product.outOfStock
      );
    } else {
      // Get products from database
      this.productsService
        .getProducts()
        .then((data: Producto[]) => {
          this.productsOutOfStock = this.productsService.productList.filter(
            (product) => product.outOfStock
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  ngOnInit(): void {
    this.title.setTitle('Un mal Día | Productos agotados');
  }
}
