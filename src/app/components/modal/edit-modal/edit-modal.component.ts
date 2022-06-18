import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  showErrorMessage: boolean = false;
  errorMessage: string = '';
  @Input('producto') producto!: Producto;
  @Output('closeModal') closeModal: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('image') image!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {}

  editProduct() {
    let update = new Producto(
      this.producto.id,
      this.description.nativeElement.value,
      this.producto.source,
      this.image.nativeElement.value,
      this.producto.url,
      this.producto.category,
      this.producto.subcategory,
      this.producto.type,
      this.producto.outOfStock
    );
    /* console.log(update); */
    this.productoService
      .updateProduct(update)
      .then((response: any) => {
        /* console.log(response); */
        if (!response.error) {
          this.close({ modified: true, product: update });
        } else {
          this.showErrorMessage = true;
          this.errorMessage = response.mensaje;
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  close(value: any) {
    this.errorMessage = '';
    this.showErrorMessage = false;
    this.closeModal.emit(value);
  }
}
