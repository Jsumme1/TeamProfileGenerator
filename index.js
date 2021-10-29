// const { writeFile, copyFile } = require("./dist/generate-site.js");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "id",
      message: "What is the team manager's employee id? (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the id number!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "email",
      message: "What is the team manager's email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "phone",
      message: "What is the team manager's phone number? (Required)",
      validate(value) {
        const pass = value.match(
          /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
        );
        if (pass) {
          return true;
        }

        return "Please enter a valid phone number";
      },
    },
  ]);
};

const promptSubs = (SubsData) => {
  return inquirer
    .prompt([
  
     {
        type: "confirm",
        name: "confirmSubordinate",
        message: "Would you like to add another team memeber?",
        default: false,
      },
    {
      type: 'list',
      name: 'subTitle',
      message: 'What type of employee would you like to add?',
      choices: ['Engineer', 'Intern'],
    
      },

   
         ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};