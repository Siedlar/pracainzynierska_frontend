import { Component, OnInit } from '@angular/core';
import { TreningService } from 'src/app/service/trening.service';
import { Rekord } from 'src/app/types/rekord';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-rekordy',
  templateUrl: './rekordy.component.html',
  styleUrls: ['./rekordy.component.css']
})
export class RekordyComponent implements OnInit {
listaRekordow:Array<Rekord>
dataSource
displayedColumns: string[] = ['nazwa_cwiczenia','maks_ciezar','maks_czas_trwania', 'maks_seria','maks_powtorzenia','maks_czas','maks_kilometry'];
  constructor(private treningService:TreningService) { }

  ngOnInit(): void {
    this.treningService.getRekordy().subscribe(
      data=>{
console.log(data)
this.dataSource=data
        this.listaRekordow=data;
        console.log( this.listaRekordow)
      
      },error=>{

      }
    )
  }

}
