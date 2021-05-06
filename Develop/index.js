// TODO: Include packages needed for this application
// ************DEPENDENCIES*************** 
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?", 
        name: "title"
    },
    {  
        message:"What is the description of your project?" ,
        name: "description"
    },
    {
        message:"What are the project's installation instructions?",
        name: "installation"   
    },
    {
        message: "How can the application within the project be used?",
        name:"usage"       
    },
    {
        message: "How can somebody contribute to the project?",
        name:"contribution"       
    },
    {
        message: "What tests have been performed on this application?",
        name:"tests"       
    },
    {
        message: "What is the user's contact email?",
        name:"email"       
    },
    {
        message: "What is the user's github account?",
        name:"github"       
    },
    {
        message: "what license are you using for this project?",
        name:"license",
        type: "list",
        choices: ["apache","gnu","MIT"]      
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to my Markdown App.");
    inquirer.prompt(questions).then(finish);
}
function finish(answers) {
    const fileName = "./dist/README.md";
    const data= generateMarkdown(answers);
    writeToFile(fileName, data);
    console.log("find markdown file in dist folder.");
    console.log("thank you using my markdown app."); 
}

// Function call to initialize app
init();
