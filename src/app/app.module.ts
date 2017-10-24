import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TheTableComponent } from './home/the-table/the-table.component';
import { APIService } from './service/APIService';
import { ProjectService } from './service/ProjectService';
import { NgPipesModule } from 'ngx-pipes';
import { TheContractComponent } from './home/the-contract/the-contract.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheTableComponent,
    TheContractComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgPipesModule
  ],
  providers: [APIService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
