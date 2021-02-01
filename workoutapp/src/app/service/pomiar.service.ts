import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SimpleChange } from '@angular/core';
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
      id:form.id,
     waga:form.waga,
     data:form.data,
     biceps:form.biceps,
     udo:form.udo,
     talia:form.talia,
     brzuch:form.brzuch,
     przedramie:form.przedramie,
     lydka:form.lydka,
     szyja:form.szyja,
     klatka:form.klatka
    }, httpOptions);
}
deletePomiar(pomiar):Observable<any>{
  return this.http.post(API_URL + 'deletePomiar', pomiar
   );
}
}