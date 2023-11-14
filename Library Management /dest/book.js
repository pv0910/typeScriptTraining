"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, isAvailable = true) {
        this._title = title;
        this._author = author;
        this._isAvailable = isAvailable;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get isAvailable() {
        return this._isAvailable;
    }
    checkout() {
        this._isAvailable = false;
    }
    returnBook() {
        this._isAvailable = true;
    }
}
exports.Book = Book;
