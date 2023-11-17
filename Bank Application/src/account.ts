import { ICustomer } from "./customer";

export abstract class Account {
    public accountNumber: string;
    public customer: ICustomer;
    public balance: number;
  
    constructor(accountNumber: string, customer: ICustomer, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.customer = customer;
      this.balance = initialBalance;
    }
  
    abstract withdraw(amount: number): void;
    abstract deposit(amount: number): void;
  
    public getBalance():void {
      console.log(`Account balance for ${this.customer.name}: ${this.balance}`);
    }
  }