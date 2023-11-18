// TODO: 
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = ['projectTitle', 'description',];

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
            name: 'email',
            type: 'input',
            message: 'What is your email?',

        },
        {
            name: 'userName',
            type: 'input',
            message: 'What is your GitHub username?',

        },
        {
            type: "list",
            name: "licenseChoice",
            message: "Choose license",
            choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause 'Simplified' license", "BSD 3-clause 'New' or 'Revised' license", "BSD 3-clause Clear license", "BSD 4-clause 'Original; or 'Old' license", "BSD Zero-Clause license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution ShareAlike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
          }

        //   [![License]('https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


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
        //const {learned } = answers;
        const README = `
     # ${projectTitle}
     ## Description
     
      * ${description} 
       * ${motivation}
       * ${whyBuilt}
       * ${learned}
      * ${problemSolve}
      

      ##Table of Contents
      
      1. Installation
      1. Usage
      1. License
      1. Contributing
      1. Tests
      1. Questions

      ## Installation
      ##Usage
      ## License
      ${licenseChoice}
      ## Contributing
      ## Tests
      ## Questions
       >[You can see my GitHub account here] (https://github.com/${userName} "See my other projects")
       >You can contact me via email with any questions: ${email}.




    `
        fs.writeFile('README.md', README, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
        console.log(answers)
    })

    // TODO: Create a function to write README file
    //function writeToFile(fileName, data) {}


    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
