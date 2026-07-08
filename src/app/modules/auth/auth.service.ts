import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

interface AuthUser {
  name: string;
  id: string;
  role: string;
}

interface AuthResponse {
  authenticated: boolean;
  token: string;
  user: AuthUser | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: AuthUser | null = null;
  private readonly MOCK_TOKEN = 'mock-bofa-sso-token-' + Date.now();

  constructor() {
    // Initialize with mock user (simulating SSO session)
    this.currentUser = {
      name: 'Tori F.',
      id: 'user123',
      role: 'retail-banking-customer'
    };
  }

  // Mock BofA internal SSO integration
  loginWithSSO(): Observable<AuthResponse> {
    return of({
      authenticated: true,
      token: this.MOCK_TOKEN,
      user: this.currentUser
    }).pipe(delay(500)); // Simulate network delay
  }

  // Mock multi-factor authentication
  verifyMFA(code: string): Observable<boolean> {
    // Always return true for demo
    return of(true).pipe(delay(300));
  }

  // Mock session management
  getToken(): string {
    return this.MOCK_TOKEN;
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUser;
  }

  logout(): Observable<boolean> {
    this.currentUser = null;
    return of(true).pipe(delay(200));
  }

  // Mock SSO provider integration
  validateSSOSession(): Observable<boolean> {
    return of(true).pipe(delay(300));
  }
}
