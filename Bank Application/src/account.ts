import { Customer } from "./customer";

export abstract class Account {
    accountNumber: string;
    customer: Customer;
    balance: number;
  
    constructor(accountNumber: string, customer: Customer, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.customer = customer;
      this.balance = initialBalance;
    }
  
    abstract withdraw(amount: number): void;
    abstract deposit(amount: number): void;
  
    getBalance() {
      console.log(`Account balance for ${this.customer.name}: ${this.balance}`);
    }

  }
  
  export class SavingsAccount extends Account {
    constructor(accountNumber: string, customer: Customer, initialBalance: number) {
      super(accountNumber, customer, initialBalance);
    }
    private static minimumBalance = 500;

    static getMinimumBalance(): number {
      return SavingsAccount.minimumBalance;
    }
    withdraw(amount: number) {
      if (amount > this.balance) {
        console.log('You cannot withdraw the amount due to insufficient balance.');
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} was successful. New balance: ${this.balance}`);
      }
    }
  
    deposit(amount: number) {
      this.balance += amount;
      console.log(`Deposit of ${amount} was successful. New balance: ${this.balance}`);
    }
  }
  
  export class CurrentAccount extends Account {
    constructor(accountNumber: string, customer: Customer, initialBalance: number) {
      super(accountNumber, customer, initialBalance);
    }
    private static minimumBalance = 1000;

    static getMinimumBalance(): number {
      return CurrentAccount.minimumBalance;
    }
    withdraw(amount: number) {
      if (amount > this.balance) {
        console.log('Balance is less, you need to use OverDraft.');
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} was successful. New balance: ${this.balance}`);
      }
    }
  
    deposit(amount: number) {
      this.balance += amount;
      console.log(`Deposit of ${amount} was successful. New balance: ${this.balance}`);
    }
  }

export { Customer };
  