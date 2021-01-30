import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = 'http://localhost:8080/api/data/';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserServiceService {
  saveUserInfo(form): Observable<any> {
    return this.http.post(API_URL + 'saveUserInfo', {
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


  constructor(private http: HttpClient) {
  }
  deleteUser(): Observable<any> {
    return this.http.delete(API_URL + 'deleteUser');
  }
 changePassword(form): Observable<any> {
  return this.http.post(API_URL + 'changePassword', {
    password: form.password,
  }, httpOptions);
}
changeEmail(form): Observable<any> {
  return this.http.post(API_URL + 'changeEmail', {
    email: form.email,
  }, httpOptions);
}
changeLogin(form): Observable<any> {
  return this.http.post(API_URL + 'changeLogin', {
    username: form.username
  }, httpOptions);
}
getUserInfo(): Observable<any> {
  return this.http.get(API_URL + 'getUserInfo' );
}
getImage(){
  return this.http.get(API_URL + 'getImage' );
}
onUpload(file): Observable<any> {

  return this.http.post(API_URL + "uploadImage", file, { observe: 'response' });
}
}

  
