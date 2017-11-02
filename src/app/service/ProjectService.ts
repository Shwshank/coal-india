import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProjectService {

  month : any = '2017-10';

  constructor(private APIService: APIService,private route: ActivatedRoute, private router: Router,) {
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

  internetConnection() {

    window.addEventListener('online', () => {
      this.toast('Please refresh','Online!');
      });

    window.addEventListener('offline', () => {
      this.toast('Some components might not work','Offline!');
      });
  }

  login(data) {
    this.APIService.Login(data).subscribe((res)=>{
      console.log(res);
      if(res.success) {
        localStorage.setItem('login','true');
        this.emitUserLogin.emit('user');
      } else {
        // this.toast('Invalid username or password ', 'Error!');
      }
    }, (err)=>{
      console.log(err);
      this.toast('Invalid username or password ', 'Error!');
    });
  }

  logout() {
    // localStorage.setItem('login','');
    localStorage.removeItem('contractFlag');
    localStorage.removeItem('contracts');
    localStorage.removeItem('login');
    localStorage.removeItem('psuidname');
    localStorage.removeItem('summary');
    localStorage.removeItem('tracker');
    localStorage.removeItem('trackerFlag');

    this.router.navigate(['./login']);
  }

  checkLogin() {
    let login = localStorage.getItem('login');
    if(login === 'true') {
      this.router.navigate(['./home']);
    }
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
    this.internetConnection();
    this.APIService.GetUpdatedContract(data).subscribe((res)=>{
      if(res.success) {
        this.contract(res.contracts_data);
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  updateContract(data) {
    this.APIService.UpdateContract(data).subscribe((res)=>{
      // console.log(res);
      if(res){
        this.getContract(1);
        this.toast('Contract updated','Success!');
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  updateTracker(data) {
    this.APIService.UpdateTracker(data).subscribe((res)=>{
      if(res) {
      // console.log(res);

      // update Daily tracker data data
      let formData = new FormData();
      formData.append('monthdate', this.month);
      this.getTrackerByDate(formData);
      this.toast('Tracker updated','Success!');
    } else{}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  getTrackerByDate(data) {
    this.APIService.GetTrackerByDate(data).subscribe((res)=>{
      if(res.success) {
        // console.log(res.data);
        this.tracker(res.data);
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

  getPsuSummary(data) {
    this.APIService.GetAllPSUSummary(data).subscribe((res)=>{
      if(res.success){
        // console.log(res);
        this.emitSummaryData.emit(res);
        this.PSUData = res.data;
      } else {}
    }, (err)=>{
      console.log(err);
      this.toast('Something went wrong. Please check logs ','Error!');
    });
  }

}
