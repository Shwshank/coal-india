import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';
import { NgForm } from '@angular/forms';

@Injectable()
export class ProjectService {

  month : any = '2017-10';

  constructor(private APIService: APIService,) {
    let d = new Date();
    let m = d.getMonth();
    m += 1;
    let y = d.getFullYear();
    this.month = y+'-'+m;
  }

  emitToastMsg :  EventEmitter<any> = new EventEmitter<any>();
  emitContractData :  EventEmitter<any> = new EventEmitter<any>();
  emitTrackerData :  EventEmitter<any> = new EventEmitter<any>();
  emitPSUData :  EventEmitter<any> = new EventEmitter<any>();
  emitPSUArray : EventEmitter<any> = new EventEmitter<any>();
  emitSummaryData : EventEmitter<any> = new EventEmitter<any>();
  emitUserLogin : EventEmitter<any> = new EventEmitter<any>();

  trackerData: any;
  PSUData: any;

  login(data) {
    this.APIService.Login(data).subscribe((res)=>{
      console.log(res);
      if(res.success) {
        localStorage.setItem('login','true');
        this.emitUserLogin.emit('user');
      }
    });
  }

  allPSUData(id) {
    let data = localStorage.getItem('summary');
    data = JSON.parse(data);
    this.emitPSUData.emit( {'data': data, 'id': id} );
  }

  toast(msg1, msg2) {
    this.emitToastMsg.emit({'msg1': msg1, 'msg2': msg2});
  }

  contract(data) {
    this.emitContractData.emit(data);
  }

  tracker(data) {
    this.emitTrackerData.emit(data);
  }

  getContract(data) {
    this.APIService.GetUpdatedContract(data).subscribe((res)=>{
      // console.log(res.contracts_data);
      this.contract(res.contracts_data);
    });
  }

  updateContract(data) {
    this.APIService.UpdateContract(data).subscribe((res)=>{
      // console.log(res);

      // update contract
      this.getContract(1);
    });
  }

  updateTracker(data) {
    this.APIService.UpdateTracker(data).subscribe((res)=>{
      // console.log(res);

      // update Daily tracker data data
      let formData = new FormData();
      formData.append('monthdate', this.month);
      this.getTrackerByDate(formData);
    });
  }

  getTrackerByDate(data) {
    this.APIService.GetTrackerByDate(data).subscribe((res)=>{
      // console.log(res.data);
      this.tracker(res.data);

    });
  }

  getPsuSummary(data) {
    this.APIService.GetAllPSUSummary(data).subscribe((res)=>{
      // console.log(res);
      this.emitSummaryData.emit(res);
      this.PSUData = res.data;

    });
  }

}
