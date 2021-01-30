import { Component, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  ngOnInit(): void {


  }
scrollToOpinie(){
  document.getElementById("opinie").scrollIntoView({behavior: 'smooth'});
}
scrollToJakDziala(){
  document.getElementById("dzialanie").scrollIntoView({behavior: 'smooth'});
}
scrollToGaleria(){
  document.getElementById("galeria").scrollIntoView({behavior: 'smooth'});
}
scrollToTop(){
  document.getElementById("top").scrollIntoView({behavior: 'smooth'});
}
}