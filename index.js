const inquirer = require('inquirer')
const fs = require('fs')


//TODO: create a CLI that can accept user input, which will take user the user input and display as a HTML file.
//TODO: When email address is clicked, default email program will open and the "TO" field will populate
//TODO: When the Github username is clicked on the github profile is opened in a new tab
//TODO: Prompt the user for Manager name, Employee ID, email address, and Office Number
//TODO: After those prompts then you have option to add an engineer or intern to to complete the team
//TODO: When Engineer is selected user is prompted to enter engingeer's name, ID, email and Github username then taken back to menu
//TODO: When intern is selected user is name, ID, email and SChool then taken back to the menu
//TODO: WHen clicked on finished the application will complete and generate an HTML with cards that represent the team. 


//TODO:Create HTML template to be used, the output will filter to the dist folder
const generateHTML = ({ name, id, email, office }) =>

  //Starting back tick
`


`
// Ending backtick ^

//TODO: Create the questions list

const questions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'Manager name:',
    },

    {
      type: 'input',
      name: 'email',
      message: 'Email address',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID',
    },
    {
      type: 'input',
      name: "office",
      message: 'Office Number',
    },
    {
      type: 'checkbox',
      name: 'engineer',
      message: 'Would you like to add an engineer to this team?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'checkbox',
      name: 'intern',
      message: 'Would you like to add an engineer to this team?',
      choices: ['Yes', 'No'],
    }

  ])
    .then(data => {
      let answers = data
      console.log(data)
    })
}

questions()
