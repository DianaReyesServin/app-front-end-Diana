import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})

export class NavbarComponent implements OnInit {
  breadcrumb:any = {};
  constructor(private router: Router) { 
   
  }

  ngOnInit() {
  }

  //Método que realiza la búsqueda dentro del buscador por criterio 
  searchByCriterio(criterio: string)
  {
    //Va al componente search pero pasa el criterio
    this.router.navigate(['/search', criterio]);
  }

  _getBreadcrumb()
  {

  }
}
