const Intern = require("../lib/Intern.js");

test("can set school", () => {
  const intern = new Intern("John", 123, "john@johndoe.com", "Rice");

  expect(intern.school).toBe("Rice");
});

test("getSchool returns school", () => {
  const intern = new Intern("John", 123, "john@johndoe.com", "Rice");

  expect(intern.getSchool()).toBe("Rice");
});

test("getRole returns role", () => {
  const intern = new Intern();

  expect(intern.getRole()).toBe("Intern");
});
