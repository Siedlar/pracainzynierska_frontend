import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CwiczeniaService } from 'src/app/service/cwiczenia.service';
import { PomiarService } from 'src/app/service/pomiar.service';
import { Cwiczenia } from 'src/app/types/cwiczenia';
import { Ekwipunek } from 'src/app/types/ekwipunek';
import { Partia } from 'src/app/types/partia';
import { Trudnosc } from 'src/app/types/trudnosc';

@Component({
  selector: 'app-dodaj-cwiczenie',
  templateUrl: './dodaj-cwiczenie.component.html',
  styleUrls: ['./dodaj-cwiczenie.component.css']
})
export class DodajCwiczenieComponent implements OnInit {
  cwiczenie:Cwiczenia;
  
  cwiczenieForm = new FormGroup({
    nazwa_cwiczenia: new FormControl('',Validators.required),
    url_film: new FormControl('',Validators.required),
    url_zdjecia: new FormControl('',Validators.required),
    wskazowki: new FormControl('',Validators.required),
    partia: new FormControl('',Validators.required),
    trudnosc: new FormControl('',Validators.required),
    ekwipunek:new FormArray([new FormControl('',Validators.required)])
    })

  successful =false;
  
  submitted = false;

get ekwipunek(){
  return this.cwiczenieForm.get('ekwipunek') as FormArray;
}
addEkwipunek(){
  this.ekwipunek.push(new FormControl('',Validators.required));
}
deleteEkwipunek(name){
  this.ekwipunek.removeAt(name)
}
  Partia: Array<Partia> 
Ekwipunek:Array<Ekwipunek>
Trudnosc:Array<Trudnosc>

    constructor(private cwiczeniaService:CwiczeniaService) {  }

  ngOnInit(): void {
this.Partia = JSON.parse(sessionStorage.getItem('partia'))
this.Ekwipunek = JSON.parse(sessionStorage.getItem('ekwipunek'))
this.Trudnosc = JSON.parse(sessionStorage.getItem('trudnosc'))
  console.log(  this.Partia );
  console.log(  this.Ekwipunek);
  console.log( this.Trudnosc );

}
get f() { return this.cwiczenieForm.controls; }
onSubmit(){

this.submitted = true;

// koniec jezeli nie prawidłowy
if (this.cwiczenieForm.invalid) {
  console.log("puse pola")
    return;
}

this.cwiczenie=this.mapValues(this.cwiczenieForm)
console.log(this.cwiczenie)
this.cwiczeniaService.addCwiczenia(this.cwiczenie).subscribe(
  data=>{
    console.log(data)
    this.successful=true;
  }
)
}



mapValues(form:FormGroup):Cwiczenia{
  let cwiczenia:Cwiczenia=new Cwiczenia();
  cwiczenia.nazwa_cwiczenia=form.controls['nazwa_cwiczenia'].value
  cwiczenia.url_film=form.controls['url_film'].value
  cwiczenia.url_zdjecia=form.controls['url_zdjecia'].value
  cwiczenia.wskazowki=form.controls['wskazowki'].value
  let partia:Partia =new Partia()
  partia.partia=form.controls['partia'].value
  partia.partia_id = this.Partia.find(x=>x.partia === partia.partia).partia_id
  let trudnosc:Trudnosc = new Trudnosc()
  trudnosc.trudnosc =form.controls['trudnosc'].value
trudnosc.trudnosc_id = this.Trudnosc.find(x=>x.trudnosc === trudnosc.trudnosc).trudnosc_id
  let ekwipunek :Array<Ekwipunek> = [];
 let ekTemp=form.controls['ekwipunek'].value
 console.log(ekTemp[0])
  for(let i=0; i<ekTemp.length;i++){
    let ek:Ekwipunek=new Ekwipunek()
    ek.ekwipunek=ekTemp[i]
    ek.ekwipunek_id=this.Ekwipunek.find(x=>x.ekwipunek === ekTemp[i]).ekwipunek_id
    ekwipunek.push(ek)
  }
  ekwipunek.length
  console.log(ekwipunek)
  console.log(ekTemp)
  
cwiczenia.trudnosc=trudnosc;
cwiczenia.partia=partia;
cwiczenia.ekwipunek= ekwipunek;

  return cwiczenia;
}
}
