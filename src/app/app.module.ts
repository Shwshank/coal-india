import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheTableComponent,
    TheContractComponent,
    InfoPageComponent,
    TheUploadComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgPipesModule,
    RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/
  ],
  providers: [APIService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
