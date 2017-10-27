import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-summary-content',
  templateUrl: './summary-content.component.html',
  styleUrls: ['./summary-content.component.css']
})
export class SummaryContentComponent implements OnInit {

  psu_id: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let sub = this.route.queryParams
      .subscribe(params => {
          this.psu_id = params.psu_id;
          console.log(this.psu_id);
      });
  }

}
