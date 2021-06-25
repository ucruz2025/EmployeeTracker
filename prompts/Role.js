const inquirer = require('inquirer');
const db = require('../db');
require('console.table');

class Role {
    view = async() => {
        const allRoles = await db.allRoles();

        console.log('\n');
        console.table(allRoles);
    }

    add = async() => {
        const allDepartments = await db.allDepartments();

        const displayDepartments = allDepartments.map(({id, name}) => ({
            name: name,
            value: id
        }));
        
        const newRole = await inquirer.prompt([
            {
                name: 'title',
                message: 'What is the name of the role you want to add?'
            },
            {
                name: 'salary',
                message: 'What salary would you like to assign to this role?'
            },
            {
                type: 'list',
                name: 'departmentID',
                message: 'Which department does this role belong to?',
                choices: displayDepartments
            }
        ]);

        await db.addRole(newRole);
        console.log('\n');
        console.log('Added new role to database')
    }

    remove = async() => {
        const allRoles = await db.allRoles();

        const displayRoles = allRoles.map(({id, title}) => ({
            name: title,
            value: id
        }));

        const {roleID} = await inquirer.prompt([
            {
                type: 'list',
                name: 'roleID',
                message: 'Which role would you like to remove?',
                choices: displayRoles
            }
        ]);

        await db.removeRole(roleID)
        console.log('\n');
        console.log('Removed role from database');
    }
}

module.exports = new Role();