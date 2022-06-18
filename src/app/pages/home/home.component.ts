import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allProducts!: Producto[];
  productsToShow!: Producto[];
  page: number = 1;
  pages!: number;
  buscador = new FormControl('');
  selectedProduct!: Producto;
  constructor(private productService: ProductosService, private title: Title) {
    // Get products from database
    this.productService
      .getProducts()
      .then((data: Producto[]) => {
        this.allProducts = data;
        this.productsToShow = this.allProducts.slice(0, 42);
        this.pages = Math.ceil(this.allProducts.length / 42);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.title.setTitle('Home | Todos los productos');
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.productsToShow = this.allProducts.slice(
        (this.page - 1) * 42,
        this.page * 42
      );
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }

  nextPage() {
    if (this.page < this.allProducts.length / 42) {
      this.page++;
      this.productsToShow = this.allProducts.slice(
        (this.page - 1) * 42,
        this.page * 42
      );
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }

  search(termino: string) {
    if (!termino) {
      this.showProducts();
    } else {
      this.productsToShow = this.allProducts.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(termino.toLowerCase());
      });
    }
  }

  checkEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search(this.buscador.value);
    }
  }

  openEditProductModal(product: Producto) {
    this.selectedProduct = product;
    let modal = document.getElementById('edit');
    modal!.classList.remove('hidden');
    modal!.classList.add('show');
  }

  openDeleteProductModal(product: Producto) {
    this.selectedProduct = product;
    let modal = document.getElementById('delete');
    modal!.classList.remove('hidden');
    modal!.classList.add('show');
  }

  closeDeleteModal(event: any) {
    if (event.deleted) {
      this.allProducts = this.productService.productList;
      this.showProducts();
    }
    let modal = document.getElementById('delete');
    modal!.classList.remove('show');
    modal!.classList.add('hidden');
  }

  closeEditModal(event: any) {
    if (event.modified) {
      this.allProducts = this.productService.productList;
      this.showProducts();
    }
    let modal = document.getElementById('edit');
    modal!.classList.remove('show');
    modal!.classList.add('hidden');
  }

  showProducts() {
    this.productsToShow = this.allProducts.slice(0, 42);
    this.page = 1;
    this.pages = Math.ceil(this.allProducts.length / 42);
  }
}
