import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RecentReport {
  type: string;
  icon: string;
  status: 'Pending' | 'Resolved' | 'Ongoing';
  datetime: string;
  location: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  totalReports = 6;   // total reports based on 6 incidents  
  pending = 3;
  resolved = 1;
  ongoing = 2;

  // ⭐ RECENT REPORTS — USING YOUR BARANGAY INCIDENT TYPES
  recentReports: RecentReport[] = [
    {
      type: 'Nag-aaway',
      icon: '👊',
      status: 'Pending',
      datetime: '2025-12-25 12:57:00',
      location: 'Brgy. Pag-Asa'
    },
    {
      type: 'Baha',
      icon: '🌧️',
      status: 'Resolved',
      datetime: '2025-12-24 09:20:00',
      location: 'Zone 2 Riverside'
    },
    {
      type: 'Vehicular Accident',
      icon: '🚗',
      status: 'Ongoing',
      datetime: '2025-12-22 17:45:00',
      location: 'Brgy. Sta. Cruz'
    },
    {
      type: 'Noise Disturbance',
      icon: '🔊',
      status: 'Pending',
      datetime: '2025-12-21 23:10:00',
      location: 'Purok Maligaya'
    },
    {
      type: 'Theft',
      icon: '🛍️',
      status: 'Ongoing',
      datetime: '2025-12-20 11:30:00',
      location: 'Sitio Riverside'
    },
    {
      type: 'Property Damage',
      icon: '🏚️',
      status: 'Resolved',
      datetime: '2025-12-18 14:15:00',
      location: 'Brgy. San Roque'
    }
  ];
}
