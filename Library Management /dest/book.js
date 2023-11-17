"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    checkout() {
        this.isAvailable = false;
    }
    returnBook() {
        this.isAvailable = true;
    }
}
exports.Book = Book;
