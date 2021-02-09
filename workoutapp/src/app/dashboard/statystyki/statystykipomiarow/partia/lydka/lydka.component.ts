import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PomiarService } from 'src/app/service/pomiar.service';

@Component({
  selector: 'app-lydka',
  templateUrl: './lydka.component.html',
  styleUrls: ['./lydka.component.css']
})
export class LydkaComponent implements OnInit {
  noValues:boolean=false;
  lineChartData: ChartDataSets[] = [
    {
      data:[],
      label:'łydka'
    }
  ] ;
  chartReady:boolean=false;

  lineChartLabels: Label[] =[];
  

  lineChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'year',
         
          },
        },
      ]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
     
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

 constructor(private pomiary:PomiarService){}

  ngOnInit(): void {
    this.pomiary.getPomiary().subscribe(
      data=>{
        data.sort(((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()));
        data.forEach(element => {
          if(element.lydka !== 0){
            let i: number=0;
            this.lineChartData[i].data.push(element.lydka);
             this.lineChartLabels.push(element.data);
             i++
          }
        
        }
        
        );
        if(this.lineChartLabels.length === 0){
          this.chartReady = true;
          this.noValues=true;
        }
        console.log(this.lineChartLabels)
        console.log(this.lineChartData)
         this.chartReady = true;
      },error=>{
        this.chartReady = true;
        this.noValues=true;
      }
      
      )
   
  }
  rok(){
    this.lineChartOptions = {
      responsive: true,
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'year',
           
            },
          },
        ]
      }
    };
  }
  miesiac(){
    this.lineChartOptions = {
      responsive: true,
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'month',
           
            },
          },
        ]
      }
    };
  }
  dzien(){
    this.lineChartOptions = {
      responsive: true,
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'day',
           
            },
          },
        ]
      }
    };
  }
}
