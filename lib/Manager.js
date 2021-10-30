// name id email phone
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, phone) {
    //    parent class parameters
    super(name, id, email);

    this.phone = phone;
  }

  getPhone() {
    return this.phone;
  }

  getRole () {
      return "Manager";
  }
}

module.exports = Manager;
