import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { TreningService } from 'src/app/service/trening.service';
import { Cwiczenia } from 'src/app/types/cwiczenia';
import { HistoriaCwiczen } from 'src/app/types/historia-cwiczen';
import { HistoriaTreningu } from 'src/app/types/historia-treningu';
import { TypTreningu } from 'src/app/types/typ-treningu';
import { ListacwiczenComponent } from '../../rutynyicwiczenia/listacwiczen/listacwiczen.component';
import { WybierzCwiczenieComponent } from '../wybierz-cwiczenie/wybierz-cwiczenie.component';
@Component({
  selector: 'app-dodajtrening',
  templateUrl: './dodajtrening.component.html',
  styleUrls: ['./dodajtrening.component.css']
})
export class DodajtreningComponent implements OnInit {
  historiaTreningu:HistoriaTreningu =new HistoriaTreningu();
 historiaCwiczen:Array<HistoriaCwiczen>=[];
  result:Cwiczenia;
  typyTreningu:Array<TypTreningu>;
  constructor(public dialog: MatDialog, public treningService:TreningService) {}
  brakCwiczen:boolean=false;

  cwiczenieForm = new FormGroup({
    czasTrwania: new FormControl('',Validators.required),
    dataTreningu: new FormControl('',Validators.required),
    notatka: new FormControl(''),
    typTreningu: new FormControl('',Validators.required),
    })

  successful =false;
  
  submitted = false;

  get f() { return this.cwiczenieForm.controls; }

remove(cwiczenia){
  console.log(cwiczenia)
  console.log(this.historiaCwiczen)
  if(confirm("Czy chcesz usunąć to ćwiczenie")){
    var index =   this.historiaCwiczen.indexOf(cwiczenia)
 this.historiaCwiczen.splice(index,1)

  }
  
}

  ngOnInit(): void {
    this.typyTreningu = JSON.parse(sessionStorage.getItem('typTreningu'))
    console.log(  this.typyTreningu )
  }

  openDialog() {
    this.submitted = false;
    const dialogRef = this.dialog.open(WybierzCwiczenieComponent,{
      width: '80%',
      height: '70%',
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.brakCwiczen=false;
      this.submitted = false;
     if(result == undefined){

     }else{
       console.log(result)
      this.historiaCwiczen.push(result)
      console.log( this.historiaCwiczen)
     }
    });
  }
  onSubmit(){
    this.historiaTreningu.historiaCwiczen=this.historiaCwiczen;
  
    this.submitted = true;

// koniec jezeli nie prawidłowy
if (this.cwiczenieForm.invalid ) {
  console.log("puse pola")
    return;
}
if (this.historiaTreningu.historiaCwiczen.length == 0) {
  console.log("Nie dodales zadnego cwiczenia")
this.brakCwiczen=true;
    return;
}
if(confirm("Czy chcesz zakończyć dodawanie treningu? ")){
this.historiaTreningu.czasTrwania=this.cwiczenieForm.controls['czasTrwania'].value
this.historiaTreningu.dataTreningu=this.cwiczenieForm.controls['dataTreningu'].value
this.historiaTreningu.notatka=this.cwiczenieForm.controls['notatka'].value
let typTreningu:TypTreningu =new TypTreningu()
typTreningu.typTreningu=this.cwiczenieForm.controls['typTreningu'].value
typTreningu.typtreningu_id = this.typyTreningu.find(x=>x.typTreningu === typTreningu.typTreningu).typtreningu_id
this.historiaTreningu.typTreningu=typTreningu
console.log( this.historiaTreningu)
this.treningService.dodajTrening( this.historiaTreningu).subscribe(
  data=>{
    console.log("udalo sie dodac")
    this.successful=true;
  },error=>{
    console.log("NIe udalo sie dodac")
    
  }
)
  }}
}

