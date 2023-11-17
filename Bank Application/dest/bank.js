"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const savingsAccount_1 = require("./savingsAccount");
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
            console.log('Type of Account:', account instanceof savingsAccount_1.SavingsAccount ? 'Savings' : 'Current');
            console.log('Total Balance:', account.balance);
        }
        else {
            console.log('Account not found.');
        }
    }
    findAccountByNumber(accountNumber) {
        accountNumber = accountNumber.toLowerCase();
        return this.accounts.find(account => account.accountNumber.toLowerCase() === accountNumber);
    }
    addAccount(account) {
        this.accounts.push(account);
    }
}
exports.Bank = Bank;
