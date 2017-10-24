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

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitTrackerData.subscribe((res) =>{
      this.tracker = res;
      console.log(this.tracker);
    });
  }

  ngOnInit() {
    this.ProjectService.updateTracker();
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
    console.log('emited');
    this.ProjectService.getContractByDate(formData);
  }
}
