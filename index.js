// external paths needed
const inquirer = require("inquirer");
const fs = require("fs");
// const generatePage = require("./src/page-template");

// // Team building!
// const Employee = require("./lib/Employee");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const teamArray = [];

// start of the user interface
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
// not going to pretend - got this from w3 resource
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email address? (Required)",
      validate: (email) => {
           valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        if (valid) {
            return true;
        } else {  
            return "You have entered an invalid email address!"
        }
        }
    },
   
    {
      type: "input",
      name: "phone",
      message: "What is the team manager's phone number? (Required)",
      validate: (phone) => {
        pass = /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/.test(phone);
        if (pass) {
          return true;
        }   else {
            return "Please enter a valid phone number";
        }
      }
    },
  ]);
};

promptUser();

// const promptSubs = (SubsData) => {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "subTitle",
//         message: "What type of employee would you like to add?",
//         choices: ["Engineer", "Intern"],
//       },
     
//       {
//         type: "confirm",
//         name: "confirmSubordinate",
//         message: "Would you like to add another team memeber?",
//         default: false,
//       },

//     ])
//     .then((projectData) => {
//       portfolioData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portfolioData;
//       }
//     });
// };