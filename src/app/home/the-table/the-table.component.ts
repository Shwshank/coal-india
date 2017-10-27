import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
import { NgForm } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
import './allscript.js';

@Component({
  selector: 'app-the-table',
  templateUrl: './the-table.component.html',
  styleUrls: ['./the-table.component.css']
})
export class TheTableComponent implements OnInit {
  tracker : any;
  date1: any;
  date2: any;
  trackerFlag: any;
  display = false;
  formData = new FormData();
  month: any;
  searchRefreshflag = false;

  constructor(private ProjectService: ProjectService) {
    this.trackerFlag = localStorage.getItem('trackerFlag');
    if(this.trackerFlag == 0) {
      window.location.reload();
      localStorage.setItem('trackerFlag','1');

    } else {

      let temp = localStorage.getItem('tracker');
      temp = JSON.parse(temp);
      this.tracker = temp;
      // console.log(this.tracker);
      this.display = true;
      this.ProjectService.emitTrackerData.subscribe((res) =>{
        localStorage.setItem('tracker',JSON.stringify(res));
        console.log(res);
        if(this.searchRefreshflag){
          window.location.reload();
        }

      });
    }
  }

  ngOnInit() {
    let d = new Date();
    let m = d.getMonth();
    m += 1;
    let y = d.getFullYear();
    this.month = y+'-'+m;
    // console.log(this.month);

    this.formData.append('monthdate', this.month);
    this.ProjectService.getTrackerByDate(this.formData);
    // this.ProjectService.updateTracker();
  }

  ngOnDestroy() {
    localStorage.setItem('trackerFlag','0');
  }

  parseint(data) {
    // console.log(data);
    data = parseInt(data);
    data = +data || 0;
    return data;
  }

  searchByDate() {
    let formData1 = new FormData();
    this.month = this.date2
    formData1.append('monthdate', this.month);
    console.log(this.date2);
    this.ProjectService.getTrackerByDate(formData1);
    //this.ProjectService.getContractByDate(formData);
    this.searchRefreshflag = true;
  }
}
