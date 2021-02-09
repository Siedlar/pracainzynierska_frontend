import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaTreningu } from 'src/app/types/historia-treningu';

@Component({
  selector: 'app-jeden-trening',
  templateUrl: './jeden-trening.component.html',
  styleUrls: ['./jeden-trening.component.css']
})
export class JedenTreningComponent implements OnInit {

  historiaTreningu:HistoriaTreningu;
  
  constructor(private router:Router){
  }
  
    ngOnInit(): void {
      if(history.state.trening == null ){
        this.router.navigate(['/dashboard/historia-treningu'])
      }
      this.historiaTreningu=history.state.trening
    console.log(this.historiaTreningu)

    }
  }