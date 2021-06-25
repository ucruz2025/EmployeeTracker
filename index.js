const Department = require('./prompts/Departments');
const Employee = require('./prompts/Employee');
const Role = require('./prompts/Role');
const prompt = require('./prompts/Master');

const init = () => {
    console.log("Welcome to your Employee Tracker!")

    mainPrompt();
}

const mainPrompt = async() => {
    const {answer} = await prompt.masterPrompt();

    switch(answer){
        case 'View_All_Employees':
            let VAE = async() => {
                await Employee.getAllEmployees();
                mainPrompt();
            }
            return VAE();

        case 'View_All_Employees_By_Department':
            let VAEBD = async() => {
                await Employee.getByDepartment();
                mainPrompt();
            }
            return VAEBD();
        
        case 'View_All_Employees_By_Managers':
            let VAEBM = async() => {
                await Employee.getByManagers();
                mainPrompt();
            }
            return VAEBM();
        
        case 'Add_Employee':
            let AE = async() => {
                await Employee.add();
                mainPrompt();
            }
            return AE();

        case 'Update_Employee_Role':
            let UER = async() => {
                await Employee.updateRole();
                mainPrompt();
            }
            return UER();

        case 'Update_Employee_Manager':
            let UEM = async() => {
                await Employee.updateManager();
                mainPrompt();
            }
            return UEM();

        case 'Remove_Employee':
            let RE = async() => {
                await Employee.remove();
                mainPrompt();
            }
            return RE();

        case 'View_All_Roles':
            let VAR = async() => {
                await Role.view();
                mainPrompt();
            }
            return VAR();

        case 'Add_Role':
            let AR = async() => {
                await Role.add();
                mainPrompt();
            }
            return AR();

        case 'Remove_Role':
            let RR = async() => {
                await Role.remove();
                mainPrompt();
            }
            return RR();

        case 'View_All_Departments':
            let VAD = async() => {
                await Department.view();
                mainPrompt();
            }
            return VAD();

        case 'Add_Department':
            let AD = async() => {
                await Department.add();
                mainPrompt();
            }
            return AD();

        case 'Remove_Department':
            let RD = async() => {
                await Department.remove();
                mainPrompt();
            }
            return RD();

        case 'QUIT':
            let quit = () => {
                process.exit();
            }
            return quit();
    }
}

init();
