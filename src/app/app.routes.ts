import { Routes } from '@angular/router';

// import { AuthGuard } from './service/AuthGuard';
import { HomeComponent } from './home/home.component';
import { TheTableComponent } from './home/the-table/the-table.component';
import { TheContractComponent } from './home/the-contract/the-contract.component';
import { InfoPageComponent } from './home/info-page/info-page.component';
import { TheUploadComponent } from './home/the-upload/the-upload.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'/home/' },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', component: InfoPageComponent,},
      { path: 'tracker', component: TheTableComponent,},
      { path: 'contract', component: TheContractComponent,},
      { path: 'upload', component: TheUploadComponent,},
      { path: '**', component: InfoPageComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];
