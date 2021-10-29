
const Employee = require("../lib/Employee.js");

test("creates an Employee object", () => {
  const employee = new Employee("name");

  expect(employee.name).toBe("John");
  expect(employee.id).toEqual(expect.any(Number));
});