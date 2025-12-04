import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  isSidebarCollapsed = false;
  adminUser: any;
  isMobile = false;
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreenSize();

    // 🔥 CHECK ADMIN SESSION INSTEAD OF USER SESSION
    const adminData = localStorage.getItem('adminUser');

    if (adminData) {
      this.adminUser = JSON.parse(adminData);
    } else {
      // ❗ NOT LOGGED IN AS ADMIN → GO BACK TO ADMIN LOGIN
      this.router.navigate(['/admin-login']);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isSidebarCollapsed = true;
    }
  }

  toggleSidebar() {
    if (this.isMobile) {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    } else {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }

  closeMobileMenu() {
    if (this.isMobile) {
      this.mobileMenuOpen = false;
    }
  }

  logout() {
    // 🔥 REMOVE ADMIN SESSION
    localStorage.removeItem('adminUser');
    this.router.navigate(['/admin-login']);
    console.log('Admin logged out successfully');
  }
}
