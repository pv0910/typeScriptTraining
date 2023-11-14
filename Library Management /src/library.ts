import { Book } from './book';
import * as readlineSync from 'readline-sync';

export class Library {
  private _books: Book[] = [];

  get books(): Book[] {
    return this._books;
  }

  addBook(): void {
    const title = readlineSync.question("Enter the book title: ");
    const author = readlineSync.question("Enter the author's name: ");
    const newBook = new Book(title, author);
    this._books.push(newBook);
    console.log(`Book "${newBook.title}" added to the library.`);
  }
  
  listAvailableBooks(): void {
    const availableBooks = this._books.filter((book) => book.isAvailable);
    console.log("Available Books:");
    availableBooks.forEach((book) => console.log(`- ${book.title} by ${book.author}`));
  }

  searchBooks(query: string): void {
    const results = this._books.filter(
      (book) => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length > 0) {
      console.log("Search Results:");
      results.forEach((book) => console.log(`- ${book.title} by ${book.author}`));
    } else {
      console.log("No books found matching the search criteria.");
    }
  }

  removeBook(): void {
    const removeTitle = readlineSync.question("Enter the title of the book you want to remove: ");
    const bookToRemove = this._books.find((book) => book.title === removeTitle);

    if (bookToRemove) {
      const index = this._books.indexOf(bookToRemove);
      if (index !== -1) {
        this._books.splice(index, 1);
        console.log(`Book "${bookToRemove.title}" removed from the library.`);
      } else {
        console.log("Error removing the book from the library.");
      }
    } else {
      console.log("Book not found in the library.");
    }
  }
  checkOutBook(): void {
    const checkoutTitle = readlineSync.question("Enter the title of the book you want to check out: ");
    const bookToCheckOut = this._books.find((book) => book.title === checkoutTitle);
    
    if (bookToCheckOut) {
      if (bookToCheckOut.isAvailable) {
        bookToCheckOut.checkout();
        console.log(`Book "${bookToCheckOut.title}" checked out successfully.`);
      } else {
        console.log(`Book "${bookToCheckOut.title}" is not available for checkout.`);
      }
    } else {
      console.log("Book not found in the library.");
    }
  }
  returnBook(): void {
    const returnTitle = readlineSync.question("Enter the title of the book you want to return: ");
    const bookToReturn = this._books.find((book) => book.title === returnTitle);

    if (bookToReturn) {
      if (!bookToReturn.isAvailable) {
        bookToReturn.returnBook();
        console.log(`Book "${bookToReturn.title}" returned successfully.`);
      } else {
        console.log(`Book "${bookToReturn.title}" is already available in the library.`);
      }
    } else {
      console.log("Book not found in the library.");
    }
  }
}


