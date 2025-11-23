import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { HomeComponent } from './home/home';
import { AddReportComponent } from './add-report/add-report';
import { ReportsComponent } from './reports/reports';
import { SummaryReportsComponent } from './summary-reports/summary-reports';
import { SettingsComponent } from './settings/settings';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'add-report', component: AddReportComponent },
      { path: 'summary-reports', component: SummaryReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];