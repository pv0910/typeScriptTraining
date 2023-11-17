import * as readline from 'readline';
import { Bank } from './bank';
import { ICustomer } from './customer';
import { SavingsAccount } from './savingsAccount';
import { CurrentAccount } from './currentAccount';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log('Welcome to our bank application');
  console.log('1. Create New Account');
  console.log('2. View Balance');
  console.log('3. Display Account Details');
  console.log('4. Withdraw Money');
  console.log('5. Deposit Money');
  console.log('6. Exit from Application');
  rl.question('Please select an option (1-4): ', (choice) => {
    handleUserChoice(choice);
  });
}

function handleUserChoice(choice: string) {
  if (choice === '1') {
    openAccount();
  } else if (choice === '2') {
    viewBalance();
  } else if (choice === '3') {
    viewAccountDetails();
  } else if (choice === '4') {
    withdrawMoney();
  } else if (choice === '5') {
    depositMoney();
  }
  else if (choice === '6') {
    console.log('Exiting application');
    rl.close();
  } else {
    console.log('Invalid choice. Please select a valid option (1-4).');
  }
}

async function openAccount() {
  console.log('1. Savings');
  console.log('2. Current');
  const option = parseInt(await getUserInput('Select 1 or 2: '));

  if (option === 1) {
    createAccount('Savings', 500);
  } else if (option === 2) {
    createAccount('Current', 1000);
  } else {
    console.log('Invalid option. Please select 1 or 2.');
  }
}

async function createAccount(accountType: string, minimumBalance: number) {
  console.log(`Creating a ${accountType} Account`);
  const customerName = await getUserInput('Enter your name: ');

  let age: number;
  do {
    age = parseInt(await getUserInput('Enter your age: '));
    if (age < 18 || age > 68) {
      console.log('Age must be between 18 and 68.');
    }
  } while (age < 18 || age > 68);

  const location = await getUserInput('Enter your Location: ');
  const state = await getUserInput('Enter your State: ');
  const country = await getUserInput('Enter your Country: ');

  let email;
  do {
    email = await getUserInput('Enter your Email: ');
    if (!isValidEmail(email)) {
      console.log('Email-id is not in standard format');
    }
  } while (!isValidEmail(email));

  const initialBalance = parseFloat(await getUserInput(`Enter your initial balance for ${accountType} account: `));

  if (initialBalance < minimumBalance) {
    console.log(`Initial balance for ${accountType} Account must be at least ${minimumBalance}`);
    return;
  }
  const customer: ICustomer = {
    name: customerName,
    age: age,
    location: location,
    state: state,
    country: country,
    email: email
  };

  const accountNumber = `${accountType === 'Savings' ? 'Sav' : 'Curr'}${Math.floor(Math.random() * 10000)}`;

  const account = accountType === 'Savings'
    ? new SavingsAccount(accountNumber, customer, initialBalance)
    : new CurrentAccount(accountNumber, customer, initialBalance);

  console.log(`${accountType} Account Created Successfully!`);
  console.log('Account Details');
  console.log(`Customer Name: ${customerName}`);
  console.log(`Email ID: ${email}`);
  console.log(`Account Type: ${accountType}`);
  console.log(`Total Balance: ${initialBalance}`);
  console.log(`Generated account number for ${accountType} account: ${accountNumber}`);
  bank.addAccount(account);
  displayMenu();
}



function viewBalance() {
  rl.question('Enter Account Number : ', (accountNumber) => {
    accountNumber = accountNumber.toLowerCase(); 
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

function withdrawMoney(): void {
  rl.question('Enter Account Number: ', (accountNumber) => {
    rl.question('Enter Withdrawal Amount: ', (amountInput) => {
      const amount = parseFloat(amountInput);

      const account = bank.findAccountByNumber(accountNumber);
      if (account) {
        account.withdraw(amount);
        console.log('Withdrawal completed successfully.');
      } else {
        console.log('Account not found.');
      }

      displayMenu();
    });
  });
}

function depositMoney(): void {
  rl.question('Enter Account Number: ', (accountNumber) => {
    rl.question('Enter Deposit Amount: ', (amountInput) => {
      const amount = parseFloat(amountInput);

      const account = bank.findAccountByNumber(accountNumber);
      if (account) {
        account.deposit(amount);
        console.log('Deposit completed successfully.');
      } else {
        console.log('Account not found.');
      }

      displayMenu();
    });
  });
}

function isValidEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

async function getUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}
const bank = new Bank();

displayMenu();
