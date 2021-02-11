import { Component, OnInit } from '@angular/core';
import { TreningService } from 'src/app/service/trening.service';
import { Cwiczenia } from 'src/app/types/cwiczenia';
import { StworzTrening } from 'src/app/types/stworz-trening';
import { TypTreningu } from 'src/app/types/typ-treningu';

@Component({
  selector: 'app-stworzprzykladowarutyne',
  templateUrl: './stworzprzykladowarutyne.component.html',
  styleUrls: ['./stworzprzykladowarutyne.component.css']
})
export class StworzprzykladowarutyneComponent implements OnInit {
  stworz:boolean=false;
  dalej:boolean=false;
  cwiczenia:Array<Cwiczenia>
  constructor(private treningService:TreningService) { }

  ngOnInit(): void {
  
  }
  stworzTrening(){
  let stworzTrening:StworzTrening = new StworzTrening();
  let typTreningu:TypTreningu =new TypTreningu()
  typTreningu.typTreningu = 'FBW'
  stworzTrening.typTreningu=typTreningu;
    this.treningService.stworzTrening(stworzTrening).subscribe(
      data=>{
console.log(data)
this.stworz=true;
this.cwiczenia=data;
      },error=>{

      }
    )
  }
  przejdzDalej(){
    this.dalej=true;

  }
  stworzTrening2(event){
    let stworzTrening:StworzTrening = new StworzTrening();
    let typTreningu:TypTreningu =new TypTreningu()
    typTreningu.typTreningu = 'SPLIT'
    stworzTrening.typTreningu=typTreningu;
    console.log(event)
    if(event.srcElement.id == 'nogi'){
      stworzTrening.split = 3
   
    }
    if(event.srcElement.id == 'klatka'){
      
      stworzTrening.split = 1
    }
    if(event.srcElement.id == 'plecy'){
      
      stworzTrening.split = 2
    }
      this.treningService.stworzTrening(stworzTrening).subscribe(
        data=>{
  console.log(data)
  this.stworz=true;
  this.cwiczenia=data;
        },error=>{
  
        }
      )
    }
}
