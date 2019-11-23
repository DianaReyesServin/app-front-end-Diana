import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_PRODUCTS = 'https://restcountries.eu/rest/v2/all';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
