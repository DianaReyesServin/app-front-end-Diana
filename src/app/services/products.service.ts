import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/models';
import { Observable } from 'rxjs';
import { filter } from 'minimatch';

const URL_PRODUCTS = 'https://angular-mtwdm.firebaseio.com/productos.json';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  product: ProductModel = {};

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(URL_PRODUCTS)
  }

  getCategory(category: string) {
    return new Observable(observer => {
      this.http.get(URL_PRODUCTS).subscribe((data: ProductModel[]) => {
        const filter = data.filter(item => item.categoria == category || item.categoria.indexOf(category) >= 0);
        // data.filter(item => {
        //   if (item.categoria == category) {
        //     return true;
        //   }
        observer.next(filter);
      });
    });
  }

  getByCode(code: string)
  {
    return new Observable(observer => {
      this.http.get(URL_PRODUCTS).subscribe((data: ProductModel[]) => {
        const filter = data.filter(item => item.codigo == code);
        observer.next(filter[0]);
      });
    });
  }

  getByDescription(describe: string)
  {
    return new Observable(observer => {
      this.http.get(URL_PRODUCTS).subscribe((data: ProductModel[]) => {
        const filter = data.filter(item => item.descripcion.toLowerCase().includes(describe.toLowerCase()));
        observer.next(filter);
      });
    });
  }
}

