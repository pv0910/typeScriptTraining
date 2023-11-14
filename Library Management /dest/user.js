"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this._checkedOutBooks = [];
    }
    get checkedOutBooks() {
        return this._checkedOutBooks;
    }
    canCheckOutMoreBooks() {
        return this._checkedOutBooks.length < 3;
    }
    checkOutBook(book) {
        if (this.canCheckOutMoreBooks()) {
            this._checkedOutBooks.push(book);
            book.checkout();
            console.log(`Book "${book.title}" checked out successfully.`);
        }
        else {
            console.log("You have reached the maximum checkout limit. Return some books to check out more.");
        }
    }
    returnBook(book) {
        const index = this._checkedOutBooks.indexOf(book);
        if (index !== -1) {
            this._checkedOutBooks.splice(index, 1);
            book.returnBook();
            console.log(`Book "${book.title}" returned successfully.`);
        }
        else {
            console.log("You did not check out this book.");
        }
    }
}
exports.User = User;
