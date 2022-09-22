const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

function appMenu() {
        function managerQuestions() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your name?",
                    name: "managerName"
                },
                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "managerId"
                },
                {
                    type: "input",
                    message: "What is your email address?",
                    name: "managerEmail"
                },
                {
                    //add Employee questions to each inquirer prompt?
                    type: "input",
                    message: "What is your office number?",
                    name: "managerOffice"
                },
            ])
        }
    
        function internQuestions() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your name?",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "internId"
                },
                {
                    type: "input",
                    message: "What is your email address?",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "What school do you attend?",
                    name: "internSchool"
                },
            ])
        }

        function engineerQuestions() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your name?",
                    name: "engineerName"
                },
                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "engineerId"
                },
                {
                    type: "input",
                    message: "What is your email address?",
                    name: "engineerEmail"
                },
                {
                    type: "input",
                    message: "What is your Github username?",
                    name: "engineerGithub"
                },
            ])
        }
        function addAnotherEmployee() {
            inquirer.prompt([
                {
                    name: "more",
                    choices: ["Intern", "Engineer", "No"]
                },
            ]).then(ans => {
                if (ans.more === "No") {
                    writeTeam()
                } else if (ans.more === "Engineer") {
                    engineerQuestions()
                } else {
                    internQuestions()
                }
            })
        }
    
}