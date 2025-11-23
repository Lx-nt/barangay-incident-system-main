import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface IncidentType {
  icon: string;
  type: string;
  count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  monthlyStats = {
    total: 38,
    resolved: 30,
    ongoing: 5,
    pending: 3
  };

  incidentTypes: IncidentType[] = [
    { icon: '🔥', type: 'Fire Incidents', count: 6 },
    { icon: '🌧️', type: 'Flooding Incidents', count: 4 },
    { icon: '👊', type: 'Physical Altercation', count: 12 },
    { icon: '🚨', type: 'Theft / Crime', count: 7 },
    { icon: '🐱', type: 'Animal-related Reports', count: 3 }
  ];

  constructor() { }

  ngOnInit(): void {
    // Bar Chart - Incidents per Month
    new Chart("monthlyBarChart", {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Incidents',
          data: [5, 8, 6, 7, 10, 12, 15, 10, 9, 6, 8, this.monthlyStats.total],
          backgroundColor: '#007bff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,   // fills the container
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });

    // Pie Chart - Incident distribution by type
    new Chart("incidentPieChart", {
      type: 'pie',
      data: {
        labels: this.incidentTypes.map(i => i.type),
        datasets: [{
          data: this.incidentTypes.map(i => i.count),
          backgroundColor: ['#ff6384','#36a2eb','#ffcd56','#4bc0c0','#9966ff']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,   // fills the container
        plugins: {
          legend: {
            display: true,            // show labels
            position: 'right',        // move legend to the right
            labels: {
              font: {
                size: 14             // increase text size
              },
              boxWidth: 20           // make color box bigger
            }
          }
        }
      }
    });
  }
}
