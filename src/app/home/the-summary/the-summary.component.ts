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
    this.psu = " - "+ name
    // console.log(id);
    this.router.navigate(['home/summary/psusummary'],
        {queryParams: {psu_id: id}});
  }

}
