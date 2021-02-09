import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PomiarService } from 'src/app/service/pomiar.service';
import { TreningService } from 'src/app/service/trening.service';
import { HistoriaTreningu } from 'src/app/types/historia-treningu';
import { Pomiar } from 'src/app/types/pomiar';

@Component({
  selector: 'app-historiatreningow',
  templateUrl: './historiatreningow.component.html',
  styleUrls: ['./historiatreningow.component.css']
})
export class HistoriatreningowComponent implements OnInit {
  treningi:Array<HistoriaTreningu>
  activePageDataChunk:any = []
  pageSize = 9;
  pageSizeOptions: number[] = [3, 6, 9, 15];
  pageEvent: PageEvent;
  fail=true;
  loading = true;
  failMessage="Uzytkownik nie posiada jeszcze żadnej historii treningow."
   constructor(private router:Router,private treningService:TreningService) { }
   ngAfterViewInit(): void {
 
     
   }
 
 
   ngOnInit(): void {
     this.treningService.getTreningi().subscribe(
       data=>{
         this.treningi=data;
         this.treningi.sort((a, b) => new Date(b.dataTreningu).getTime() - new Date(a.dataTreningu).getTime());
    
         console.log( this.treningi)
         this.loading = false;
         this.activePageDataChunk = this.treningi.slice(0,this.pageSize);
         this.fail=false;
       },error=>{
        console.log(error.message);
        this.fail=true;
        this.loading = false;
      }
    )

    }
    
   
   setPageSizeOptions(setPageSizeOptionsInput: string) {
     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
   }
   onPageChanged(e) {
     let firstCut = e.pageIndex * e.pageSize;
     let secondCut = firstCut + e.pageSize;
     this.activePageDataChunk = this.treningi.slice(firstCut, secondCut);
   }
   deleteTrening(trening){
    if(confirm("Czy jesteś pewien że chcesz usunąć ten trening?")){
      console.log(trening)
      this.treningService.deleteTreningi(trening).subscribe(
        data=>{
          window.location.reload();
        }
      )
    }
   }
   szczegolyTreningu(trening){
    if(confirm("Czy chcesz zobaczyć szczegóły tego treningu?")){
      this.router.navigate(['/dashboard/jeden-trening'],{state:{trening}})}
   }
 }
 