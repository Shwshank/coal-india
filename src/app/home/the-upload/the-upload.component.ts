import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-the-upload',
  templateUrl: './the-upload.component.html',
  styleUrls: ['./the-upload.component.css']
})
export class TheUploadComponent implements OnInit {

  formData = new FormData();;
  files: any;
  updatedData: any= {'value2':[],'value3':[],'value4':[],'value5':[],'value6':[],'value7':[],'value8':[]};
  display: any= false;
  flag = 0;

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.emitContractMsg.subscribe((res)=>{
      this.updatedData = res;
      this.display= true;
      $("#exampleModal1").modal('show');
    });
    }

  ngOnInit() {
  }

  updateContract($event) {
    console.log('1');
    this.flag=1;
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    // console.log(file);
    this.formData = new FormData();
    this.formData.append('file', file);
    // console.log(this.formData);
    // this.ProjectService.updateContract(this.formData);
    this.ProjectService.checkUploadedContracts(this.formData);

  }

  updateTracker($event) {
    console.log('2');
    this.flag=2;
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    // console.log(file);
    this.formData = new FormData();
    this.formData.append('file', file);
    // console.log(this.formData);
    // this.ProjectService.updateTracker(this.formData);
    this.ProjectService.checkUploadedTracker(this.formData);

  }

  openURL(url) {
    window.open(url,'_blank');
  }

  proceed() {
    if(this.flag==1){

      this.ProjectService.updateContract(this.formData);
    } else if(this.flag==2) {

      this.ProjectService.updateTracker(this.formData);
    }
    // window.location.reload();
  }

  

}
