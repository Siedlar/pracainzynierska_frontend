import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth2Service } from '../service/auth2.service';
import { TokenStorageService } from '../service/token-storage.service';
import { CwiczeniaService } from '../service/cwiczenia.service';
import { Partia } from '../types/partia';
import { Trudnosc } from '../types/trudnosc';
import { Ekwipunek } from '../types/ekwipunek';
import { TreningService } from '../service/trening.service';
import { TypTreningu } from '../types/typ-treningu';

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
  typTreningu:Array<TypTreningu>
 partia:Array<Partia>
 trudnosc:Array<Trudnosc>
 ekwipunek:Array<Ekwipunek>
  constructor(private authService: Auth2Service, private tokenStorage: TokenStorageService, private router:Router, private cwiczeniaService:CwiczeniaService,private treningService:TreningService) { }

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
       
this.cwiczeniaService.getPartie().subscribe(
  data=>{
  
 
    this.partia=data;
    this.partia.sort((a, b) => a.partia_id - b.partia_id);
    sessionStorage.setItem("partia",JSON.stringify(this.partia));
  }
)
this.cwiczeniaService.getTrudnosc().subscribe(
  data=>{
    
    this.trudnosc=data;
    this.trudnosc.sort((a, b) => a.trudnosc_id - b.trudnosc_id);
    sessionStorage.setItem("trudnosc",JSON.stringify( this.trudnosc));
  }
)
this.cwiczeniaService.getEkwipunek().subscribe(
  data=>{
    this.ekwipunek=data;
    this.ekwipunek.sort((a, b) => a.ekwipunek_id - b.ekwipunek_id);
        sessionStorage.setItem("ekwipunek",JSON.stringify(this.ekwipunek));

  }
 
)
  
this.treningService.getTypyTreningu().subscribe(
  data=>{
    this.typTreningu=data;
    console.log(this.typTreningu)
    this.typTreningu.sort((a, b) => a.typtreningu_id - b.typtreningu_id);
        sessionStorage.setItem("typTreningu",JSON.stringify(this.typTreningu));

  }
 
)
      
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