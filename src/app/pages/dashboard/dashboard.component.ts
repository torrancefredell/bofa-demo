import { Component, OnInit } from '@angular/core';
import { DashboardData } from '../../models';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData!: DashboardData;
  loading = true;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.dashboardService.getDashboardData().subscribe(
      (data) => {
        this.dashboardData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading dashboard:', error);
        this.loading = false;
      }
    );
  }
}