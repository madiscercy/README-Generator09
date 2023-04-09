// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'README.md'
const licenses = [
  'MIT License (MIT)',
  'GNU General Public License v3.0 (GPLv3)',
  'Apache License 2.0 (Apache-2.0)',
  'BSD 2-Clause "Simplified" License (BSD-2-Clause)',
  'BSD 3-Clause "New" or "Revised" License (BSD-3-Clause)',
  'Creative Commons Zero v1.0 Universal (CC0-1.0)',
  'Eclipse Public License 2.0 (EPL-2.0)',
  'GNU Affero General Public License v3.0 (AGPLv3)',
  'GNU General Public License v2.0 (GPLv2)',
  'GNU Lesser General Public License v2.1 (LGPLv2.1)',
  'GNU Lesser General Public License v3.0 (LGPLv3)',
  'Mozilla Public License 2.0 (MPL-2.0)',
  'The Unlicense (Unlicense)'
];

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
      choices: licenses
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username'
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email'
    }
  
  ];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
 }

function getLicenseBadgeUrl(license) {
  const licenseBadgeUrlStart = 'https://img.shields.io/badge/license-';
  const licenseBadgeUrlEnd = '-blue.svg';
  const indexStart = license.indexOf('(');
  const indexEnd = license.indexOf(')');
  let shortLicense = license.substring(indexStart + 1, indexEnd);
  shortLicense = shortLicense.replaceAll('-', '--');
  return licenseBadgeUrlStart + shortLicense + licenseBadgeUrlEnd
}

 function formatFileData(answers) {
    let fileData = '# ' + answers.title + '\n';
    fileData += '![License Badge](' + getLicenseBadgeUrl(answers.license) + ') \n\n'
    fileData += '## Description' + '\n';
    fileData += answers.description + '\n\n';
    fileData += '## Table of Contents' + '\n';
    fileData += '- [Installation Instructions](#installation-instructions) \n';
    fileData += '- [Usage Information](#usage-information) \n';
    fileData += '- [Contribution Guidelines](#contribution-guidelines) \n';
    fileData += '- [Test Instructions](#test-instructions) \n';
    fileData += '- [License](#license) \n'
    fileData += '- [Questions](#questions) \n\n';
    fileData += '## Installation Instructions' + '\n';
    fileData += answers.installationInst + '\n\n';
    fileData += '## Usage Information' + '\n';
    fileData += answers.usageInfo + '\n\n';
    fileData += '## Contribution Guidelines' + '\n';
    fileData += answers.contributionGuidelines + '\n\n';
    fileData += '## Test Instructions' + '\n';
    fileData += answers.testInst + '\n\n';
    fileData += '## License' + '\n';
    fileData += answers.license + '\n\n';
    fileData += '## Questions' + '\n';
    fileData += '[GitHub Profile](https://github.com/' + answers.username + ') \n';
    fileData += 'If you have any further questions, feel free to reach out to my email: \n'
    fileData += answers.email + '\n';
    writeToFile(fileData);
    console.log(answers);
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

