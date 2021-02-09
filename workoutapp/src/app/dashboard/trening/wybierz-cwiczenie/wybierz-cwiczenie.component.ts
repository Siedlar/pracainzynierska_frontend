import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CwiczeniaService } from 'src/app/service/cwiczenia.service';
import { Cwiczenia } from 'src/app/types/cwiczenia';
import { Ekwipunek } from 'src/app/types/ekwipunek';
import { HistoriaCwiczen } from 'src/app/types/historia-cwiczen';
import { HistoriaTreningu } from 'src/app/types/historia-treningu';
import { JednoCwiczenie } from 'src/app/types/jedno-cwiczenie';
import { Partia } from 'src/app/types/partia';
import { Trudnosc } from 'src/app/types/trudnosc';

@Component({
  selector: 'app-wybierz-cwiczenie',
  templateUrl: './wybierz-cwiczenie.component.html',
  styleUrls: ['./wybierz-cwiczenie.component.css']
})
export class WybierzCwiczenieComponent implements OnInit {
  submitted3:boolean=false
  submitted2:boolean=false
  serie:Array<JednoCwiczenie>=[]
  licznik: number=1;
 cwiczenie:Cwiczenia;
  loading = false;
  cwiczenia:Array<Cwiczenia>
  dynamicForm: FormGroup;
historiaCwiczen:HistoriaCwiczen = new HistoriaCwiczen();
Partia:Array<Partia>
Ekwipunek:Array<Ekwipunek>
Trudnosc:Array<Trudnosc>
activePageDataChunk:any = []
filterArray: any =[]
pageSize = 9;
next:boolean=false;
pageSizeOptions: number[] = [3, 6, 9, 15];
pageEvent: PageEvent;
cwiczenieForm = new FormGroup({
  nazwa_cwiczenia: new FormControl(''),
  partia: new FormControl(''),
  trudnosc: new FormControl(''),
  ekwipunek:new FormControl(''),
  })
  jednoCwiczenie = new FormGroup({
    czasTrwaniaCwiczenia: new FormControl('',Validators.required),
      seria:new FormControl('',Validators.required),
      powtorzenia:new FormControl('',Validators.required),
      ciezar:new FormControl('',Validators.required),
  
  })
  
  jednoCwiczenie2 = new FormGroup({
    czasTrwaniaCwiczenia: new FormControl('',Validators.required),
    seria:new FormControl('',Validators.required),
      czas:new FormControl('',Validators.required),
      kilometry:new FormControl('',Validators.required),
   
  
  })
  

  constructor(private cwiczeniaService:CwiczeniaService, public dialogRef: MatDialogRef<WybierzCwiczenieComponent>  ) {}
    ngOnInit(): void {
     
   
      this.cwiczeniaService.getCwiczenia().subscribe(
        data=>{
          
          this.cwiczenia=data;
          this.cwiczenia.sort((a, b) => a.cwiczenie_id - b.cwiczenie_id);
          this.filterArray=this.cwiczenia
          this.activePageDataChunk = this.filterArray.slice(0,this.pageSize);
  
          this.loading=true;
        }
      )
      this.Partia=JSON.parse(sessionStorage.getItem('partia'));
      this.Ekwipunek=JSON.parse(sessionStorage.getItem('ekwipunek'));
      this.Trudnosc=JSON.parse(sessionStorage.getItem('trudnosc'));
    }
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    onPageChanged(e) {
      let firstCut = e.pageIndex * e.pageSize;
      let secondCut = firstCut + e.pageSize;
      this.activePageDataChunk = this.filterArray.slice(firstCut, secondCut);
      window.scroll(0,0);
    }
  
