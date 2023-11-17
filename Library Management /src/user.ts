import { Book } from './book';

export class User {
  checkedOutBooks: Book[] = [];

  public canCheckOutMoreBooks(): boolean {
    return this.checkedOutBooks.length < 3;
  }

  public checkOutBook(book: Book): void {
    if (this.canCheckOutMoreBooks()) {
      this.checkedOutBooks.push(book);
      book.checkout();
    } else {
      console.log("You have reached the maximum checkout limit. Return some books to check out more.");
    }
  }

  returnBook(book: Book): void {
    const index = this.checkedOutBooks.indexOf(book);
    if (index !== -1) {
      this.checkedOutBooks.splice(index, 1);
      book.returnBook();
      console.log(`Book "${book.title}" returned successfully.`);
    } else {
      console.log("You did not check out this book.");
    }
  }
}
