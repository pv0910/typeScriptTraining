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
const employeeController_1 = require("./employeeController");
function main() {
    const employeeController = new employeeController_1.EmployeeController();
    while (true) {
        console.log("Choose the Options");
        console.log("1. Add Employee");
        console.log("2. Display all Employee");
        console.log("3. Remove Employee");
        console.log("4. Update Employee info");
        console.log("5. Exit from Application");
        const choice = readlineSync.questionInt('Enter your Choice ');
        if (choice == 1) {
            employeeController.addEmployee();
        }
        else if (choice == 2) {
            employeeController.displayAllEmployee();
        }
        else if (choice == 3) {
            employeeController.removeEmployee();
        }
        else if (choice == 4) {
            employeeController.updateEmployeeInfo();
        }
        else if (choice == 5) {
            console.log("Exiting from Apllication");
            process.exit(0);
        }
        else {
            console.log('Invalid Choice. Please select a number between 1 to 5');
        }
    }
}
main();
