import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth2Service } from '../service/auth2.service';

@Component({
  selector: 'app-zarejestruj',
  templateUrl: './zarejestruj.component.html',
  styleUrls: ['./zarejestruj.component.css']
})
export class ZarejestrujComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: Auth2Service,private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  loginPage(){
    this.router.navigate(['login']);
  }
}

