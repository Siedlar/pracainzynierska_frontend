import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-zmieninformacje',
  templateUrl: './zmieninformacje.component.html',
  styleUrls: ['./zmieninformacje.component.css']
})
export class ZmieninformacjeComponent implements OnInit {
  form: any = {};
isLoginFailed=false;
  errorMessage = '';
  success=''
  token:string;
  isSuccessful :Boolean;
  constructor(private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      data=>{
        this.form.name=data.name;
        this.form.surname=data.surname;
        this.form.dateOfBirth=data.dateOfBirth;
        this.form.wzrost=data.wzrost;
        this.form.kraj=data.kraj;
        this.form.miasto=data.city;
        this.form.ulica=data.ulica;
        this.form.phoneNumber=data.phoneNumber;
        this.form.notatka=data.notatka;
      },error=>{
       
      }
    )
  }
  onSubmit( ){
  this.userService.saveUserInfo(this.form).subscribe(

    data=>{
      console.log(data);
  
      this.router.navigate(['dashboard']);
    },
    error=>{
      console.log(error)
    }
  )
  }
}
