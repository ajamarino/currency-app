import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Currency } from '../interfaces/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = 'http://localhost:3000/currencies'

  constructor(private http: HttpClient) { }

  getCurrencyValues(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url);

  }
}
