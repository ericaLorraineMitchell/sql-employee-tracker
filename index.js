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
      } else if (data.start === "Add an employee") {
        employeeAdd();
      } else if (data.start === "Update an employee role") {
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
  let query = `SELECT * FROM role`;
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
        name: "name",
        message: "What is the name of new department?",
      },
    ])
    .then((data) => {
      // console.log(data.depart);
      let query = `INSERT INTO department (name) VALUES = ?`;
      db.query(query, data.depart, (err, results) => {
        console.log(`${data.depart} successfully added`);
        // console.table(results);
        start();
      });
    });
};

const roleAdd = () => {
  const depart = `SELECT * FROM department`;
  let departList = [];
  db.query(depart, (err, results) => {
    results.forEach((department) => {
      let departObj = {
        name: department.name,
        value: department.id,
      };
      departList.push(departObj);
    });
  });

  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "depart_id",
        message: "What department does the role belong to?",
        choices: departList,
      },
    ])
    .then((data) => {
      let query = `INSERT INTO role (title, salary, depart_id) VALUES (?,?,?)`;
      console.log(data);
      db.query(
        query,
        [data.title, data.salary, data.depart_id],
        (err, results) => {
          console.log(err);
          console.log(`${data.title} successfully added`);
          start();
        }
      );
    });
};

const employeeAdd = () => {
  const roles = `SELECT role.title, role.id FROM role`;
  let roleList = [];
  db.query(roles, (err, results) => {
    results.forEach((role) => {
      let roleObj = {
        name: role.title,
        value: role.id,
      };
      roleList.push(roleObj);
    });
  });
  const manager = `SELECT * FROM employee`;
  let managerList = [];
  db.query(manager, (err, results) => {
    results.forEach((employee) => {
      let managerObj = {
        name: employee.first_name + " " + employee.last_name,
        value: employee.id,
      };
      managerList.push(managerObj);
    });
  });
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of new employee?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of new employee?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is the new employees role?",
        choices: roleList,
      },
      {
        type: "list",
        name: "manager_id",
        message: managerList,
      },
    ])
    .then((data) => {
      let query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
      console.log(data);
      db.query(
        query,
        [data.first_name, data.last_name, data.role_id, data.manager_id],
        (err, results) => {
          console.log(err);
          console.log(
            `${data.first_name} ${data.last_name} successfully added`
          );
          start();
        }
      );
    });
};

const employeeUpdate = () => {
  const update = `SELECT employee.first_name, employee.last_name, employee.role_id FROM employee`;
  let employList = [];
  db.query(update, (err, results) => {
    results.forEach((employee) => {
      let employObj = {
        name: employee.first_name + " " + employee.last_name,
        id: employee.role_id,
      };
      employList.push(employObj);
    });
  });
  inquirer
    .prompt([
      {
        type: "list",
        name: "update",
        message: "Which employee do you want to update?",
        choices: employList,
      },
    ])
    .then((data) => {
      let query = `UPDATE employee AT role_id VALUES = ?`;
      db.query(query, function (err, results) {
        console.log(`${employee.role_id} successfully updated`);
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
