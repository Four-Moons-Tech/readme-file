// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
//const questions = [];

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
            message: 'What was your motivation?',
            message: 'Why did you build this project?',
            message: 'What problem does it solve?',
            message: 'What did you learn?',
        },
        {
            name: 'problemSolve',
            type: 'input',
            message: 'What problem does it solve?',

        }



    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const { projectTitle } = answers;
        const { description } = answers;
        const { problemSolve } = answers;
        //const {location } = answers;
        //const {location } = answers;
        //const {location } = answers;
        const README = `
     # ${projectTitle}
     # ${description}
     # ${problemSolve}


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
