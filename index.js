// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        default: 'Node-ReadMe.md_Generator',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'You must pick a title for this project!'
            }
        },
    },
    { 
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
        default: 'This repository hosts a backend program using Node.js. Within this program I have built in questions for a user to answer that will then be formatted into a professional README.md file. The format follows the professional README.md file guidelines however, the current version excludes a particular question to add screenshots of the project or application. Upon using this application once the questions have been answered and your README.md file is created you can edit and add screenshots specific to your file structure for your project. There are eleven questions to help cover the format guidelines such as (title, description, table of contents, installation, usage, License, contributing, tests, and questions) as well as a few additional questions diving into the technologies used. This application helps programmers generate a quality README.md without having to question format guidelines. Now, you can answer questions that pertain to every project and have a professional README.md file generated just for you!',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'Please enter a description for your project!'
            }
        },

    },
    { 
        type: 'input',
        name: 'installation',
        message: 'What installation is required for your project?',
        default: 'You will need to clone or download the zip file for this repository in order to run this application in VS Code or your preferred code editor. You will need to include a package.json which can be created using the command (npm init.) This command will provide you with a file (node_modules.) Now, you will need to download inquirer. I recommend using the command (npm i inquirer@8.2.4) which is the current version at the time this project is being created. Following these steps you can use the command (node index.js) to run the program in the terminal of the code editor.',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'You must write something or put N/A!'
            }
        },

    },
    { 
        type: 'input',
        name: 'usage',
        message: 'Explain how your project is meant to be utilized.',
        default: 'This project assists programmers in making professional README.md files for their repositories. By executing this program you can forget the responsibility of formatting and cleaing up markup errors. With this program you can answer specific questions that all great quality README.md files should obtain.',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'Please provide usage information!'
            }
        },

    },
    { 
        type: 'list',
        name: 'license',
        message: 'Pick a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'PDDL'],
        default: 'MIT',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'Must pick a license'
            }
        },

    },
    { 
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
        default: 'GitHub: fabien1313',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'If no contributions were made please enter N/A!'
            }
        },

    },
    { 
        type: 'input',
        name: 'questions',
        message: 'Provide your GitHub username',
        default: 'fabien1313',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'GitHub username is REQUIRED!'
            }
        },

    },
    { 
        type: 'input',
        name: 'email',
        message: 'What is your preferred email?',
        default: 'fabienmoreno1331@yahoo.com',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'An email is REQUIRED!'
            }
        },

    },
    { 
        type: 'input',
        name: 'tests',
        message: 'What test methods can a user perform on this project?',
        default: 'A test that can be performed on this project would be running the command (node index.js) to ensure the questions are populating in the desired order as well as being written to the appropriate file. This test is vital to the functionality of the program. Without the the population of questions and writefile code neither the questions nor the codes ability to transfer your answer to the correct file form would be useful.', 
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'Must provide at least ONE test for the users!'
            }
        },

    },
    { 
        type: 'list',
        name: 'technologies1',
        message: 'What is the first language used to build this project? (select one)',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Node', 'N/A'],
        default: 'JavaScript',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'You must pick ONE from the list!'
            }
        },

    },
    { 
        type: 'list',
        name: 'technologies2',
        message: 'What is the second language used to build this project? (select one)',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Node', 'N/A'],
        default: 'Node',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'You must pick ONE from the list!'
            }
        },

    },
    { 
        type: 'list',
        name: 'technologies3',
        message: 'What is the third language used to build this project? (select one)',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Node', 'N/A'],
        default: 'N/A',
        validate: (value) => {
            if(value) {
                return true
            }else {
                return 'You must pick ONE from the list!'
            }
        },

    },
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then(answers => {
    const finalMarkdown = generateMarkdown(answers);

    fs.writeFile('README.md', finalMarkdown, (error) =>
    error ? console.log(error) : console.log('Success! You have created a quality README.md file') )

});

