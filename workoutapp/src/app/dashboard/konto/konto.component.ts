import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.css']
})
export class KontoComponent implements OnInit {
  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
  }
}
