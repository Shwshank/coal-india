import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from 'ng2-toastr';
import { CustomOption } from './ng2-toastr-custom-option';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TheTableComponent } from './home/the-table/the-table.component';
import { APIService } from './service/APIService';
import { ProjectService } from './service/ProjectService';
import { NgPipesModule } from 'ngx-pipes';
import { TheContractComponent } from './home/the-contract/the-contract.component';
import { InfoPageComponent } from './home/info-page/info-page.component';
import { TheUploadComponent } from './home/the-upload/the-upload.component';
import { TheSummaryComponent } from './home/the-summary/the-summary.component';
import { SummaryContentComponent } from './home/the-summary/summary-content/summary-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheTableComponent,
    TheContractComponent,
    InfoPageComponent,
    TheUploadComponent,
    TheSummaryComponent,
    SummaryContentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpModule,
    NgPipesModule,
    RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/
  ],
  providers: [
    APIService,
    ProjectService,
    {provide: ToastOptions, useClass: CustomOption},
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
