import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-szczegoly-treningu',
  templateUrl: './szczegoly-treningu.component.html',
  styleUrls: ['./szczegoly-treningu.component.css']
})
export class SzczegolyTreninguComponent implements OnInit {
  trening :any
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(history.state.trening == null ){
      this.router.navigate(['/dashboard/lista-rutyn'])
    }
    this.trening=history.state.trening

  }
}
