import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth2Service } from '../service/auth2.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = 'Brak połączenia z bazą danych';
  roles: string[] = [];

  constructor(private authService: Auth2Service, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        alert("Zostałeś pomyślne zalogowany  w systemie, nastąpi przekierowanie do menu!!");
        this.router.navigate(['dashboard']);
        sessionStorage.setItem("username",this.form.username);
        sessionStorage.setItem("email",data.email);
      },
      err => { 

        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  rejestracja(){
    this.router.navigate(['zarejestruj']);
  }
  haslo(){
    this.router.navigate(['niepamietaszhasla']);
  }
}