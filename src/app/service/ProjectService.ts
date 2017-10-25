import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';

@Injectable()
export class ProjectService {

  constructor(private APIService: APIService,) {}

  emitTrackerData :  EventEmitter<any> = new EventEmitter<any>();

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

  tracker(data) {
    this.emitTrackerData.emit(data);
  }

  updateTracker() {
    this.tracker(this.trackerData);
  }

  getContract(data) {
    this.APIService.GetUpdatedContract(data).subscribe((res)=>{
      console.log(res.contracts_data);
      this.tracker(res.contracts_data);
    });
    // this.updateTracker();
  }

  updateContract(data) {
    this.APIService.UpdateContract(data).subscribe((res)=>{
      console.log(res);
    });
  }
}

// 	ECT	INDUSTRIES LTD.	MAHAN  		8/8/2017	2469.0075	8/18/2017	Rail	 	Auction	 	10/13/2016	 	WHARFWALL
