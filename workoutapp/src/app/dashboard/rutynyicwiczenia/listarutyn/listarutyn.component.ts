import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TreningService } from 'src/app/service/trening.service';

@Component({
  selector: 'app-listarutyn',
  templateUrl: './listarutyn.component.html',
  styleUrls: ['./listarutyn.component.css']
})
export class ListarutynComponent implements OnInit {
  activePageDataChunk:any = []
  filterArray: any =[]
  pageSize = 9;
  pageSizeOptions: number[] = [3, 6, 9, 15];
  pageEvent: PageEvent;
 
  constructor(private treningService:TreningService ,private router:Router) { }

  ngOnInit(): void {
    this.treningService.getPrzykladoweTreningi().subscribe(
      data=>{
console.log(data)
this.filterArray= data;
this.activePageDataChunk = this.filterArray.slice(0,this.pageSize);
      },error=>{

      }
    )
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
  szczegolyCwiczenia(trening){
    this.router.navigate(['/dashboard/szczegoly-treningu'],{state:{trening}})
  }
}
