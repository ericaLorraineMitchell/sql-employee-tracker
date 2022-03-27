//Require packages for app
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const db = require("./server");

//Inquirer Questions array for user input
const start = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((data) => {
      // console.log(data.start);
      if (data.start === "View all departments") {
        departView();
      } else if (data.start === "View all roles") {
        roleView();
      } else if (data.start === "View all employees") {
        employeeView();
      } else if (data.start === "Add a department") {
        departAdd();
      } else if (data.start === "Add a role") {
        roleAdd();
      } else if (data.start === "Add a role") {
        employeeAdd();
      } else if (data.start === "Add a role") {
        employeeUpdate();
      } else {
        console.log("Goodbye");
      }
      // console.log(data);
    });
};

const departView = () => {
  let query = `SELECT * FROM department`;
  db.query(query, function (err, results) {
    console.table(results);
    start();
  });
};

const roleView = () => {
  let query = `SELECT * FROM role JOIN department ON department.id = role.depart_id`;
  db.query(query, function (err, results) {
    console.table(results);
    start();
  });
};

const employeeView = () => {
  let query = `SELECT * FROM employee`;
  db.query(query, function (err, results) {
    console.table(results);
    start();
  });
};

const departAdd = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "depart",
        message: "What is the name of new department?",
      },
    ])
    .then((data) => {
      // console.log(data.depart);
      let query = `INSERT INTO department (name) VALUES (?)`;
      db.query(query, [data.depart], (err, results) => {
        console.log(`${data.depart} successfully added`);
        console.table(results);
        start();
      });
    });
};

const roleAdd = () => {
  const depart = `SELECT * FROM department`;
  let departList = [department.id, department.name];
  db.query(depart, departList, (err, results) => {
    results.forEach((department) => {
      department.push(departList);
    });
  });

  inquirer
    .prompt([
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
        choices: departList,
      },
    ])
    .then((data) => {
      let query = `INSERT INTO role (title,salary,depart_id) VALUES ${data.roleName}, ${data.roleName}, ${data.roleName}`;
      db.query(query, function (err, results) {
        console.log(`${data.roleName} successfully added`);
        start();
      });
    });
};

const employeeAdd = () => {
  inquirer
    .prompt([
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
    ])
    .then((data) => {
      let query = `INSERT INTO role (title,salary,depart_id) VALUES ${data.roleName}, ${data.roleName}, ${data.roleName}`;
      db.query(query, function (err, results) {
        console.log(`${data.roleName} successfully added`);
        start();
      });
    });
};

const employeeUpdate = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "update",
        message: "Which employee do you want to update?",
        choices: [`${employee}`],
      },
    ])
    .then((data) => {
      let query = `INSERT INTO role (title,salary,depart_id) VALUES ${data.roleName}, ${data.roleName}, ${data.roleName}`;
      db.query(query, function (err, results) {
        console.log(`${data.roleName} successfully added`);
        start();
      });
    });
};

//Function to initialize app
function init() {
  start();
}
//Function to call app
init();
