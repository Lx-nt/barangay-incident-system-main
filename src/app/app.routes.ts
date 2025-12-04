import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { HomeComponent } from './home/home';
import { AddReportComponent } from './add-report/add-report';
import { ReportsComponent } from './reports/reports';
import { SummaryReportsComponent } from './summary-reports/summary-reports';
import { SettingsComponent } from './settings/settings';

// USER MODULE IMPORTS
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserSettingsComponent } from './user-setting/user-settings.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserReportComponent } from './user-report/user-report.component';

// REGISTER PAGE
import { RegisterComponent } from './register/register.component';

// ABOUT + CONTACT PAGES
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

// ⭐ ADMIN LOGIN PAGE
import { AdminLoginComponent } from './admin-login/admin-login.component';

export const routes: Routes = [

  // FIRST PAGE
  { path: 'register', component: RegisterComponent },

  // USER LOGIN
  { path: 'login', component: LoginComponent },

  // ⭐ ADMIN LOGIN ROUTE
  { path: 'admin-login', component: AdminLoginComponent },

  // PUBLIC LANDING PAGE
  { path: 'user-landing', component: UserLandingComponent },

  // ABOUT US + CONTACT
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },

  // USER SIDEBAR AREA
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: 'settings', component: UserSettingsComponent },
      { path: 'settings/edit', component: UserEditProfileComponent },
      { path: 'report', component: UserReportComponent },
      { path: '', redirectTo: 'report', pathMatch: 'full' }
    ]
  },

  // ⭐ ADMIN DASHBOARD
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

  // DEFAULT ROUTE
  { path: '', redirectTo: '/register', pathMatch: 'full' },

  // FALLBACK
  { path: '**', redirectTo: '/register' }
];
