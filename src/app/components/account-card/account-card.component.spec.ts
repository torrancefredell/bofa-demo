import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountCardComponent } from './account-card.component';

describe('AccountCardComponent', () => {
  let component: AccountCardComponent;
  let fixture: ComponentFixture<AccountCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccountCardComponent]
    });
    fixture = TestBed.createComponent(AccountCardComponent);
    component = fixture.componentInstance;
    component.account = {
      accountNumber: '****1234',
      accountType: 'checking',
      balance: 1000,
      availableBalance: 950
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});