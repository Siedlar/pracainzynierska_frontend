import { Component, DoCheck, OnInit } from '@angular/core';
import { PomiarService } from 'src/app/service/pomiar.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Pomiar } from 'src/app/types/pomiar';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit ,DoCheck{
wzrost:number;
 suma:number;
pomiary:Array<Pomiar>
waga:Array<number>
ifWaga:boolean=false;
ifWzrost:boolean=false;
ifPomiar:boolean=false;
  bmi_nazwa: string;
  constructor(private userService:UserServiceService, private pomiarService:PomiarService) { }
  ngDoCheck(): void {
    if (this.suma < 16) {
      this.bmi_nazwa = "Wygłodzenie"
    } else if (this.suma >= 16 && this.suma <= 16.99) {
      this.bmi_nazwa = "Wychudzenie"
    } else if (this.suma >= 17 && this.suma <= 18.49) {
      this.bmi_nazwa = "Niedowaga"
    }
    else if (this.suma >= 18.5 && this.suma <= 24.99) {
      this.bmi_nazwa = "Wartość prawidłowa"

    } else if (this.suma >= 25 && this.suma <= 29.99) {
      this.bmi_nazwa = "Nadwaga"
    } else if (this.suma >= 30 && this.suma <= 34.99) {
      this.bmi_nazwa = "I stopień otyłości"
    } else if (this.suma >= 35 && this.suma <= 39.99) { 
      this.bmi_nazwa = "II stopień otyłości"
    } else if (this.suma >= 40) { 
      this.bmi_nazwa = "Otyłość skrajna"
    }
  }

  ngOnInit(): void {

   
    this.pomiarService.getPomiary().subscribe(
      data=>
      {
     this.pomiary=data;
     this.pomiary.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
     this.waga=this.pomiary.map(x=>x.waga );
     this.waga=this.waga.filter(x=>x !=0) 
     console.log(this.waga)
     console.log(this.waga[0])
     if(this.waga.length > 0){
      this.ifPomiar =true;
     }
    
     this.userService.getUserInfo().subscribe(
      data=>{
        this.wzrost=data.wzrost
        if(this.wzrost != 0){
          console.log(this.wzrost)
          this.ifWzrost=true;
        }
      console.log(this.waga[0])
     
        this.suma=   this.waga[0]/((this.wzrost/100)*(this.wzrost/100))
        console.log(this.suma)},error=>{
        console.log("elo")
       
      }
    )
      },error =>{
        
console.log("siema")
      })
    

   
    }

} 
