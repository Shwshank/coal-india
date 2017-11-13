import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-summary',
  templateUrl: './the-summary.component.html',
  styleUrls: ['./the-summary.component.css']
})
export class TheSummaryComponent implements OnInit {

  PSUArray : any;
  psu: any;

  constructor(private router: Router) {
    let temp = localStorage.getItem('psuidname');
    temp = JSON.parse(temp);
    this.PSUArray = temp;
  }

  ngOnInit() {
  }

  psuSummary(id, name) {

    localStorage.setItem('summaryFlag','1');
    this.psu = " - "+ name
    this.router.navigate(['home/summary/psusummary'],
        {queryParams: {psu_id: id}});

  }

}
