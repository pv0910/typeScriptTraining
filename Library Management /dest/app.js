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
const readlineSync = __importStar(require("readline-sync"));
const library_1 = require("./library");
function bookManagementSystem() {
    const library = new library_1.Library();
    function showMenu() {
        console.log("\nBook Management System");
        console.log("1. Add a Book");
        console.log("2. List Available Books");
        console.log("3. Search for Books");
        console.log("4. Check Out a Book");
        console.log("5. Return a Book");
        console.log("6. Remove a Book");
        console.log("0. Exit");
    }
    while (true) {
        showMenu();
        const choice = readlineSync.question("Enter your choice: ");
        if (choice === '1') {
            library.addBook();
        }
        else if (choice === '2') {
            library.listAvailableBooks();
        }
        else if (choice === '3') {
            const searchBook = readlineSync.question("Search for Book(Either by title or author name): ");
            library.searchBooks(searchBook);
        }
        else if (choice === '4') {
            library.checkOutBook();
        }
        else if (choice === '5') {
            library.returnBook();
        }
        else if (choice === '6') {
            library.removeBook();
        }
        else if (choice === '0') {
            console.log("Exiting the Book Management System.");
            process.exit(0);
        }
        else {
            console.log("Invalid choice. Please enter a valid option.");
        }
    }
}
bookManagementSystem();
