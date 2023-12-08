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
exports.EmployeeController = void 0;
const employee_1 = require("./employee");
const readlineSync = __importStar(require("readline-sync"));
class EmployeeController {
    constructor() {
        this.employees = [];
    }
    addEmployee() {
        const name = readlineSync.question('Enter employee name\n');
        const role = readlineSync.question('Enter employee role\n');
        const employee = new employee_1.Employee(name, role);
        this.employees.push(employee);
        console.log('Employee added successfully');
    }
    displayAllEmployee() {
        console.log('Details of All Employee');
        this.employees.forEach((employee, index) => {
            console.log(`${index + 1}. Name: ${employee.name}, Role: ${employee.role}`);
        });
    }
    removeEmployee() {
        this.displayAllEmployee();
        const index = readlineSync.questionInt('Select the index of the employee to remove') - 1;
        if (index >= 0 && index < this.employees.length) {
            this.employees.splice(index, 1);
            console.log(`Employee at the index ${index + 1} removed successfully`);
        }
        else {
            console.log('Invalid index.Please provide a valid index');
        }
    }
    updateEmployeeInfo() {
        this.displayAllEmployee();
        const index = readlineSync.questionInt('Enter the index of the employee to update his/her info') - 1;
        if (index >= 0 && index < this.employees.length) {
            const employee = this.employees[index];
            const updateName = readlineSync.question('Do you want to update the name? (y/n)').toLowerCase();
            if (updateName == 'y') {
                const name = readlineSync.question('Enter the name to update');
                employee.name = name;
            }
            const updateRole = readlineSync.question('Do you want to update the role? (y/n)').toLowerCase();
            if (updateRole == 'y') {
                const role = readlineSync.question('Enter the role to update');
                employee.role = role;
            }
            console.log(`Employee at index ${index + 1} updated successfully!`);
        }
        else {
            console.log('Invalid index.Please provide a valid index');
        }
    }
}
exports.EmployeeController = EmployeeController;
