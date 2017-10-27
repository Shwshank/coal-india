import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-summary',
  templateUrl: './the-summary.component.html',
  styleUrls: ['./the-summary.component.css']
})
export class TheSummaryComponent implements OnInit {

  constructor(private router: Router, ) {}

  ngOnInit() {
  }

  psuSummary(id) {
    this.router.navigate(['home/summary/psusummary'],
        {queryParams: {psu_id: id}});
  }


}
