//Require packages for app
const inquirer = require("inquirer");
const consoleTable = require("consoleTable");
const server = require("./server");

//Inquirer Questions array for user input
const start = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "start",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
        "Quit"
      ],
    },
  ]);
};

const departView = () => {
  {
    let query = `SELECT * FROM department`;
    console.table(department);
  }
  start();
};
const roleView = () => {
  {
    let query = `SELECT * FROM role`;
    console.table(role);
  }
  start();
};

const employeeView = () => {
  {
    let query = "SELECT * FROM employee";
    console.table(employee);
  }
  start();
};

const departAdd = () => {
  return (
    inquirer.prompt([
      {
        type: "input",
        name: "department",
        message: "What is the name of new department?",
      },
    ]),
    console.log("`${departAdd}` successfully added")
  );

  let query = "INSERT INTO department `${departAdd}`";
  start();
};

const roleAdd = () => {
  return (
    inquirer.prompt([
      {
        type: "input",
        name: "roleName",
        message: "What is the name of new role?",
      },
      {
        type: "input",
        name: "roleSal",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "roleDep",
        message: "What department does the role belong to?",
        choices: [`${department}`],
      },
    ]),
    console.log("`${roleAdd}` successfully added")
  );

  let query = "INSERT INTO role `${roleAdd}`";
  start();
};

const employeeAdd = () => {
  return (
    inquirer.prompt([
      {
        type: "input",
        name: "employeeF",
        message: "What is the first name of new employee?",
      },
      {
        type: "input",
        name: "employeeL",
        message: "What is the last name of new employee?",
      },
      {
        type: "input",
        name: "employeeRole",
        message: "What is the new employees role?",
      },
      {
        type: "input",
        name: "employeeMan",
        message: "Who is the employees Manager? (put NULL if none)",
      },
    ]),
    console.log("`${employeeAdd}` successfully added")
  );

  let query = "INSERT INTO employee `${employeeAdd}`";
  start();
};

const employeeUpdate = () => {
  return (
    inquirer.prompt([
      {
        type: "list",
        name: "update",
        message: "Which employee do you want to update?",
        choices: [`${employee}`],
      },
    ]),
    console.log("`${employeeUpdate}` successfully updated")
  );

  let query = "INSERT INTO employee `${employeeUpdate}`";
  start();
};

//Function to initialize app
function init() {
  start().then((data) => {
    //where queries should go or async order of prompts?
  });
}
//Function to call app
init();
