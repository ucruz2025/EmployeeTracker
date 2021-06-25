USE employeeTracker;

INSERT INTO department (name) 
VALUES ('Sales'), ('Engineering'), ('Accounting'), ('Legal');

INSERT INTO role (title, salary, departmentID) 
VALUES ('Sales Lead', 10000, 1), ('Software Engineer', 20000, 2), ('Accountant', 15000, 3), ('Legal Team Member', 15000, 4);

INSERT INTO employee (firstName, lastName, roleID, managerID) 
VAlUES ('Juan', 'Rodriguez', 1, NULL), ('Ben', 'Kim', 1, 1), ('Iman', 'Fhad', 2, NULL), ('Lin', 'Zhang', 3, NULL), ('Rebecca', 'Smith', 4, NULL), ('John', 'Doe', 4, 4), ('Jake', 'Johnson', 4, 4)