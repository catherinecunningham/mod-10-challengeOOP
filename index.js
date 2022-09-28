const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// link to page template file
const pageTemplate = require('./src/page-template')
let team = []

// manager prompts
function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "managerName"
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
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
    // push answers
    .then(ans => {
        let manager = new Manager(ans.managerName, ans.role, ans.managerId, ans.managerEmail, ans.managerOffice)
        team.push(manager)
        addAnotherEmployee()
    })
}

// intern prompts
function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "internName"
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
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
    // push answers
    .then(ans => {
        let intern = new Intern(ans.internName, ans.role, ans.internId, ans.internEmail, ans.internSchool)
        team.push(intern)
        addAnotherEmployee()
    })
}

// engineer prompts
function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "engineerName"
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
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
    // push answers
    .then(ans => {
        let engineer = new Engineer(ans.engineerName, ans.role, ans.engineerId, ans.engineerEmail, ans.engineerGithub)
        team.push(engineer)
        addAnotherEmployee()
    })
}

// prompt user to fill out information for multiple employees
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

// run sequence starting with manager prompts
managerQuestions()

// write team and write file with page template link
function writeTeam(){
    console.log(team)
    
    fs.writeFileSync("./dist/newteam.html", pageTemplate(team))
    
}



