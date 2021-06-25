const inquirer = require('inquirer');
const db = require('../db');
require('console.table');

class Employee{
    getAllEmployees = async() => {
        const allEmployees = await db.allEmployees();

        console.log("\n")
        console.table(allEmployees);
    };

    getByDepartment = async() => {
        const departments = await db.allDepartments();

        const displayDepartments = departments.map(({id, name}) => ({
            name: name,
            value: id
        }));

        console.log('\n');
        const {depID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'depID',
                message: 'From which department would you like to see its employees?',
                choices: displayDepartments
            }
        ]);

        const EmployeesByDepartment = await db.employeesByDepartment(depID);

        console.log('\n');
        console.table(EmployeesByDepartment);
    }

    getByManagers = async() => {
        const allEmployees = await db.allManagers();

        const displayManagers = allEmployees.map(({id, firstName, lastName}) => ({
            name: `${firstName} ${lastName}`,
            value: id
        }));

        console.log('\n');
        const {manID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'manID',
                message: 'For which manager would you like to see a direct report?',
                choices: displayManagers
            }
        ]);

        const EmployeesByManager = await db.employeesByManager(manID);

        console.log('\n');
        console.table(EmployeesByManager);
    }

    add = async() => {
        const allRoles = await db.allRoles();
        const allEmployees = await db.allEmployees();

        console.log('\n');
        const newEmployee = await inquirer.prompt([
            {
                name: 'firstName',
                message: "What's their first name?"
            },
            {
                name: 'lastName',
                message: "What's their last name?"
            }
        ]);

        const displayRoles = allRoles.map(({id, title}) => ({
            name: title,
            value: id
        }));

        console.log('\n');
        const {roleID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'roleID',
                message: 'Which role would you like to assign to this employee?',
                choices: displayRoles
            }
        ]);

        newEmployee.roleID = roleID;

        const displayManagers = allEmployees.map(({id, firstName, lastName}) => ({
            name: `${firstName} ${lastName}`,
            value: id
        }));

        displayManagers.unshift({name: 'None', value: null});

        console.log('\n');
        const {manID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'manID',
                message: "Who is this employee's manager?",
                choices: displayManagers
            }
        ]);

        newEmployee.managerID = manID;

        await db.addEmployee(newEmployee)
        console.log('\n');
        console.log('Added new employee to database');
    }

    updateRole = async() => {
        const allEmployees = await db.allEmployees();
        const allRoles = await db.allRoles();

        const displayEmployees = allEmployees.map(({id, firstName, lastName}) => ({
            name: `${firstName} ${lastName}`,
            value: id
        }));

        console.log('\n');
        const {empID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'empID',
                message: 'For which employee would you like to update their role?',
                choices: displayEmployees
            }
        ]);

        const displayRoles = allRoles.map(({id, title}) => ({
            name: title,
            value: id
        }));

        console.log('\n');
        const {roleID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'roleID',
                message: 'Which role would you like to assign to this employee?',
                choices: displayRoles
            }
        ]);

        await db.updateEmployeeRole(empID, roleID);
        console.log('\n');
        console.log('Updated employee role');
    }

    updateManager = async() => {
        const allEmployees = await db.allEmployees();
        
        const displayEmployees = allEmployees.map(({id, firstName, lastName}) => ({
            name: `${firstName} ${lastName}`,
            value: id
        }));

        console.log('\n');
        const {empID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'empID',
                message: 'For which employee would you like to update their manager?',
                choices: displayEmployees
            }
        ]); 
        
        const possibleManagers = await db.allPossibleManagers(empID);
        
        const displayManagers = possibleManagers.map(({id, firstName, lastName}) => ({
            name: `${firstName} ${lastName}`,
            value: id
        }));
        displayManagers.unshift({name: 'None', value: null});
        
        console.log('\n');
        const {manID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'manID',
                message: 'Which employee would you like to assign as their manager?',
                choices: displayManagers
            }
        ]);

        await db.updateEmployeeManager(empID, manID);
        console.log('\n');
        console.log('Updated employee manager');
    }

    remove = async() => {
        const allEmployees = await db.allEmployees();

        const displayEmployees = allEmployees.map(({id, firstName, lastName}) => ({
            name: `${firstName} ${lastName}`,
            value: id
        }));

        console.log('\n');
        const {empID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'empID',
                message: 'Which employee would you like to remove?',
                choices: displayEmployees
            }
        ]);

        await db.removeEmployee(empID);
        console.log('\n');
        console.log('Removed employee from the database');
    }
}

module.exports = new Employee();