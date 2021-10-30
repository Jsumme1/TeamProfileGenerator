
const Employee = require("../lib/Employee.js");

test("creates an Employee object", () => {
  const employee = new Employee();
 expect(typeof(employee)).toBe("object");
 });

test("can set employee name", () =>{
   const employee = new Employee("John");

   expect(employee.name).toBe("John");
});

test("can set employee id", () => {
  const employee = new Employee("John", 123);
  expect(employee.id).toBe(123);
});

test("can set employee email", () => {
  const employee = new Employee("John", 123, "john@johndoe.com");
  expect(employee.email).toBe("john@johndoe.com");
});

test("getName returns name", () => {
  const employee = new Employee("John");

  expect(employee.getName()).toBe("John");

});

test("getId returns id", () => {
  const employee = new Employee("John", 123);

  expect(employee.getId()).toBe(123);
});

test("getEmail returns email", () => {
  const employee = new Employee("John", 123, "john@johndoe.com");

  expect(employee.getEmail()).toBe("john@johndoe.com");
});
