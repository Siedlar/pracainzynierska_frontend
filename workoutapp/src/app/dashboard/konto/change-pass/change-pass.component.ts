import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
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
  
    this.authService.changePassword(this.form).subscribe(
      data=>{
        this.isSuccessful = true;
      },error=>{
        this.errorMessage=error.error.message;
        this.isLoginFailed=true;
      }
    )
  }
}
