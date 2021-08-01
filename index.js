const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateWebsite = require('./src/page-template');

const employees = [];

const addUser = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: name => {
            if (name) {
                return true;
            }
            else {
                console.log('Please enter your name.');
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select your role at the company.',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your company ID?',
        validate: id => {
            if (id) {
                return true;
            }
            else {
                console.log('Please enter your company ID number.');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: email => {
            if (email) {
                return true;
            }
            else {
                console.log('Please enter a valid email address.');
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number? (Managers only, other roles may enter N/A)',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            }
            else {
                console.log('Please provide your office number.')
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Engineers only, other roles may enter N/A)',
        validate: github => {
            if (github) {
                return true;
            }
            else {
                console.log('Please enter your github username.')
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do you currently attend? (Interns only, other roles may enter N/A',
        validate: school => {
            if (school) {
                return true;
            }
            else{
                console.log('Please enter the name of your school');
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: false,
    }
])
    .then(workerInfo => {
        
        let { name, role, id, email, officeNumber, github, school, addEmployee } = workerInfo;

        let worker;

        if(role === 'Manager'){
            worker = new Manager (name, id, email, officeNumber);
            console.log(worker);
        }
        if(role === 'Engineer') {
            worker = new Engineer (name, id, email, github);
            console.log (worker)
        }
        if(role === 'Intern'){
            worker = new Intern (name, id, email, school);
            console.log(worker);       
        }
        employees.push(worker)

        if(addEmployee) {
            return addUser(employees);
        } else {
            return employees;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err)
            return
        }
        else {
            console.log('looking clean!');
        }
    })
    console.log(employees);
};

addUser()
.then(employees => {
    return generateWebsite(employees);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});