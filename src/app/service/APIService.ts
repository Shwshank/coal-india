import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  // projectURL: string = 'http://192.168.15.221:8000';
  projectURL: string = 'http://qcitech.org:8081';

  constructor( private http: Http, ) {}

  AddNewUser(pid: any, fname: any, lname: any, email: any, addp: any,  addsp: any,  viewp: any, editp: any, deletep: any, createnu: any , assignu: any) {
    let uid = localStorage.getItem('uid');
    return this.http.post(this.projectURL+'/adduser', '{"upid": "'+uid+'", "fname" : "'+fname+'", "lname" : "'+lname+'", "email": "'+email+'" , "addp": '+addp+', "addsp": '+addsp+', "viewp": '+viewp+', "editp":'+editp+', "deletep": '+deletep+', "createnu": '+createnu+', "assignu": '+assignu+'}');
  }
  GetUpdatedContract(data) {
    return this.http.get(this.projectURL+'/getallcontractsdata').map(res=>res.json());
  }

  GetTrackerByDate(data) {
    // console.log(data);
    return this.http.post(this.projectURL+'/getallcontractsmonthdata',data).map(res=>res.json());
  }

  UpdateContract(data) {
    // console.log(data);
    return this.http.post(this.projectURL+'/uploadcontracts',data);
  }

  UpdateTracker(data) {
    // console.log(data);
    return this.http.post(this.projectURL+'/uploaddailyentry',data);
  }


}
