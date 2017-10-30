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

  trackerData: any = [{'d1':'ECT', 'd2':'ADANI POWER LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'2412369', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'WHARFWALL','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'ADANI LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'HINDALKO LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},
                      {'d1':'REW', 'd2':'INDUSTRIES LTD.', 'd3': 'MAHAN','d4':'8/8/2017', 'd5':'123333469', 'd6': '8/18/2017', 'd7': 'Rail', 'd8': '', 'd9':'Auction', 'd10': '',
                      'd11':'10/13/2016', 'd12':'', 'd13': 'dummy','d14': '', 'd15': '365'},


                    ] ;

  PSUData: any = [
    { 'vol': { 'total' : 100, 'lifted': 30,  'remaining': 70 }, 'results': { 'total' : 100, 'lifted': 30,  'remaining': 70 } } ,
    { 'vol': { 'total' : 200, 'lifted': 80,  'remaining': 120} } ,
    { 'vol': { 'total' : 200, 'lifted': 180, 'remaining': 20 } } ,
    { 'vol': { 'total' : 100, 'lifted': 50,  'remaining': 50 } } ,
    { 'vol': { 'total' : 200, 'lifted': 40,  'remaining': 160} } ,
  ];

  allPSUData(id) {
    this.emitPSUData.emit( {'data': this.PSUData, 'id': id} );
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
}
