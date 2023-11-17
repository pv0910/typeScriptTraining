import { Account } from "./account";
import { ICustomer } from "./customer";

export class SavingsAccount extends Account {
    constructor(accountNumber: string, customer: ICustomer, initialBalance: number) {
      super(accountNumber, customer, initialBalance);
    }

    public withdraw(amount: number):void {
      if (amount > this.balance) {
        console.log('You cannot withdraw the amount due to insufficient balance.');
      } else {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} was successful. New balance: ${this.balance}`);
      }
    }
  
    public deposit(amount: number):void {
      this.balance += amount;
      console.log(`Deposit of ${amount} was successful. New balance: ${this.balance}`);
    }
  }
  