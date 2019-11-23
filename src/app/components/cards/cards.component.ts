import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/models';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {

  @Input() products: ProductModel[]
  @Input() category: string = '';
  //@Output() onClickRedirect: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  verDetalle(code: number)
  {
    this.router.navigate(['products', code]);
  }
}
