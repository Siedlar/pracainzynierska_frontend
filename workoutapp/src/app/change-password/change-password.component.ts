import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Auth2Service } from '../service/auth2.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  success=''
  token:string;
  constructor(private activatedRoute: ActivatedRoute,private authService: Auth2Service,private router:Router) {
    
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
        this.token=params['token'];
      })
    
   }
   ngOnInit() {
   }
 
   onSubmit() {
    this.authService.changePassword(this.form,this.token).subscribe(
      data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
      this.success=data.message;
        alert(this.success);
        this.router.navigate(['login']);
      },
      err => {
        console.log("siema")
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  
  
 }
  









 

