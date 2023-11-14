"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const book_1 = require("./book");
const readlineSync = __importStar(require("readline-sync"));
class Library {
    constructor() {
        this._books = [];
    }
    get books() {
        return this._books;
    }
    addBook() {
        const title = readlineSync.question("Enter the book title: ");
        const author = readlineSync.question("Enter the author's name: ");
        const newBook = new book_1.Book(title, author);
        this._books.push(newBook);
        console.log(`Book "${newBook.title}" added to the library.`);
    }
    listAvailableBooks() {
        const availableBooks = this._books.filter((book) => book.isAvailable);
        console.log("Available Books:");
        availableBooks.forEach((book) => console.log(`- ${book.title} by ${book.author}`));
    }
    searchBooks(query) {
        const results = this._books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()));
        if (results.length > 0) {
            console.log("Search Results:");
            results.forEach((book) => console.log(`- ${book.title} by ${book.author}`));
        }
        else {
            console.log("No books found matching the search criteria.");
        }
    }
    removeBook() {
        const removeTitle = readlineSync.question("Enter the title of the book you want to remove: ");
        const bookToRemove = this._books.find((book) => book.title === removeTitle);
        if (bookToRemove) {
            const index = this._books.indexOf(bookToRemove);
            if (index !== -1) {
                this._books.splice(index, 1);
                console.log(`Book "${bookToRemove.title}" removed from the library.`);
            }
            else {
                console.log("Error removing the book from the library.");
            }
        }
        else {
            console.log("Book not found in the library.");
        }
    }
    checkOutBook() {
        const checkoutTitle = readlineSync.question("Enter the title of the book you want to check out: ");
        const bookToCheckOut = this._books.find((book) => book.title === checkoutTitle);
        if (bookToCheckOut) {
            if (bookToCheckOut.isAvailable) {
                bookToCheckOut.checkout();
                console.log(`Book "${bookToCheckOut.title}" checked out successfully.`);
            }
            else {
                console.log(`Book "${bookToCheckOut.title}" is not available for checkout.`);
            }
        }
        else {
            console.log("Book not found in the library.");
        }
    }
    returnBook() {
        const returnTitle = readlineSync.question("Enter the title of the book you want to return: ");
        const bookToReturn = this._books.find((book) => book.title === returnTitle);
        if (bookToReturn) {
            if (!bookToReturn.isAvailable) {
                bookToReturn.returnBook();
                console.log(`Book "${bookToReturn.title}" returned successfully.`);
            }
            else {
                console.log(`Book "${bookToReturn.title}" is already available in the library.`);
            }
        }
        else {
            console.log("Book not found in the library.");
        }
    }
}
exports.Library = Library;
