// name id email gitHub
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
//    parent class parameters
    super (name, id, email);
     
   this.github = github;

  }

  getGitHub() {
    return this.github;
  }

  getRole(){
    return "Engineer";
  }

}

module.exports = Engineer;
