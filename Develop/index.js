// TODO: 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// const questions = ['projectTitle', 'description',];

inquirer
    .prompt([
        { /* Pass your questions in here */
            name: 'projectTitle',
            type: 'input',
            message: 'What is the title of your project?',
        },
        {
            name: 'description',
            type: 'input',
            message: 'Describe your project:',
        },
        {
            name: 'motivation',
            type: 'input',
            message: 'What was your motivation?',

        },
        {
            name: 'whyBuilt',
            type: 'input',
            message: 'Why did you build this project?',

        },
        {
            name: 'learned',
            type: 'input',
            message: 'What did you learn?',

        },
        {
            name: 'problemSolve',
            type: 'input',
            message: 'What problem does it solve?',

        },
        {
            name: 'installation',
            type: 'input',
            message: 'How do you install the application?',

        },
        {
            name: 'usage',
            type: 'input',
            message: 'How do you use the application?',

        },
        
        {
            type: "list",
            name: "licenseChoice",
            message: "Choose license",
            choices: 
            ["Apache license 2.0", 
            "Boost Software License 1.0",
            "BSD 2-Clause License",
            "BSD 3-Clause License",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "ISC License (ISC)",
            'IBM Public License Version 1.0',
            "MIT",
            "Mozilla Public License 2.0",
            "Open Database License (ODbL)",
            "SIL Open Font License 1.1",
            "The zlib/libpng License"
        ]
        },
        {
            name: 'contributing',
            type: 'input',
            message: 'Who contributed to your project?',

        },
        {
            name: 'test',
            type: 'input',
            message: 'How do you test your application?',

        },
          {
            name: 'email',
            type: 'input',
            message: 'What is your email?',

        },
        {
            name: 'userName',
            type: 'input',
            message: 'What is your GitHub username?',

        },
        

    ])
    .then((answers) => {
        
        const { projectTitle } = answers;
        const { description } = answers;
        const { problemSolve } = answers;
        const { motivation } = answers;
        const { whyBuilt } = answers;
        const { learned } = answers;
        const { email } = answers;
        const { userName } = answers;
        const {licenseChoice } = answers;
        const {test } = answers;
        const { contributing } = answers;
        const {installation} = answers;
        const {usage } = answers;
        // const badge = renderLicenseBadge(licenseChoice);
        // console.log(badge)
        const README = `
# ${projectTitle} 
 

## Description
     
* ${description} 
* _What motivates me to do this project?_ ${motivation}
* _Why did I build this application?_ ${whyBuilt}
* _What did I learn?_ ${learned}
* _What problem does my application solve?_ ${problemSolve}
      

## Table of Contents
    
1. [Installation](#installation)
1. [Usage](#usage)
1. [License](#license)
1. [Contributing](#contributing)
1. [Tests](#tests)
1. [Questions](#tests)

## Installation
${installation}

## Usage
${usage}
## License
${licenseChoice}
## Contributing
${contributing}
## Tests
${test}
## Questions
>[You can see my GitHub account here](https://github.com/${userName} "See my other projects")
>You can contact me via email with any questions: ${email}.




    `
        fs.writeFile('README.md', README, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
        console.log(answers)
    })


    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

