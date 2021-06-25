const connection = require("../config/connection")

class SQLCommands {
    constructor(connection) {
        this.connection = connection;
    }
    
    allEmployees = () => this.connection.query(
        "SELECT employee.id, employee.firstName, employee.lastName, role.title, department.name AS department, role.salary, CONCAT(manager.firstName, ' ', manager.lastName) AS manager FROM employee LEFT JOIN role ON employee.roleID = role.id LEFT JOIN department ON role.departmentID = department.id LEFT JOIN employee manager ON manager.id = employee.managerID;"
    );

    allManagers = () => this.connection.query(
        "SELECT id, firstName, lastName FROM employee WHERE managerID IS NULL;"
    );

    allPossibleManagers = (empID) => this.connection.query(
        "SELECT id, firstName, lastName FROM employee WHERE id != ?",
        empID
    )

    allDepartments = () => this.connection.query(
        "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM department LEFT JOIN role ON role.departmentID = department.id LEFT JOIN employee ON employee.roleID = role.id GROUP BY department.id, department.name;"
    );

    allRoles = () => this.connection.query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.departmentID = department.id;"
    );

    employeesByDepartment = (depID) => this.connection.query(
        "SELECT employee.id, employee.firstName, employee.lastName, role.title FROM employee LEFT JOIN role ON employee.roleID = role.id LEFT JOIN department department ON role.departmentID = department.id WHERE department.id = ?;", 
        depID
    );

    employeesByManager = (manID) => this.connection.query(
        "SELECT employee.id, employee.firstName, employee.lastName, department.name AS department, role.title FROM employee LEFT JOIN role ON role.id = employee.roleID LEFT JOIN department ON department.id = role.departmentID WHERE employee.id = ?;", 
        manID
    );

    addEmployee = (newEmployee) => this.connection.query(
        "INSERT INTO employee SET ?;", 
        newEmployee
    );

    addRole = (newRole) => this.connection.query(
        "INSERT INTO role SET ?;",
        newRole
    );

    addDepartment = (newDepartment) => this.connection.query(
        "INSERT INTO department SET ?;",
        newDepartment
    );

    updateEmployeeRole = (empID, roleID) => this.connection.query(
        "UPDATE employee SET roleID = ? WHERE id = ?;",
        [roleID, empID]
    );

    updateEmployeeManager = (empID, manID) => this.connection.query(
        "UPDATE employee SET managerID = ? WHERE id = ?;",
        [manID, empID]
    );

    removeEmployee = (empID) => this.connection.query(
        "DELETE FROM employee WHERE id = ?;", 
        empID
    );

    removeRole = (roleID) => this.connection.query(
        "DELETE FROM role WHERE id = ?;",
        roleID
    );

    removeDepartment = (depID) => this.connection.query(
        "DELETE FROM department WHERE id = ?;",
        depID
    );
}

module.exports = new SQLCommands(connection);