const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

function managerQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            //add Employee questions to each inquirer prompt?
            type: "input",
            message: "What is your office number?",
            name: "office"
        },
    ])
}
function internQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "What school do you attend?",
            name: "school"
        },
    ])
}
function engineerQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Github username?",
            name: "github"
        },
    ])
}
function addAnotherEmployee(){
    inquirer.prompt([
        {
            name: "more",
            choices: ["Intern", "Engineer", "No"]
        },
    ]).then(ans =>{
        if(ans.more === "No"){
            writeTeam() 
        } else if(ans.more ==="Engineer"){
            engineerQuestions()
        } else {
            internQuestions()
        }
    })
}