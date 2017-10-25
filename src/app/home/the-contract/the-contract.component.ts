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
  contractFlag: any;
  display = false;
  formData: any;
  files: any

  constructor(private ProjectService: ProjectService) {
    this.contractFlag = localStorage.getItem('contractFlag');

    if(this.contractFlag === '0'){
      window.location.reload();
      localStorage.setItem('contractFlag','1');
    } else {
      this.display = true;
      this.ProjectService.emitTrackerData.subscribe((res) =>{
        this.tracker = res;
        console.log(this.tracker);
      });

    }
  }

  ngOnInit() {
    this.ProjectService.updateTracker();
  }

  ngOnDestroy() {
    localStorage.setItem('contractFlag','0');
  }

  parseint(data) {
    data = parseInt(data);
    data = +data || 0;
    return data;
  }

  updated($event) {
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    // console.log(file);
    this.formData = new FormData();
    this.formData.append('file', file);
    console.log(this.formData);
    this.ProjectService.updateContract(this.formData);

  }

}
