import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth2Service } from '../service/auth2.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-niepamietaszhasla',
  templateUrl: './niepamietaszhasla.component.html',
  styleUrls: ['./niepamietaszhasla.component.css']
})
export class NiepamietaszhaslaComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  success = '';

  constructor(private authService: Auth2Service,private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.resetPassword(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.success = data.message;
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

