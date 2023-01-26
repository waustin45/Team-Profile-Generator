const AskManager = require('./lib/Manager.js')
const MakeEmployee = require('./lib/employee.js')
const MakeIntern = require('./lib/intern.js')

const fs = require('fs');
const inquirer = require('inquirer')
const htmlArr = []
function manangerPrompt () {
    inquirer.prompt(
        [
            {
                type: "input",
                message: "What is the team Manager's name?",
                name: "mngName"
            },
            {
                type: "input",
                message: "What is the employee id?",
                name: "mngId"
            },
            {
                type: "input",
                message: "What is the email address?",
                name: "mngEmail"
            },
            {
                type: "input",
                message: "What is the office number?",
                name: "mngOffice"
            },
        ]
    ).then((res => {
        const manager = new AskManager(res.mngName, res.mngId, res.mngEmail, res.mngOffice)
        manager.printInfo()
        htmlArr.push(manager.showHTML())
        employeePrompt()
    })
    )
}

function employeePrompt () {
    inquirer.prompt(
        [
            {
                type: "confirm",
                message: "Would you like to add an employee?",
                name: "addEmployee"
            },
        ]
    ).then(res => {
        const added = res.addEmployee
        if (added === true) {
            inquirer.prompt(
                [
                    {
                        type: "list",
                        message: "What role is the employee?",
                        choices: ["Engineer", "Intern"],
                        name: "employeeList"
                    },
                ]
            ).then(stuff => {
                const choice = stuff.employeeList
                if(choice == "Engineer") {
                    inquirer.prompt(
                        [
                            {
                                type: "input",
                                message: "What is their name?",
                                name: "employeeName"
                            },
                            {
                                type: "input",
                                message: "What is their ID?",
                                name: "employeeID"
                            },
                            {
                                type: "input",
                                message: "What is their Email?",
                                name: "employeeEmail"
                            },
                            {
                                type: "input",
                                message: "What is their Github?",
                                name: "employeeGithub"
                            },
                        ]
                    ).then (ans => {
                        const name = ans.employeeName
                        const email = ans.employeeEmail
                        const github = ans.employeeGithub
                        const id = ans.employeeID
                        const employee = new MakeEmployee(name, id, email, github)
                        htmlArr.push(employee.showHTML())
                        employeePrompt()
                    })
                } else {
                    // go back and add option for student
                    inquirer.prompt(
                        [
                            {
                                type: "input",
                                message: "What is their name?",
                                name: "internName"
                            },
                            {
                                type: "input",
                                message: "What is their ID?",
                                name: "internID"
                            },
                            {
                                type: "input",
                                message: "What is their Email?",
                                name: "internEmail"
                            },
                            {
                                type: "input",
                                message: "Where do they go to school?",
                                name: "internSchool"
                            },
                        ]
                    ).then(int => {
                        const name = int.internName
                        const email = int.internEmail
                        const school = int.internSchool
                        const id = int.internID
                        const employee = new MakeIntern(name, id, email, school)
                        htmlArr.push(employee.showHTML())
                        employeePrompt()
                    })
                    
                }
            })
        } else {
            createHTMLFile()
        }
    })
}

function createHTMLFile () {
    const map = htmlArr.map(each => {
        return each
    }).join('')
    const mainHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Team Profiler</title>
    </head>
    <body>
    <nav> <h1> My Team</nav>
        <main>
            ${map}
        </main>
    </body>
    </html>`


    fs.writeFile('index.html', mainHtml,  {
        encoding: "utf8",
        flag: "w",
        mode: 0o666
      },
      (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("README.md", "utf8"));
        }} )
}
manangerPrompt()