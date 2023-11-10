import { Account, SavingsAccount, CurrentAccount, Customer } from './account';

export class Bank {
  accounts: Account[] = [];
  
  showBalance(accountNumber: string) {
    const account = this.findAccountByNumber(accountNumber);
    if (account) {
      account.getBalance();
    } else {
      console.log('Account not found.');
    }
  }

  displayAccountDetails(accountNumber: string) {
    const account = this.findAccountByNumber(accountNumber);
    if (account) {
      console.log('Customer Name:', account.customer.name);
      console.log('Email ID:', account.customer.email);
      console.log('Type of Account:', account instanceof SavingsAccount ? 'Savings' : 'Current');
      console.log('Total Balance:', account.balance);
    } else {
      console.log('Account not found.');
    }
  }


  private findAccountByNumber(accountNumber: string): Account | undefined {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }
}
