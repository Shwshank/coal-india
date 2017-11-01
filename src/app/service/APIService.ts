import { Http, Response, Headers, RequestOptions,BaseRequestOptions, RequestMethod} from '@angular/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class APIService {

  projectURL: string = 'http://192.168.15.221:8000';  // actual ip is 221 at the end
  // projectURL: string = 'http://qcitech.org:8081';

  constructor( private http: Http, ) {}

  Login(data) {
    return this.http.post(this.projectURL+'/login',data).map(res=>res.json());
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
    return this.http.post(this.projectURL+'/uploadprocesstracker',data);
  }

  GetAllPSUSummary(data) {
    // console.log(data);
    return this.http.get(this.projectURL+'/getsubsidiarysummary',data).map(res=>res.json());
  }


}
