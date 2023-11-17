"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this.checkedOutBooks = [];
    }
    canCheckOutMoreBooks() {
        return this.checkedOutBooks.length < 3;
    }
    checkOutBook(book) {
        if (this.canCheckOutMoreBooks()) {
            this.checkedOutBooks.push(book);
            book.checkout();
        }
        else {
            console.log("You have reached the maximum checkout limit. Return some books to check out more.");
        }
    }
    returnBook(book) {
        const index = this.checkedOutBooks.indexOf(book);
        if (index !== -1) {
            this.checkedOutBooks.splice(index, 1);
            book.returnBook();
            console.log(`Book "${book.title}" returned successfully.`);
        }
        else {
            console.log("You did not check out this book.");
        }
    }
}
exports.User = User;
