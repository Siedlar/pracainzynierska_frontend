import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-usun-konto',
  templateUrl: './usun-konto.component.html',
  styleUrls: ['./usun-konto.component.css']
})
export class UsunKontoComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private router:Router, private userService:UserServiceService,private token:TokenStorageService) { }

  ngOnInit(): void {
  }

    deleteUser(){
     if( confirm("Czy jesteś pewien że chcesz usunąć swoje konto?")){
      this.userService.deleteUser().subscribe(
        data => {
       alert(data.message)
          this.router.navigate([""]);
          this.token.signOut();
      
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }}
}
