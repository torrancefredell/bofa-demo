import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardData } from '../models';
import { MockBackendService } from './mock-backend.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private mockBackend: MockBackendService) {}

  getDashboardData(): Observable<DashboardData> {
    return this.mockBackend.getDashboardData();
  }
}