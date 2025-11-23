import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css']
})
export class ReportsComponent {

  totalReports = 150;
  pending = 20;
  resolved = 120;
  ongoing = 10;

  statusFilter = '';
  dateFilter = '';

  reports = [
    { id: 1, type: 'Sunog', status: 'Pending', date: '2025-4-20' },
    { id: 2, type: 'Baha', status: 'Resolved', date: '2025-1-14' },
    { id: 3, type: 'Nag away', status: 'Ongoing', date: '2025-7-10' },
    { id: 4, type: 'Motor accident', status: 'Resolved', date: '2025-9-2' },
    { id: 5, type: 'Sunog', status: 'Ongoing', date: '2025-6-5' }
  ];

  filteredReports = [...this.reports];

  applyFilters() {
    this.filteredReports = this.reports.filter(r => {
      const matchesStatus = this.statusFilter ? r.status === this.statusFilter : true;
      const matchesDate = this.dateFilter ? r.date === this.dateFilter : true;
      return matchesStatus && matchesDate;
    });
  }
}
