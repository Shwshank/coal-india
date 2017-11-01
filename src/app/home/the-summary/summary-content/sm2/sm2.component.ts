import {  ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { ProjectService } from '../../../../service/ProjectService';
import Chart from 'chart.js';

@Component({
  selector: 'app-sm2',
  templateUrl: './sm2.component.html',
  styleUrls: ['./sm2.component.css']
})
export class Sm2Component implements OnInit {

  labels = ['Lifted','Remaining'];

  @ViewChild('donut') donut: ElementRef;
  donutCtx: any;
  myChart: any;
  data1 : any;
  data2 : any;
  data3 : any;
  data4 : any;
  data5 : any;
  data6 : any;
  data7 : any;
  label1: any;
  label2: any;
  label3: any;
  label4: any;
  label5: any;
  display = false;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitPSUData.subscribe((res)=>{

      // console.log(res.data);
      this.data1 = res.data[res.id].results[0][1];
      this.data2 = res.data[res.id].results[1][1];
      this.data3 = res.data[res.id].results[2][1];

      this.label1 = res.data[res.id].results[0][0];
      this.label2 = res.data[res.id].results[1][0];
      this.label3 = res.data[res.id].results[2][0];

      if(this.data1 == 0){
        this.display = false;
      } else {
        this.display = true;
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
           labels: [this.label2, this.label3],
           datasets: [{
               data : [this.data2,this.data3],
               backgroundColor: ['#025AA5','#8e8e8e']
           },
         ]
        },
        options: {
             
             responsive: true,
             legend: {
                 display: false,
                 position: 'top',
             },
             title: {
                 display: true,
                 text: this.label1 +' '+ this.data1,
             },
             animation: {
                 animateScale: true,
                 animateRotate: true
             }
         }
    });
  }

}
