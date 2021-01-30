import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-change-login',
  templateUrl: './change-login.component.html',
  styleUrls: ['./change-login.component.css']
})
export class ChangeLoginComponent implements OnInit {

  form: any = {};
  isLoginFailed=false;
    errorMessage = '';
    success=''
    token:string;
    isSuccessful :Boolean;
    constructor(private authService: UserServiceService , private tokenStorage:TokenStorageService) {
      
   
      
     }
     ngOnInit() {
     }
   
     onSubmit() {
    if(confirm("Czy jesteś pewien? Po zmianie nazwy użytkownika nastąpi wylogowanie z systemu")){
      this.authService.changeLogin(this.form).subscribe(
        data=>{
          this.isSuccessful = true;
          sessionStorage.setItem("email",this.form.username);
          this.tokenStorage.signOut();
          window.location.reload();
          
        },error=>{
          this.errorMessage=error.error.message;
          this.isLoginFailed=true;
        }
      )
    }}
  }
  


