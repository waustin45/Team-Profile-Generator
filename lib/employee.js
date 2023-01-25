const fs = require('fs');
const inquirer = require('inquirer')
inquirer.prompt(
    [
        {
            type: "input",
            message: "What is the team Manager's name?",
            name: "name"
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
            message: "Enter Usage Information.",
            name: "use"
        },
        {
            type: "input",
            message: "Test Instruction.",
            name: "test"
        },
        {
            type: "list",
            message: "Any licenses?",
            name: "license",
            choices: ["MIT", "ISC", "none"]
        },
        {
            type: "input",
            message: "Contributors. Github profile names and separate by comma if more than one.",
            name: "contr"
        },
        {
            type: "input",
            message: "Add Email.",
            name: "Email"
        },
    ]
).then((res => {
  
    fs.writeFile('README.md', readMe,  {
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
  
})

)