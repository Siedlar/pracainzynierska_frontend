import {  Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeIn, fadeInDown } from 'ng-animate';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  
  text = 'Witaj w miejscu, gdzie możesz zmienić swoje życie.';
  text2 = 'Śledź i zarządzaj treningami właśnie u nas.';
 
  enterAnimation: TextAnimation = {
    animation: fadeIn,
    delay: 30,
    type: 'letter'
  };

}

