"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = exports.SavingsAccount = exports.Account = void 0;
class Account {
    constructor(accountNumber, customer, initialBalance) {
        this.accountNumber = accountNumber;
        this.customer = customer;
        this.balance = initialBalance;
    }
    getBalance() {
        console.log(`Account balance for ${this.customer.name}: ${this.balance}`);
    }
}
exports.Account = Account;
class SavingsAccount extends Account {
    constructor(accountNumber, customer, initialBalance) {
        super(accountNumber, customer, initialBalance);
    }
    static getMinimumBalance() {
        return SavingsAccount.minimumBalance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('You cannot withdraw the amount due to insufficient balance.');
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} was successful. New balance: ${this.balance}`);
        }
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposit of ${amount} was successful. New balance: ${this.balance}`);
    }
}
exports.SavingsAccount = SavingsAccount;
SavingsAccount.minimumBalance = 500;
class CurrentAccount extends Account {
    constructor(accountNumber, customer, initialBalance) {
        super(accountNumber, customer, initialBalance);
    }
    static getMinimumBalance() {
        return CurrentAccount.minimumBalance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Balance is less, you need to use OverDraft.');
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} was successful. New balance: ${this.balance}`);
        }
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposit of ${amount} was successful. New balance: ${this.balance}`);
    }
}
exports.CurrentAccount = CurrentAccount;
CurrentAccount.minimumBalance = 1000;
