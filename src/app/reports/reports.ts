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

  statusFilter = "";
  dateFilter = "";

  reports = [
    {
      type: "Sunog",
      status: "Pending",
      date: "2025-04-20",
      time: "14:20",
      name: "Juan Dela Cruz",
      category: "Fire Incident",
      location: "Brgy. 12 Zone 3",
      description: "Nasunog ang lumang bahay sa may kanto."
    },
    {
      type: "Baha",
      status: "Resolved",
      date: "2025-01-14",
      time: "09:30",
      name: "Maria Santos",
      category: "Calamity",
      location: "Purok Riverside",
      description: "Umakyat ang tubig hanggang tuhod."
    },
    {
      type: "Nag-aaway",
      status: "Ongoing",
      date: "2025-07-10",
      time: "20:15",
      name: "Pedro Ramos",
      category: "Human Misconduct",
      location: "Brgy. San Roque",
      description: "Dalawang lalaki ang nag-away sa kalsada."
    },
    {
      type: "Sunog",
      status: "Resolved",
      date: "2025-09-02",
      time: "11:00",
      name: "Carla Dizon",
      category: "Fire Incident",
      location: "Purok 4",
      description: "Nasunog ang kusina dahil sa gas leak."
    },
    {
      type: "Motor Accident",
      status: "Resolved",
      date: "2025-09-02",
      time: "15:45",
      name: "Luis Mercado",
      category: "Vehicular Accident",
      location: "Brgy. 15 Zone 2",
      description: "Motorcycle collision between two riders."
    },
    {
      type: "Noise Disturbance",
      status: "Ongoing",
      date: "2025-03-18",
      time: "22:10",
      name: "Jenny Lopez",
      category: "Noise Complaint",
      location: "Purok 7",
      description: "Malakas na videoke hanggang gabi."
    },
    {
      type: "Theft",
      status: "Resolved",
      date: "2025-05-30",
      time: "07:40",
      name: "Marco Villanueva",
      category: "Crime",
      location: "Market Area",
      description: "Ninakaw ang cellphone ng vendor."
    }
  ];

  filteredReports = [...this.reports];

  viewReport: any = null;     
  selectedReport: any = null; 
  deleteTarget: any = null;   

  // FILTERING
  applyFilters() {
    this.filteredReports = this.reports.filter(r => {
      const matchesStatus = this.statusFilter ? r.status === this.statusFilter : true;
      const matchesDate = this.dateFilter ? r.date === this.dateFilter : true;
      return matchesStatus && matchesDate;
    });
  }

  // VIEW
  openView(report: any) {
    this.viewReport = report;
  }

  closeView() {
    this.viewReport = null;
  }

  // EDIT
  openEdit(report: any) {
    this.selectedReport = { ...report };
  }

  closeEdit() {
    this.selectedReport = null;
  }

  saveEdit() {
    const i = this.reports.indexOf(
      this.reports.find(r =>
        r.type === this.selectedReport.type &&
        r.date === this.selectedReport.date &&
        r.time === this.selectedReport.time
      )!
    );

    if (i !== -1) {
      this.reports[i].status = this.selectedReport.status;
    }

    this.selectedReport = null;
    this.applyFilters();
  }

  // DELETE (Modal)
  openDelete(report: any) {
    this.deleteTarget = report;
  }

  cancelDelete() {
    this.deleteTarget = null;
  }

  confirmDelete() {
    this.reports = this.reports.filter(r => r !== this.deleteTarget);
    this.filteredReports = [...this.reports];
    this.deleteTarget = null;
  }
}
