import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-the-upload',
  templateUrl: './the-upload.component.html',
  styleUrls: ['./the-upload.component.css']
})
export class TheUploadComponent implements OnInit {

  formData: any;
  files: any

  constructor(private ProjectService: ProjectService) { }

  ngOnInit() {
  }

  updateContract($event) {
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    // console.log(file);
    this.formData = new FormData();
    this.formData.append('file', file);
    console.log(this.formData);
    this.ProjectService.updateContract(this.formData);

  }

  updateTracker($event) {
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    // console.log(file);
    this.formData = new FormData();
    this.formData.append('file', file);
    console.log(this.formData);
    this.ProjectService.updateTracker(this.formData);

  }

}
