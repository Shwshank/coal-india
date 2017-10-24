import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
import { NgForm } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';

import './allscript.js';

@Component({
  selector: 'app-the-contract',
  templateUrl: './the-contract.component.html',
  styleUrls: ['./the-contract.component.css']
})
export class TheContractComponent implements OnInit {
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


}
