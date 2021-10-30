const Engineer = require("../lib/Engineer.js");

test("can set gitHub id", () => {
  const engineer = new Engineer("John", 123, "john@johndoe.com", "githubjohn");

  expect(engineer.github).toBe("githubjohn");
});

test("getGitHub returns gitHub id", () => {
  const engineer = new Engineer("John", 123, "john@johndoe.com", "githubjohn");

  expect(engineer.getGitHub()).toBe("githubjohn");
});

test("getRole returns role", () => {
  const engineer = new Engineer();

  expect(engineer.getRole()).toBe("Engineer");
});


