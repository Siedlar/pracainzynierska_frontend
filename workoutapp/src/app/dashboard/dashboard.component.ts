import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
username:string
 
  
  constructor(private userService: UserServiceService,private router :Router,private token:TokenStorageService) { }
  ngOnInit(): void {
  this.username=sessionStorage.getItem("username")
  }

  wyloguj(){ 
    if(confirm("Czy na pewno chcesz się wylogować?")){
    this.token.signOut();
    this.router.navigate([""]);
    }
  }
  zmienHaslo(){
    this.router.navigate(["dashboard/zmienHaslo"])
  }
}

