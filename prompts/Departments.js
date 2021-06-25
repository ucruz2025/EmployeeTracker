const inquirer = require('inquirer');
const db = require('../db');
require('console.table');

class Department {
    view = async() => {
        const allDepartments = await db.allDepartments();

        console.log('\n');
        console.table(allDepartments);
    }

    add = async() => {
        const newDepartment = await inquirer.prompt([
            {
                name: 'name',
                message: 'What is the name of the new department you want to add?'
            }
        ]);

        await db.addDepartment(newDepartment)
        console.log('\n');
        console.log('Added new department to database');
    }

    remove = async() => {
        const allDepartments = await db.allDepartments();

        const displayDepartments = allDepartments.map(({id, name}) => ({
            name: name,
            value: id
        }));

        const {depID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'depID',
                message: 'Which department would you like to remove?',
                choices: displayDepartments
            }
        ]);

        await db.removeDepartment(depID)
        console.log('\n');
        console.log('Removed department from database');
    }
}

module.exports = new Department();