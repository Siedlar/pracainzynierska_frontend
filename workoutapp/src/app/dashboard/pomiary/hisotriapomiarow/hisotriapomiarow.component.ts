import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { PomiarService } from 'src/app/service/pomiar.service';
import { Pomiar } from 'src/app/types/pomiar';

@Component({
  selector: 'app-hisotriapomiarow',
  templateUrl: './hisotriapomiarow.component.html',
  styleUrls: ['./hisotriapomiarow.component.css']
})
export class HisotriapomiarowComponent implements OnInit, AfterViewInit{
 pomiary:Array<Pomiar>
 activePageDataChunk:any = []
 pageSize = 9;
 pageSizeOptions: number[] = [3, 6, 9, 15];
 pageEvent: PageEvent;
 fail=true;
 loading = true;
 failMessage="Uzytkownik nie posiada jeszcze żadnej historii pomiarów."
  constructor(private pomiar:PomiarService,private router:Router) { }
  ngAfterViewInit(): void {

    
  }


  ngOnInit(): void {
    this.pomiar.getPomiary().subscribe(
      data=>{
      
     
        this.pomiary=data;     
        this.pomiary.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
        this.loading = false;
        this.activePageDataChunk = this.pomiary.slice(0,this.pageSize);
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
    this.activePageDataChunk = this.pomiary.slice(firstCut, secondCut);
  }
  deletePomiar(pomiary){
    if(confirm("Czy jesteś pewien że chcesz usunąć ten pomiar?")){
    this.pomiar.deletePomiar(pomiary).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }}
  editPomiar(pomiar){
    if(confirm("Czy chcesz edytować ten pomiar?")){
    this.router.navigate(['/dashboard/dodaj-pomiar'],{state:{pomiar}})}
  }
}
