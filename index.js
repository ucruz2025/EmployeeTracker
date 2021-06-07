const inquirer = require('inquirer');
const connection = require('./config/connection');

const Department = require('./prompts/Departments');
const Employee = require('./prompts/Employee');
const Role = require('./prompts/Role');
const prompt = require('./prompts/Master');
require('console.table');

const init = () => {
    console.log("Welcome to your Employee Tracker!")

    const mainPrompt = () => {
        prompt.masterPrompt().then(answer => {
            switch(answer.choice){
                case 'View_All_Employees':
                    //Employee.function;
                    break;

                case 'View_All_Employees_By_Department':
                    //Employee.function;
                    break;
                
                case 'View_All_Employees_By_Managers':
                    //Employee.function;
                    break;
                
                case 'Add_Employee':
                    //Employee.function;
                    break;

                case 'Update_Employee_Role':
                    //Employee.function;
                    break;

                case 'Update_Employee_Manager':
                    //Employee.function;
                    break;

                case 'Remove_Employee':
                    //Employee.function;
                    break;

                case 'View_All_Roles':
                    //Role.function;
                    break;

                case 'Add_Role':
                    //Role.function;
                    break;

                case 'Remove_Role':
                    //Role.function;
                    break;

                case 'View_All_Departments':
                    //Department.function;
                    break;

                case 'Add_Department':
                    //Department.function;
                    break;

                case 'Remove_Department':
                    //Department.function;
                    break;

                case 'QUIT':
                    //Quit function
                    break;
            }
        })
    }
}

