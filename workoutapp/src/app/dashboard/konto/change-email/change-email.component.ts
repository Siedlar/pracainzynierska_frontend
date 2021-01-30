import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  form: any = {};
isLoginFailed=false;
  errorMessage = '';
  success=''
  token:string;
  isSuccessful :Boolean;
  constructor(private authService: UserServiceService) {
    
 
    
   }
   ngOnInit() {
   }
 
   onSubmit() {
  
    this.authService.changeEmail(this.form).subscribe(
      data=>{
        this.isSuccessful = true;
        sessionStorage.setItem("email",this.form.email);
      },error=>{
        this.errorMessage=error.error.message;
        this.isLoginFailed=true;
      }
    )
  }
}