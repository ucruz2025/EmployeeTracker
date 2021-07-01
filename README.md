# EmployeeTracker

## Description
For this assignment, the task was to create a Content Management System for a company trying to manage their employees using node, inquirer, and MySQL. The purpose is to display employeers information like salaries, roles, managers, and departments. Not only that, but also either update an employee's information, add a new employee, or remove an employee from the company. Below, you'll find a quick checklist as to what was the User Story:

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business

**department**:

  **id** - INT PRIMARY KEY
  **name** - VARCHAR(30) to hold department name

**role**:

  **id** - INT PRIMARY KEY
  **title** -  VARCHAR(30) to hold role title
  **salary** -  DECIMAL to hold role salary
  **department_id** -  INT to hold reference to department role belongs to

**employee**:

  **id** - INT PRIMARY KEY
  **first_name** - VARCHAR(30) to hold employee first name
  **last_name** - VARCHAR(30) to hold employee last name
  **role_id** - INT to hold reference to role employee has
  **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
Build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

Bonus points if you're able to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

```

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions?](#questions?)
* [License](#license)

## Installation
To install this program, make sure to be in your Terminal and be in the right folder to download the applicaiton. Then, run this comand:
```bash
git clone git@github.com:ucruz2025/EmployeeTracker.git
```

## Usage
You'll need to install the dependencies first to ensure the application will be running.
```bash
npm install
```
Then, under the 'db' folder, there is a seed.sql file that you can copy and paste into your MySQL application. Make sure that when you're about to run the application to add your password for MySQL under the config document or else the application won't connect with MySQL. Then, your seeded data can be used for the application. 

To start using the program, just run the following command in your terminal and the program will be active:
```bash
npm start
```

Then the program will prompt you some questions regarding what you want to do with your employees. From here, you can continue to click through the program and do whatever the program prompts. To exit, make sure to press 'Enter' on the Quit choice.

## Contributing
Contribution details can be found under the license section of this file.

## Tests
There are no tests for this application.

## Questions?
If you happen to have any further questions regarding the project, feel free to reach out to:

Github: ucruz2025
Email: ucruz2025@gmail

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
Copyright 2021 Uriel Cruz Salgado

  Permission is hereby granted, free of charge, to any person obtaining a copy 
  of this software and associated documentation files (the "Software"), to deal 
  in the Software without restriction, including without limitation the rights 
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
  copies of the Software, and to permit persons to whom the Software is furnished 
  to do so, subject to the following conditions:

  Contact owner of this software. Information can be found under "Questions?" section.
      
  The above copyright notice and this permission notice shall be included in 
  all copies or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
  Live link to license: https://opensource.org/licenses/MIT
