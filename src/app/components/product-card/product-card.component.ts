import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('producto') producto!: Producto;
  @Input('showButtons') showButtons!: boolean;
  @Output('edit') edit: EventEmitter<Producto> = new EventEmitter<Producto>();
  @Output('delete') delete: EventEmitter<Producto> =
    new EventEmitter<Producto>();

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {}

  editProduct(product: Producto) {
    this.edit.emit(product);
    /* console.log(product); */
  }

  deleteProduct(product: Producto) {
    this.delete.emit(product);
    /* console.log(product); */
  }

  outOfStockProduct(product: Producto) {
    product.outOfStock = !product.outOfStock;
    this.productoService
      .updateProduct(product)
      .then((response: any) => {
        /* console.log(response); */
        if (!response.error) {
        } else {
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
