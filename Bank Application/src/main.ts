import * as readline from 'readline';
import { Bank } from './bank';
import { CurrentAccount, Customer, SavingsAccount } from './account';


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

function handleUserChoice(choice: string) {
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

async function openAccount() {
  console.log('1. Savings');
  console.log('2. Current');
  const option = parseInt(await getUserInput('Select 1 or 2: '));

  if (option === 1) {
    createAccount('Savings', SavingsAccount.getMinimumBalance());
  } else if (option === 2) {
    createAccount('Current', CurrentAccount.getMinimumBalance());
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
  const customer: Customer = {
    name: customerName,
    age: age,
    location: location,
    state: state,
    country: country,
    email: email
  };

  const accountNumber = `${accountType === 'Savings' ? 'Sav' : 'Curr'}${Math.floor(Math.random() * 10000)}`;

  const account = accountType === 'Savings'
    ? new SavingsAccount(accountNumber, customer , initialBalance)
    : new CurrentAccount(accountNumber, customer, initialBalance);

  console.log(`${accountType} Account Created Successfully!`);
  console.log('Account Details');
  console.log(`Customer Name: ${customerName}`);
  console.log(`Email ID: ${email}`);
  console.log(`Account Type: ${accountType}`);
  console.log(`Total Balance: ${initialBalance}`);
  console.log(`Generated account number for ${accountType} account: ${accountNumber}`);
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

function isValidEmail(email:string): boolean {
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
