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
  selector: 'app-wybierz-cwiczeniew-trakcie',
  templateUrl: './wybierz-cwiczeniew-trakcie.component.html',
  styleUrls: ['./wybierz-cwiczeniew-trakcie.component.css']
})
export class WybierzCwiczeniewTrakcieComponent implements OnInit {
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
      seria:new FormControl('',Validators.required),
      powtorzenia:new FormControl('',Validators.required),
      ciezar:new FormControl('',Validators.required),
  
  })
  
  jednoCwiczenie2 = new FormGroup({
    seria:new FormControl('',Validators.required),
 
      kilometry:new FormControl('',Validators.required),
   
  
  })
  
  mm = 0;
  ss = 0;
  ms = 0;
  isRunning = false;
  timerId ;

  clickHandler() {
    if (!this.isRunning) {
      // Stop => Running
      this.timerId = setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.ss++;
          this.ms = 0;
        }
        if (this.ss >= 60) {
          this.mm++;
          this.ss = 0
        }
      }, 10);
    } else {
      clearInterval(this.timerId);
    }
    this.isRunning = !this.isRunning;
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }



  mm2 = 0;
  ss2 = 0;
  ms2 = 0;
  isRunning2 = false;
  timerId2 ;

  clickHandler2() {
    if (!this.isRunning2) {
      // Stop => Running
      this.timerId2 = setInterval(() => {
        this.ms2++;

        if (this.ms2 >= 100) {
          this.ss2++;
          this.ms2 = 0;
        }
        if (this.ss2 >= 60) {
          this.mm2++;
          this.ss2 = 0
        }
      }, 10);
    } else {
      clearInterval(this.timerId2);
    }
    this.isRunning2 = !this.isRunning2;
  }


  constructor(private cwiczeniaService:CwiczeniaService, public dialogRef: MatDialogRef<WybierzCwiczeniewTrakcieComponent>  ) {}
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

cwiczenieTemp.ciezar=this.jednoCwiczenie.controls['ciezar'].value
cwiczenieTemp.seria=this.jednoCwiczenie.controls['seria'].value
cwiczenieTemp.powtorzenia=this.jednoCwiczenie.controls['powtorzenia'].value
console.log(cwiczenieTemp)
  this.serie.push(cwiczenieTemp)
  var answer = window.confirm("Czy chcesz dodać kolejna serie?")
  if (answer == true) {
 
    this.submitted2=false;
    this.jednoCwiczenie.reset()
    
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
cwiczenieTemp.seria=this.jednoCwiczenie2.controls['seria'].value
if(this.mm2 <1){
  this.mm2=1;
}
cwiczenieTemp.czas = this.mm2;
cwiczenieTemp.kilometry=this.jednoCwiczenie2.controls['kilometry'].value

console.log(cwiczenieTemp)
  this.serie.push(cwiczenieTemp)
  var answer = window.confirm("Czy chcesz dodać kolejna serie?")
  if (answer == true) {
 this.mm2=0
 this.ms2=0;
 this.ss2=0
    this.submitted3=false;
    this.jednoCwiczenie2.reset()
  
  }
  console.log(this.serie)
  console.log(this.jednoCwiczenie)
}
zakonczenie(){
  if(this.serie.length == 0){
    return;
  }
  if(confirm("Czy chcesz zakończyć dodawanie?")){
    if(this.mm == 0){
      this.mm = 1
    }
    this.historiaCwiczen.czasTrwaniaCwiczenia=this.mm;
    this.historiaCwiczen.jednoCwiczenie=this.serie;
  }
  
}
}
