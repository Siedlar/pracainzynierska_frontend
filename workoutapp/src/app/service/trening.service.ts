import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoriaTreningu } from '../types/historia-treningu';
const API_URL = 'http://localhost:8080/api/trening/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TreningService {

  constructor(private http: HttpClient) { }
  dodajTrening(historiaTreningu:HistoriaTreningu) :Observable<any>{
    return this.http.post(API_URL + 'dodajTrening',{
czasTrwania:historiaTreningu.czasTrwania,
dataTreningu:historiaTreningu.dataTreningu,
notatka:historiaTreningu.notatka,
historiaCwiczen:historiaTreningu.historiaCwiczen,
typTreningu:historiaTreningu.typTreningu
    },httpOptions );
  }
  getTypyTreningu() :Observable<any>{
    return this.http.get(API_URL + 'getTypyTreningu');
  }
  getPrzykladoweTreningi() :Observable<any>{
    return this.http.get(API_URL + 'getPrzykladoweTreningi');
  }
  getWybraneCwiczenie(cwiczenie) :Observable<any>{
    console.log(cwiczenie.cwiczenie_id)
    return this.http.post(API_URL + 'getWybraneCwiczenie',{
      cwiczenie_id:cwiczenie.cwiczenie_id
    },httpOptions);
  }
  stworzTrening(treningi) :Observable<any>{
    return this.http.post(API_URL + 'stworzTrening',{
      typTreningu:treningi.typTreningu,
      split:treningi.split
    });
  }
  getTreningi() :Observable<any>{
    return this.http.get(API_URL + 'getTreningi');
  }
  deleteTreningi(treningi) :Observable<any>{
    console.log(treningi.historiatreningu_id)
    return this.http.post(API_URL + 'deleteTreningi',{
      historiatreningu_id:treningi.historiatreningu_id,
      historiaCwiczen:treningi.historiaCwiczen

,httpOptions});
  }
  getRekordy() :Observable<any>{
    return this.http.get(API_URL + 'getRekordy');
  }
}
