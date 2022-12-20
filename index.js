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
        name: 'tests',
        message: 'What test methods can a user perform on this project?',
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

