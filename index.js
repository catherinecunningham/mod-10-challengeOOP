const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
//help
const pageTemplate = require('./src/page-template')
let team = []



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
            type: "input",
            message: "What is your office number?",
            name: "managerOffice"
        },
    ])
    .then(ans => {
        let manager = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOffice)
        team.push(manager)
        addAnotherEmployee()
    })
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
    .then(ans => {
        let intern = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool)
        team.push(intern)
        addAnotherEmployee()
    })
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
    .then(ans => {
        let engineer = new Engineer(ans.engineerName, ans.engineerID, ans.engineerEmail, ans.engineerGithub)
        team.push(engineer)
        addAnotherEmployee()
    })
}
function addAnotherEmployee() {
    inquirer.prompt([
        {
            name: "more",
            type: "list",
            message: "Do you need to add another employee?",
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
//help
managerQuestions()

function writeTeam(){
    console.log(team)
    
    fs.writeFileSync("./dist/newteam.html", pageTemplate(team))
    
}



