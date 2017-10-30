import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import Chart from 'chart.js';

@Component({
  selector: 'app-sm3',
  templateUrl: './sm3.component.html',
  styleUrls: ['./sm3.component.css']
})
export class Sm3Component implements OnInit {

  labels = ['Lifted','Remaining'];

  @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;
  data1 :any;
  data2 :any;
  data3 :any;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitPSUData.subscribe((res)=>{
      console.log(res.data);
      this.data1 = res.data[res.id].vol.total;
      this.data2 = res.data[res.id].vol.lifted;
      this.data3 = res.data[res.id].vol.remaining;
      if(this.data1 != 0){
        this.getGraph();
      }
    });
  }

  ngOnInit() {
  }

  getGraph() {

    this.donutCtx = this.donut.nativeElement.getContext('2d');

     this.myChart = new Chart(this.donutCtx, {
        type: 'doughnut',
        data: {
           labels: this.labels,
           datasets: [{
               data : [this.data2,this.data3],
               backgroundColor: ['#025AA5','#8e8e8e']
           },
         ]
        },
        options: {
             responsive: true,
             legend: {
                 position: 'top',
             },
             title: {
                 display: true,
                 text: 'Signed Amt '+ this.data1,
             },
             animation: {
                 animateScale: true,
                 animateRotate: true
             }
         }
    });
  }

}
