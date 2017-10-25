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

  constructor(private ProjectService: ProjectService) {
    this.trackerFlag = localStorage.getItem('trackerFlag');
    if(this.trackerFlag == 0) {
      window.location.reload();
      localStorage.setItem('trackerFlag','1');
    } else {
      this.display = true;
      this.ProjectService.emitTrackerData.subscribe((res) =>{
        this.tracker = res;
        console.log(this.tracker);
      });
    }
  }

  ngOnInit() {
    let d = new Date();
    let m = d.getMonth();
    m += 1;
    let y = d.getFullYear();
    console.log(y+'-'+m);
    // this.ProjectService.updateTracker();
  }
  ngOnDestroy() {
    localStorage.setItem('trackerFlag','0');
  }

  parseint(data) {
    data = parseInt(data);
    data = +data || 0;
    return data;
  }

  searchByDate() {
    let formData = new FormData();
    formData.append('date1',this.date1);
    formData.append('date2',this.date2);
    console.log(this.date2);
    //this.ProjectService.getContractByDate(formData);
  }
}
