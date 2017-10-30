import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-summary',
  templateUrl: './the-summary.component.html',
  styleUrls: ['./the-summary.component.css']
})
export class TheSummaryComponent implements OnInit {

  PSUArray = [
    {'name':'SECL', 'id':0},
    {'name':'MCL', 'id':1},
    {'name':'NCL', 'id':2},
    {'name':'WCL', 'id':3},
    {'name':'CCL', 'id':4},];
  psu: any;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  psuSummary(id, name) {
    this.psu = " - "+ name
    // console.log(id);
    this.router.navigate(['home/summary/psusummary'],
        {queryParams: {psu_id: id}});
  }

}
