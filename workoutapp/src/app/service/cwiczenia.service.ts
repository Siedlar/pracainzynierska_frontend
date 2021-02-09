import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cwiczenia } from '../types/cwiczenia';
const API_URL = 'http://localhost:8080/api/cwiczenia/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CwiczeniaService {
  constructor(private http: HttpClient) { }
  getPartie() :Observable<any>{
    return this.http.get(API_URL + 'getPartie');
  }
  getEkwipunek():Observable<any> {
    return this.http.get(API_URL + 'getEkwipunek');
  }
  getTrudnosc() :Observable<any>{
    return this.http.get(API_URL + 'getTrudnosc');
  }

 
  getCwiczenia():Observable<any>{
    return this.http.get(API_URL + 'getCwiczenia');
  }
  addCwiczenia(cwiczenie:Cwiczenia):Observable<any>{
    return this.http.post(API_URL + 'addCwiczenia',{
      nazwa_cwiczenia:cwiczenie.nazwa_cwiczenia,
      url_film:cwiczenie.url_film,
      url_zdjecia:cwiczenie.url_zdjecia,
      partia:cwiczenie.partia,
      ekwipunek:cwiczenie.ekwipunek,
      trudnosc:cwiczenie.trudnosc,
      wskazowki:cwiczenie.wskazowki
    },httpOptions);
  }
}
