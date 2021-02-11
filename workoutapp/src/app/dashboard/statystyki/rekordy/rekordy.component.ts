import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TreningService } from 'src/app/service/trening.service';
import { Rekord } from 'src/app/types/rekord';


@Component({
  selector: 'app-rekordy',
  templateUrl: './rekordy.component.html',
  styleUrls: ['./rekordy.component.css']
})
export class RekordyComponent implements OnInit {
  loading:boolean=false;
listaRekordow:Array<Rekord>
dataSource
displayedColumns: string[] = ['nazwa_cwiczenia','maks_ciezar','maks_czas_trwania', 'maks_seria','maks_powtorzenia','maks_czas','maks_kilometry'];
  constructor(private treningService:TreningService) { }

  ngOnInit(): void {
    this.treningService.getRekordy().subscribe(
      data=>{
console.log(data)
this.dataSource=new MatTableDataSource(data)
this.dataSource.filterPredicate = function(data: any, filterValue: string) {
  return data.cwiczenie.nazwa_cwiczenia /** replace this with the column name you want to filter */
    .trim()
    .toLocaleLowerCase().indexOf(filterValue.trim().toLocaleLowerCase()) >= 0;
};
        this.listaRekordow=data;
        console.log( this.listaRekordow)
      this.loading=true;
      },error=>{
        this.loading=true;
      }
    )
  }
filter(value:string){
  console.log(this.dataSource)
  this.dataSource.filter =value
}
}
