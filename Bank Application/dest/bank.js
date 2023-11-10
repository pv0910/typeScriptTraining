"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const account_1 = require("./account");
class Bank {
    constructor() {
        this.accounts = [];
    }
    showBalance(accountNumber) {
        const account = this.findAccountByNumber(accountNumber);
        if (account) {
            account.getBalance();
        }
        else {
            console.log('Account not found.');
        }
    }
    displayAccountDetails(accountNumber) {
        const account = this.findAccountByNumber(accountNumber);
        if (account) {
            console.log('Customer Name:', account.customer.name);
            console.log('Email ID:', account.customer.email);
            console.log('Type of Account:', account instanceof account_1.SavingsAccount ? 'Savings' : 'Current');
            console.log('Total Balance:', account.balance);
        }
        else {
            console.log('Account not found.');
        }
    }
    findAccountByNumber(accountNumber) {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
}
exports.Bank = Bank;
