import { Book } from './book';
import * as readlineSync from 'readline-sync';
import { User } from './user';

const user = new User();
export class Library {
  books: Book[] = [];
  public addBook(): void {
    const title = readlineSync.question("Enter the book title: ");
    const author = readlineSync.question("Enter the author's name: ");
    const newBook = new Book(title, author);
    this.books.push(newBook);
    console.log(`Book "${newBook.title}" added to the library.`);
  }
  
  public listAvailableBooks(): void {
    const availableBooks = this.books.filter((book) => book.isAvailable);
    console.log("Available Books:");
    availableBooks.forEach((book) => console.log(`- ${book.title} by ${book.author}`));
  }

  public searchBooks(query: string): void {
    const results = this.books.filter(
      (book) => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
      console.log("Search Results:");
      results.forEach((book) => console.log(`- ${book.title} by ${book.author}`));
    } else {
      console.log("No books found matching the search criteria.");
    }
  }

  public removeBook(): void {
    const removeTitle = readlineSync.question("Enter the title of the book you want to remove: ");
    const bookToRemove = this.books.find((book) => book.title === removeTitle);

    if (bookToRemove) {
      if (bookToRemove.isAvailable) {
        const index = this.books.indexOf(bookToRemove);
        if (index !== -1) {
          this.books.splice(index, 1);
          console.log(`Book "${bookToRemove.title}" removed from the library.`);
        } else {
          console.log("Error removing the book from the library.");
        }
      } else {
        console.log(`Cannot remove "${bookToRemove.title}" as it is currently checked out.`);
      }
    } else {
      console.log("Book not found in the library.");
    }
  }

  public checkOutBook(): void {
    const checkoutTitle = readlineSync.question("Enter the title of the book you want to check out: ");
    const bookToCheckOut = this.books.find((book) => book.title === checkoutTitle);
   
    if (bookToCheckOut) {
      if (user.canCheckOutMoreBooks() && bookToCheckOut.isAvailable) {
        user.checkOutBook(bookToCheckOut);
        console.log(`Book "${bookToCheckOut.title}" checked out successfully.`);
      } else if (!bookToCheckOut.isAvailable) {
        console.log(`Book "${bookToCheckOut.title}" is not available for checkout.`);
      } else {
        console.log("You have reached the maximum checkout limit. Return some books to check out more.");
      }
    } else {
      console.log("Book not found in the library.");
    }
  
}
public returnBook(): void {
  const returnTitle = readlineSync.question("Enter the title of the book you want to return: ");
  const bookToReturn = this.books.find((book) => book.title === returnTitle);

  if (bookToReturn) {
    if (!bookToReturn.isAvailable) {
      user.returnBook(bookToReturn);
      console.log(`Book "${bookToReturn.title}" returned successfully.`);
    } else {
      console.log(`Book "${bookToReturn.title}" is already available in the library.`);
    }
  } else {
    console.log("Book not found in the library.");
  }
}
}
