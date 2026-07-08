import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardData } from '../models';
import { MockBackendService } from './mock-backend.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private mockBackend = inject(MockBackendService);

  getDashboardData(): Observable<DashboardData> {
    return this.mockBackend.getDashboardData();
  }
}
