import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-reports',
  standalone: true,
  templateUrl: './summary-reports.html',
  styleUrls: ['./summary-reports.css'],
  imports: [CommonModule, FormsModule] // ← REQUIRED for ngModel
})
export class SummaryReportsComponent {

  fromDate: any = '';
  toDate: any = '';
  reportType: string = 'all';
  status: string = 'all';

  summaryText: string = 'No report generated yet';

  generateReport() {
    this.summaryText = '50 incidents in Nov 2025';
  }
}
