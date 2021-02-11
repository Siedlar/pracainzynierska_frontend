import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CwiczeniaService } from 'src/app/service/cwiczenia.service';
import { TreningService } from 'src/app/service/trening.service';
import { Cwiczenia } from 'src/app/types/cwiczenia';
import { Ekwipunek } from 'src/app/types/ekwipunek';
import { HistoriaCwiczen } from 'src/app/types/historia-cwiczen';
import { HistoriaTreningu } from 'src/app/types/historia-treningu';
import { Partia } from 'src/app/types/partia';
import { Trudnosc } from 'src/app/types/trudnosc';
@Component({
  selector: 'app-statystykitreningow',
  templateUrl: './statystykitreningow.component.html',
  styleUrls: ['./statystykitreningow.component.css']
})
export class StatystykitreningowComponent implements OnInit {
  treningi:Array<HistoriaTreningu>
cwiczenie
zmien:boolean=false;
stworz:boolean=false;
dalej:boolean=false;
cwiczeniaWybrane:HistoriaCwiczen
  constructor(private treningService:TreningService, private cwiczeniaService:CwiczeniaService) { }

  ngOnInit(): void {

  }
  pobierzStatystykiOgolne(){
    this.treningService.getTreningi().subscribe(
      data=>{
        this.treningi=data;
        this.treningi.sort((a, b) => new Date(b.dataTreningu).getTime() - new Date(a.dataTreningu).getTime());
   
        console.log( this.treningi)
        this.stworz=true;
     
      },error=>{
        this.blad=true;
        this.stworz=true;
     }
   )
  }
  przejdzDalej(){
    this.cwiczeniaService.getCwiczenia().subscribe(
      data=>{
        
        this.cwiczenia=data;
        this.cwiczenia.sort((a, b) => a.cwiczenie_id - b.cwiczenie_id);
        this.filterArray=this.cwiczenia
        this.activePageDataChunk = this.filterArray.slice(0,this.pageSize);

     
         this.dalej=true;
      }
    )
    this.Partia=JSON.parse(sessionStorage.getItem('partia'));
    this.Ekwipunek=JSON.parse(sessionStorage.getItem('ekwipunek'));
    this.Trudnosc=JSON.parse(sessionStorage.getItem('trudnosc'));
  


  }
 

//asdsadsad

cwiczenia:Array<Cwiczenia>
dynamicForm: FormGroup;
loading = false;
Partia:Array<Partia>
Ekwipunek:Array<Ekwipunek>
Trudnosc:Array<Trudnosc>
activePageDataChunk:any = []
filterArray: any =[]
pageSize = 9;
pageSizeOptions: number[] = [3, 6, 9, 15];
pageEvent: PageEvent;
blad:boolean=false;

cwiczenieForm = new FormGroup({
  nazwa_cwiczenia: new FormControl(''),
  partia: new FormControl(''),
  trudnosc: new FormControl(''),
  ekwipunek:new FormControl(''),
  })


 
   
    
   

  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.filterArray.slice(firstCut, secondCut);
    window.scroll(0,0);
  }
  szczegoly(cwiczenie){


    { 
    
 
      this.zmien=true;
      this.cwiczenie = cwiczenie;
    this.treningService.getWybraneCwiczenie(this.cwiczenie).subscribe(
      data=>{
  this.cwiczeniaWybrane=data;
  console.log(this.cwiczeniaWybrane)
      },error=>{
  this.blad=true;
      }
    )
  
    }
 

    
    
    

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
    
    
   
  }