    onSubmit(){
      console.log( this.cwiczenieForm.value)
      this.filterArray = this.cwiczenia;
  
  
  
      if(this.cwiczenieForm.controls['trudnosc'].value !=='' ){
        this.filterArray =this.filterArray.filter( x=> x.trudnosc.trudnosc === this.cwiczenieForm.controls['trudnosc'].value);
       
      }
  
   
      if(this.cwiczenieForm.controls['partia'].value !=='' ){
  
        this.filterArray =this.filterArray.filter( x=> x.partia.partia === this.cwiczenieForm.controls['partia'].value);
      }
      console.log(this.filterArray)
          if(this.cwiczenieForm.controls['ekwipunek'].value !==''){
  
        this.filterArray =this.filterArray.filter( x=> x.ekwipunek.find(x=>x.ekwipunek ===this.cwiczenieForm.controls['ekwipunek'].value))}
        //x.ekwipunek[0].ekwipunek ===  this.cwiczenieForm.controls['ekwipunek'].value)
      if(this.cwiczenieForm.controls['nazwa_cwiczenia'].value !=='' ){
     
        this.filterArray =this.filterArray.filter( x=> x.nazwa_cwiczenia.includes(this.cwiczenieForm.controls['nazwa_cwiczenia'].value));
      }
      console.log(this.filterArray)
      this.activePageDataChunk =this.filterArray.slice(0,this.pageSize);
    
    
      }

zapisz(cwiczenie){
  if(confirm("Czy chcesz wybrać to ćwiczenie??")){
    console.log(cwiczenie)
    this.historiaCwiczen.cwiczenie=cwiczenie
    this.next=true;
    console.log(this.historiaCwiczen)
 
  }


 
}


onNoClick(): void {
  this.dialogRef.close();
}
onSubmit2(){

}
dodajSerie() { 
  this.submitted2=true;
  if (this.jednoCwiczenie.invalid) {
    console.log("siema")
    return;
}
console.log(this.jednoCwiczenie)
let cwiczenieTemp:JednoCwiczenie= new JednoCwiczenie();
if(this.jednoCwiczenie.controls['czasTrwaniaCwiczenia']){
  this.historiaCwiczen.czasTrwaniaCwiczenia=this.jednoCwiczenie.controls['czasTrwaniaCwiczenia'].value
}
cwiczenieTemp.ciezar=this.jednoCwiczenie.controls['ciezar'].value
cwiczenieTemp.seria=this.jednoCwiczenie.controls['seria'].value
cwiczenieTemp.powtorzenia=this.jednoCwiczenie.controls['powtorzenia'].value
console.log(cwiczenieTemp)
  this.serie.push(cwiczenieTemp)
  this.jednoCwiczenie.removeControl('czasTrwaniaCwiczenia');
  var answer = window.confirm("Czy chcesz dodać kolejna serie?")
  if (answer == true) {
 
    this.submitted2=false;
    this.jednoCwiczenie.reset()
    this.licznik++;
  }
  console.log(this.serie)
  console.log(this.jednoCwiczenie)
}
dodajSerie2() { 
  this.submitted3=true;
  if (this.jednoCwiczenie2.invalid) {
    console.log("siema")
    return;
}
console.log(this.jednoCwiczenie2)
let cwiczenieTemp:JednoCwiczenie= new JednoCwiczenie();
if(this.jednoCwiczenie2.controls['czasTrwaniaCwiczenia']){
  this.historiaCwiczen.czasTrwaniaCwiczenia=this.jednoCwiczenie2.controls['czasTrwaniaCwiczenia'].value
}
cwiczenieTemp.seria=this.jednoCwiczenie2.controls['seria'].value
cwiczenieTemp.czas=this.jednoCwiczenie2.controls['czas'].value
cwiczenieTemp.kilometry=this.jednoCwiczenie2.controls['kilometry'].value

console.log(cwiczenieTemp)
  this.serie.push(cwiczenieTemp)
  this.jednoCwiczenie2.removeControl('czasTrwaniaCwiczenia');
  var answer = window.confirm("Czy chcesz dodać kolejna serie?")
  if (answer == true) {
 
    this.submitted3=false;
    this.jednoCwiczenie2.reset()
    this.licznik++;
  }
  console.log(this.serie)
  console.log(this.jednoCwiczenie)
}
zakonczenie(){
  if(this.serie.length == 0){
    return;
  }
  if(confirm("Czy chcesz zakończyć dodawanie?")){
    this.historiaCwiczen.jednoCwiczenie=this.serie;
  }
  
}
}
