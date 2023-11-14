import { Book } from './book';

export class User {
  private _checkedOutBooks: Book[] = [];

  get checkedOutBooks(): Book[] {
    return this._checkedOutBooks;
  }

  canCheckOutMoreBooks(): boolean {
    return this._checkedOutBooks.length < 3;
  }

  checkOutBook(book: Book): void {
    if (this.canCheckOutMoreBooks()) {
      this._checkedOutBooks.push(book);
      book.checkout();
      console.log(`Book "${book.title}" checked out successfully.`);
    } else {
      console.log("You have reached the maximum checkout limit. Return some books to check out more.");
    }
  }

  returnBook(book: Book): void {
    const index = this._checkedOutBooks.indexOf(book);
    if (index !== -1) {
      this._checkedOutBooks.splice(index, 1);
      book.returnBook();
      console.log(`Book "${book.title}" returned successfully.`);
    } else {
      console.log("You did not check out this book.");
    }
  }
}

