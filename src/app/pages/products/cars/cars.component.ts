import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: []
})
export class CarsComponent implements OnInit {

  misdatos: ProductModel[] = [];

  constructor(private productsService: ProductsService) {
    // this.productsService.getAll().subscribe((data: ProductModel[])=> {
    //   this.misdatos = data;
    // })

    this.productsService.getCategory('Cars').subscribe((data: ProductModel[]) => {
      this.misdatos = data;
    });
  }

  ngOnInit() {
  }

}
