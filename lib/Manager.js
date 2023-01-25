function AskManager () {
    
}
// AskManager.prototype.name = function () {
//     const inquirer = require('inquirer')
//     inquirer.prompt(
//         {
//                         type: "input",
//                         message: "What is the team Manager's name?",
//                         name: "name"
//                     }
//     ).then((res => {
//         const mngName = res.name
//         console.log(mngName)
//         return mngName
//     }))
// }
// AskManager.prototype.id = function () {
//     const inquirer = require('inquirer')
//     inquirer.prompt(
//         {
//             type: "input",
//             message: "What is the employee id?",
//             name: "mngId"
//         }
//     ).then((res => {
//         const mngId = res.mngId
//         console.log(mngId)
//         return mngId
//     }))
// }

function AskManager () {
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
            message: "What is the office number?",
            name: "mngOffice"
        }
    ]
).then((res => {
  const mngName = res.name
  const mngId = res.mngId
  const mngEmail = res.mngEmail
  const mngOffice = res.mngOffice

  console.log(mngName, mngId, mngEmail, mngOffice)

    return [mngName, mngId, mngEmail, mngOffice]

    // fs.writeFile('README.md', readMe,  {
    //     encoding: "utf8",
    //     flag: "w",
    //     mode: 0o666
    //   },
    //   (err) => {
    //     if (err)
    //       console.log(err);
    //     else {
    //       console.log("File written successfully\n");
    //       console.log("The written has the following contents:");
    //       console.log(fs.readFileSync("README.md", "utf8"));
    //     }} )
  
})

)
}
module.exports = AskManager;