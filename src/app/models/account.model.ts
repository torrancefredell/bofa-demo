export type AccountType = 'checking' | 'savings' | 'credit';

export interface Account {
  accountNumber: string;
  accountType: AccountType;
  balance: number;
  availableBalance: number;
}