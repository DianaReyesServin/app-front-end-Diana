import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from 'src/app/models/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  productFilter : ProductModel[] = [];
  criterio: string = '';

  constructor(private router: ActivatedRoute, private productsSvc: ProductsService) { 
    this.router.params.subscribe(params => {
      this.criterio = params['criterio'];     
      this.productsSvc.getByDescription(this.criterio).subscribe((data: ProductModel[]) => {
      this.productFilter = data;
      });
    }) 
  }

  ngOnInit() {
  }
}
