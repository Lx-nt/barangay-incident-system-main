import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class SettingsComponent {
  activeTab = 'profile'; // default tab

  settings = {
    profile: { fullName: '', email: '' },
    password: { current: '', new: '', confirm: '' },
    system: { mode: 'live', language: 'English' },
    barangay: { name: '', address: '', contact: '' },
    notifications: { email: false, sms: false, push: false },
    users: [
      { id: 1, name: 'Admin', role: 'Administrator', status: 'Active' },
      { id: 2, name: 'User1', role: 'Staff', status: 'Active' }
    ]
  };

  // Profile tab
  saveProfile() {
    console.log('Profile saved', this.settings.profile);
    alert('Profile saved!');
  }

  // Password tab
  changePassword() {
    if (this.settings.password.new !== this.settings.password.confirm) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password changed', this.settings.password);
    alert('Password changed!');
  }

  // System tab
  saveSystemConfig() {
    console.log('System config saved', this.settings.system);
    alert('System configuration saved!');
  }

  // Barangay tab
  saveBarangayInfo() {
    console.log('Barangay info saved', this.settings.barangay);
    alert('Barangay info saved!');
  }

  // Notifications tab
  saveNotifications() {
    console.log('Notification preferences saved', this.settings.notifications);
    alert('Notification preferences saved!');
  }

  // Users tab
  editUser(user: any) {
    console.log('Edit user', user);
    alert(`Edit user: ${user.name}`);
  }

  deleteUser(user: any) {
    const confirmed = confirm(`Are you sure you want to delete ${user.name}?`);
    if (confirmed) {
      this.settings.users = this.settings.users.filter(u => u.id !== user.id);
      alert('User deleted!');
    }
  }
}
