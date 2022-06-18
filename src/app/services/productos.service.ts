import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productList: Producto[] = [];
  constructor(private http: HttpClient) {}

  async getProducts(): Promise<Producto[]> {
    let url = 'http://localhost:3000/product';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe({
        next: (data: any) => {
          let response = this.objectToProduct(data.datos);
          this.productList = response;
          resolve(response);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  objectToProduct(objects: any[]) {
    let products: Producto[] = [];
    objects.forEach((object) => {
      let product = new Producto(
        object.idproduct,
        object.description,
        object.source,
        object.image,
        object.url,
        object.category,
        object.subcategory,
        object.class,
        object.outOfStock ? true : false
      );
      products.push(product);
    });
    return products;
  }

  async deleteProduct(id: string) {
    let url = 'http://localhost:3000/product?id=' + id;
    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe({
        next: (data: any) => {
          if (!data.error) {
            // Delete product from list
            this.productList = this.productList.filter(
              (product) => product.id !== id
            );
          }
          resolve(data);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  async updateProduct(modifiedProduct: Producto) {
    let url = 'http://localhost:3000/product';
    return new Promise((resolve, reject) => {
      this.http.put(url, modifiedProduct).subscribe({
        next: (data: any) => {
          if (!data.error) {
            // Update product in list
            this.productList = this.productList.map((producto) =>
              producto.id === data.datos.producto.id
                ? data.datos.producto
                : producto
            );
          }
          resolve(data);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
}
