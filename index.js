const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

function managerQuestions(){
    inquirer.prompt([
        {

        },
    ])
}
function internQuestions(){
    inquirer.prompt([
        {

        },
    ])
}
function engineerQuestions(){
    inquirer.prompt([
        {

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