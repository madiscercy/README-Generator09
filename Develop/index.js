// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'README.md'

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your installation instructions?',
      name: 'installationInst',
    },
    {
      type: 'input',
      message: 'What is your usage information?',
      name: 'usageInfo',
    },
    {
      type: 'input',
      message: 'What are your contribution guidelines?',
      name: 'contributionGuidelines',
    },
    {
      type: 'input',
      message: 'What are your test instructions?',
      name: 'testInst',
    },
    {
      type: 'list',
      message: 'What is your license?',
      name: 'license',
      choices: [ 'MIT license (MIT)' , 'Apache License 2.0 (Apache-2.0)' ]//, new inquirer.Separator(), "choice B" ]

    }
  
  ];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
 }

 function formatFileData(answers) {
    let fileData = '# ' + answers.title + '\n\n';
    fileData += '- [Description](#description) \n'
    fileData += '## Description' + '\n';
    fileData += answers.description + '\n';
    fileData += '## Installation Instructions' + '\n';
    fileData += answers.installationInst + '\n';
    fileData += '## Usage Information' + '\n';
    fileData += answers.usageInfo + '\n';
    fileData += '## Contribution Guidelines' + '\n';
    fileData += answers.contributionGuidelines + '\n';
    fileData += '## Test Instructions' + '\n';
    fileData += answers.testInst + '\n';
    writeToFile(fileData);
    console.log(answers)
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
          formatFileData(answers);
        })
        .catch((error) => {
          console.log(error);
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();

