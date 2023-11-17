"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
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
