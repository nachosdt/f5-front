import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  showErrorMessage: boolean = false;
  errorMessage: string = '';
  @Input('producto') producto!: Producto;
  @Output('closeModal') closeModal: EventEmitter<any> = new EventEmitter<any>();
  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {}

  deleteProduct() {
    /* console.log(this.producto); */
    this.productoService
      .deleteProduct(this.producto.id)
      .then((response: any) => {
        /* console.log(response); */
        if (!response.error) {
          this.close({ deleted: true, id: this.producto.id });
        } else {
          this.showErrorMessage = true;
          this.errorMessage = response.mensaje;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  close(value: any) {
    this.errorMessage = '';
    this.showErrorMessage = false;
    this.closeModal.emit(value);
  }
}
