import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/pomiar/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PomiarService {

  constructor(private http: HttpClient) { }

  getPomiary():Observable<any>{
    return this.http.get(API_URL + 'getPomiary');
  }

  savePomiar(form):Observable<any>{
    return this.http.post(API_URL + 'savePomiar', {
      name:form.name,
      surname:form.surname,
      dateOfBirth:form.dateOfBirth,
      wzrost: form.wzrost,
      kraj: form.kraj,
      city: form.miasto,
      ulica: form.ulica,
      phoneNumber:  form.phoneNumber,
      notatka:form.notatka
    }, httpOptions);
}
}