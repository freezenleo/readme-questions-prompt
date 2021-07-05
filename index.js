// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = ['What is your GitHub username?',
    'What is your email address?',
    'What is your project’s name?',
    'Please write a short description of your project',
    'What kind of license should your project have?',
    'What command should be run to install dependencies?',
    'What command should be run to run tests?',
    'What does the user need to know about using the repo?',
    'What does the user need to know about contributing to the repo?'
];

const promptUser = (answers) => {
    if (!answers) {
        answers = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'licenses',
            message: questions[4],
            choices: ['Apache 2.0', 'MIT', 'MPL 2.0', 'Artistic 2.0', 'Unlicense']
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[8]
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
    // return fs.writeFile(fileName, data, err => {
    //     if (err) throw new Error(err);
    //     console.log('readme created!')
    // })
}

// TODO: Create a function to initialize app
const init = async () => {
    try {
        const answers = await promptUser();
        const fileContent = generateMarkdown(answers);
        await writeToFile('./dist/readme-project.md', fileContent);
        console.log('readme created in dist folder')
    } catch (err) {
        console.error('Error, file not created.');
        console.log(err);
    }
    // promptUser()
    //     .then(answers => {
    //         return generateMarkdown(answers)
    //     })
    //     .then(data => {
    //         writeToFile(data)
    //     })

}

// Function call to initialize app
init();
