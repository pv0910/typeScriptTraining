"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const bank_1 = require("./bank");
const account_1 = require("./account");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function displayMenu() {
    console.log('Welcome to our bank application');
    console.log('1. Create New Account');
    console.log('2. View Balance');
    console.log('3. Display Account Details');
    console.log('4. Exit from Application');
    rl.question('Please select an option (1-4): ', (choice) => {
        handleUserChoice(choice);
    });
}
function handleUserChoice(choice) {
    switch (choice) {
        case '1':
            openAccount();
            break;
        case '2':
            viewBalance();
            break;
        case '3':
            viewAccountDetails();
            break;
        case '4':
            console.log('Exiting application');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please select a valid option (1-4).');
    }
}
function openAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('1. Savings');
        console.log('2. Current');
        const option = parseInt(yield getUserInput('Select 1 or 2: '));
        if (option === 1) {
            createAccount('Savings', account_1.SavingsAccount.getMinimumBalance());
        }
        else if (option === 2) {
            createAccount('Current', account_1.CurrentAccount.getMinimumBalance());
        }
        else {
            console.log('Invalid option. Please select 1 or 2.');
        }
    });
}
function createAccount(accountType, minimumBalance) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Creating a ${accountType} Account`);
        const customerName = yield getUserInput('Enter your name: ');
        let age;
        do {
            age = parseInt(yield getUserInput('Enter your age: '));
            if (age < 18 || age > 68) {
                console.log('Age must be between 18 and 68.');
            }
        } while (age < 18 || age > 68);
        const location = yield getUserInput('Enter your Location: ');
        const state = yield getUserInput('Enter your State: ');
        const country = yield getUserInput('Enter your Country: ');
        let email;
        do {
            email = yield getUserInput('Enter your Email: ');
            if (!isValidEmail(email)) {
                console.log('Email-id is not in standard format');
            }
        } while (!isValidEmail(email));
        const initialBalance = parseFloat(yield getUserInput(`Enter your initial balance for ${accountType} account: `));
        if (initialBalance < minimumBalance) {
            console.log(`Initial balance for ${accountType} Account must be at least ${minimumBalance}`);
            return;
        }
        const customer = {
            name: customerName,
            age: age,
            location: location,
            state: state,
            country: country,
            email: email
        };
        const accountNumber = `${accountType === 'Savings' ? 'Sav' : 'Curr'}${Math.floor(Math.random() * 10000)}`;
        const account = accountType === 'Savings'
            ? new account_1.SavingsAccount(accountNumber, customer, initialBalance)
            : new account_1.CurrentAccount(accountNumber, customer, initialBalance);
        console.log(`${accountType} Account Created Successfully!`);
        console.log('Account Details');
        console.log(`Customer Name: ${customerName}`);
        console.log(`Email ID: ${email}`);
        console.log(`Account Type: ${accountType}`);
        console.log(`Total Balance: ${initialBalance}`);
        console.log(`Generated account number for ${accountType} account: ${accountNumber}`);
    });
}
function viewBalance() {
    rl.question('Enter Account Number : ', (accountNumber) => {
        bank.showBalance(accountNumber);
        displayMenu();
    });
}
function viewAccountDetails() {
    rl.question('Enter Account number: ', (accountNumber) => {
        bank.displayAccountDetails(accountNumber);
        displayMenu();
    });
}
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
function getUserInput(question) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    });
}
const bank = new bank_1.Bank();
displayMenu();
