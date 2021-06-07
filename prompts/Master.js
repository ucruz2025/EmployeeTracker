class Master {
    masterPrompt = () => inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View all employees',
                    value: 'View_All_Employees'
                },
                {
                    name: 'View all employees by department',
                    value: 'View_All_Employees_By_Department'
                },
                {
                    name: 'View all employees by managers',
                    value: 'View_All_Employees_By_Managers'
                },
                {
                    name: 'Add employee',
                    value: 'Add_Employee'
                },
                {
                    name: 'Update employee role',
                    value: 'Update_Employee_Role'
                },
                {
                    name: 'Update employee manager',
                    value: 'Update_Employee_Manager'
                },
                {
                    name: 'Remove employee',
                    value: 'Remove_Employee'
                },
                {
                    name: 'View all roles',
                    value: 'View_All_Roles'
                },
                {
                    name: 'Add role',
                    value: 'Add_Role'
                },
                {
                    name: 'Remove role',
                    value: 'Remove_Role'
                },
                {
                    name: 'View all departments',
                    value: 'View_All_Departments'
                },
                {
                    name: 'Add department',
                    value: 'Add_Department'
                },
                {
                    name: 'Remove department',
                    value: 'Remove_Department'
                },
                {
                    name: 'Quit',
                    value: 'QUIT'
                }
            ]
        }
    ]);
}

module.exports = new Master();