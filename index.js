//Require inquirer and fs
const inquirer = require('inquirer')
const fs = require('fs')

//Require Manager, Intern, and Engineer classes
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


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


const managers = []
const interns = []
const engineers = []

//TODO: Create the questions list

const newQuestion = () => {
  return inquirer.prompt({
    type: "list",
    name: 'role',
    message: "New Employee's role?",
    chices: ['Manager, Engineer, Intern']
  })
    .then((data) => {
      const answer = data
      if (answer.role === 'Manager') {
        managerQuestions()
      } else if (answer.role === 'Engineer') {
        engineerQuestions()
      } else if (answer.role === 'Intern') {
        internQuestions()
      } else {
        console.log(managers, interns, engineers)
      }
    })
}

const managerQuestions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is the Managers name:',
    },

    {
      type: 'input',
      name: 'id',
      message: 'Id Number',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Manager Email',
    },
    {
      type: 'input',
      name: "officeNumber",
      message: 'Office Number',
    },
    {
      type: 'confirm',
      name: 'newMember',
      message: 'Would you like to add an additional member to this team?',
    },
  ])
    .then((data) => {
      const newManager = new Manager(
        data.name
      data.id
      data.email
      data.officeNumber
      )
      managers.push(newManager)
      newQuestion()
    })
}


const engineerQuestions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is the Enigneers name?',
    },

    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineers ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineers email?',
    },

    {
      type: 'input',
      name: 'github',
      message: 'What is the Engineers Github username? (Case Sensitive)',
    },
  ])
    .then((data) => {
      const newEngineer = new Engineer(
        data.name
      data.id
      data.email
      data.github
      )
      engineers.push(newEngineer)
      newQuestion()
    })
}

internQuestions = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is the interns name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the interns ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the interns email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school is the intern from?'
    }
  ])
    .then((data) => {
      const newIntern = new Intern(
        data.name
      data.id
      data.email
      data.school
      )
      interns.push(newIntern)
      newQuestion()
    })
}










questions()
