import * as readlineSync from 'readline-sync';
import {EmployeeController} from './employeeController';
function main(){

    const employeeController=new EmployeeController();
    while(true){
        console.log("Choose the Options");
        console.log("1. Add Employee");
        console.log("2. Display all Employee");
        console.log("3. Remove Employee");
        console.log("4. Update Employee info");
        console.log("5. Exit from Application");

        const choice=readlineSync.questionInt('Enter your Choice ');

        if(choice==1){
            employeeController.addEmployee();
        }
        else if(choice==2){
            employeeController.displayAllEmployee();
        }
        else if(choice==3){
            employeeController.removeEmployee();
        }
        else if(choice==4){
            employeeController.updateEmployeeInfo();
        }
        else if(choice==5){
            console.log("Exiting from Apllication");
            process.exit(0);
        }
        else{
            console.log('Invalid Choice. Please select a number between 1 to 5')
        }
    }
}

main();