import { Component, OnInit } from '@angular/core';
import { Cwiczenia } from 'src/app/types/cwiczenia';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jedno-cwiczenie',
  templateUrl: './jedno-cwiczenie.component.html',
  styleUrls: ['./jedno-cwiczenie.component.css']
})
export class JednoCwiczenieComponent implements OnInit {
cwiczenie:Cwiczenia;
url:any
constructor(private _sanitizer: DomSanitizer,private router:Router){
}

  ngOnInit(): void {
    if(history.state.cwiczenie == null ){
      this.router.navigate(['/dashboard/lista-cwiczen'])
    }
    this.cwiczenie=history.state.cwiczenie
   this.url=this._sanitizer.bypassSecurityTrustResourceUrl(this.cwiczenie.url_film)
   console.log(this.url)
  }

}
