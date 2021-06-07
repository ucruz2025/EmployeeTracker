DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE employee (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstName varchar(45) NOT NULL,
    lastName varchar(45) NOT NULL,
    roleID INT UNSIGNED NOT NULL,
    managerID INT NULL
);

CREATE TABLE role(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title varchar(45) NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    departmentID INT UNSIGNED NOT NULL
);

CREATE TABLE department(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(45) UNIQUE NOT NULL
);