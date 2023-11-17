import { Account} from './account';
import { SavingsAccount } from './savingsAccount';

export class Bank {
 accounts: Account[] = [];
  
  public showBalance(accountNumber: string) :void {
    const account = this.findAccountByNumber(accountNumber);
    if (account) {
      account.getBalance();
    } else {
      console.log('Account not found.');
    }
  }

  public displayAccountDetails(accountNumber: string):void {
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


  public findAccountByNumber(accountNumber: string): Account | undefined {
    accountNumber = accountNumber.toLowerCase();  
    return this.accounts.find(account => account.accountNumber.toLowerCase() === accountNumber);
  }

  public addAccount(account: Account): void {
    this.accounts.push(account);
  }
}
