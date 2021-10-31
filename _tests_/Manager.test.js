const Manager = require("../lib/Manager.js");

test("can set phone", () => {
  const manager = new Manager("John", 123, "john@johndoe.com", 6308749632);

  expect(manager.phone).toBe(6308749632);
});

test("getPhone returns phone", () => {
  const manager = new Manager("John", 123, "john@johndoe.com", 6308749632);

  expect(manager.getPhone()).toBe(6308749632);
});

test("getRole returns role", () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe("Manager");
});
