import { Employee } from "./employee";
import * as readlineSync from 'readline-sync';

export class EmployeeController {
    private employees:Employee[]=[];

    public addEmployee():void {
        const name=readlineSync.question('Enter employee name\n');
        const role=readlineSync.question('Enter employee role\n');
        const employee=new Employee(name,role);
        this.employees.push(employee);
        console.log('Employee added successfully');
    }

    public displayAllEmployee():void{
        console.log('Details of All Employee');
        this.employees.forEach((employee,index)=>{
            console.log(`${index+1}. Name: ${employee.name}, Role: ${employee.role}`);
        });
    }

    public removeEmployee():void{
        this.displayAllEmployee();
        const index =readlineSync.questionInt('Select the index of the employee to remove')-1;
        if(index>=0 && index<this.employees.length){
            this.employees.splice(index,1);
            console.log(`Employee at the index ${index+1} removed successfully`);
        }
        else{
            console.log('Invalid index.Please provide a valid index');
        }
    }

    public updateEmployeeInfo():void{
        this.displayAllEmployee();
        const index=readlineSync.questionInt('Enter the index of the employee to update his/her info') -1;

        if(index>=0 && index<this.employees.length){
            const employee=this.employees[index];

            const updateName=readlineSync.question('Do you want to update the name? (y/n)').toLowerCase();
            if(updateName=='y'){
                const name=readlineSync.question('Enter the name to update');
                employee.name=name;
            }

            const updateRole=readlineSync.question('Do you want to update the role? (y/n)').toLowerCase();
            if(updateRole=='y'){
                const role=readlineSync.question('Enter the role to update');
                employee.role=role;
            }

            console.log(`Employee at index ${index+1} updated successfully!`);
        }
        else{
            console.log('Invalid index.Please provide a valid index');
        }

    }

}