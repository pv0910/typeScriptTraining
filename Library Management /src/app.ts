import * as readlineSync from 'readline-sync';
import { User } from './user';
import { Library } from './library';

function bookManagementSystem(): void {
    const library = new Library();
    const user = new User();
  
    while (true) {
      console.log("\nBook Management System");
      console.log("1. Add a Book");
      console.log("2. List Available Books");
      console.log("3. Search for Books");
      console.log("4. Check Out a Book");
      console.log("5. Return a Book");
      console.log("6. Remove a Book");
      console.log("0. Exit");
  
      const choice = readlineSync.question("Enter your choice: ");
  
      switch (choice) {
        case '1':
         library.addBook();
          break;
  
        case '2':
          library.listAvailableBooks();
          break;
  
        case '3':
          const searchBook = readlineSync.question("Search for Book: ");
          library.searchBooks(searchBook);
          break;
  
        case '4':
          library.checkOutBook();
          break;
  
        case '5':
          library.returnBook();
          break;
  
        case '6':
          library.removeBook();
          break;
  
        case '0':
          console.log("Exiting the Book Management System.");
          process.exit(0);
  
        default:
          console.log("Invalid choice. Please enter a valid option.");
      }
    }
  }
  

bookManagementSystem();
