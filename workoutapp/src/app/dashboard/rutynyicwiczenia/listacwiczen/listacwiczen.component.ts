import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CwiczeniaService } from 'src/app/service/cwiczenia.service';
import { Cwiczenia } from 'src/app/types/cwiczenia';
import { Ekwipunek } from 'src/app/types/ekwipunek';
import { Partia } from 'src/app/types/partia';
import { Trudnosc } from 'src/app/types/trudnosc';

@Component({
  selector: 'app-listacwiczen',
  templateUrl: './listacwiczen.component.html',
  styleUrls: ['./listacwiczen.component.css']
})
export class ListacwiczenComponent implements OnInit {
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


cwiczenieForm = new FormGroup({
  nazwa_cwiczenia: new FormControl(''),
  partia: new FormControl(''),
  trudnosc: new FormControl(''),
  ekwipunek:new FormControl(''),
  })
  constructor(private cwiczeniaService:CwiczeniaService,private formBuilder: FormBuilder,private router:Router) { }

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
  szczegoly(cwiczenie){
    this.router.navigate(['/dashboard/cwiczenie'],{state:{cwiczenie}})
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


