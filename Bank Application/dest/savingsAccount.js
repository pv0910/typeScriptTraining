"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const account_1 = require("./account");
class SavingsAccount extends account_1.Account {
    constructor(accountNumber, customer, initialBalance) {
        super(accountNumber, customer, initialBalance);
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
