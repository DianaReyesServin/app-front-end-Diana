import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CountriesService} from 'src/app/services/countries.service';
import {Paises} from 'src/app/models/models';

@Component({selector: 'app-about', templateUrl: './about.component.html', styles: []})
export class AboutComponent implements OnInit {

    mispaises : any;

    constructor(private paisesService : CountriesService) {

        this.paisesService.getCountries().subscribe((data : any) => {
            this.mispaises = data;
        });
    }

    ngOnInit() {}
}

