import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../service/ProjectService';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  formData = new FormData();

  constructor(private route: ActivatedRoute, private router: Router,
    private ProjectService: ProjectService, public toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);

    this.ProjectService.emitToastMsg.subscribe((res)=>{
      // this.showSuccess(res.msg1, res.msg2);
    });

    // Get Contract related data nad store in local storage
    // ------------------------------------------------------- starts here
    this.ProjectService.emitContractData.subscribe((res) =>{
      // console.log(res);
      localStorage.setItem('contracts',JSON.stringify(res));
    });
    // ------------------------------------------------------- end here


    // Get tracker related data nad store in local storage
    // ------------------------------------------------------- starts here
    this.ProjectService.emitTrackerData.subscribe((res) =>{
      localStorage.setItem('tracker',JSON.stringify(res));
      // console.log(res);
    });
    // -------------------------------------------------------ends here

  }

  ngOnInit() {

    // this.showSuccess('1','1');
    // Get Contract api
    this.ProjectService.getContract(1);

    // Get Tracker api
    let d = new Date();
    let m = d.getMonth();
    m += 1;
    let y = d.getFullYear();
    let month = y+'-'+m;
    this.formData.append('monthdate', month);
    this.ProjectService.getTrackerByDate(this.formData);

  }

  showSuccess(msg1, msg2) {
    this.toastr.info('You are awesome!', 'Success!', {enableHTML: true});
  }

}
