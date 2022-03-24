DROP DATABASE IF EXISTS employee_db
CREATE DATABASE employee_db

USE employee_db

CREATE TABLE department (
    id INT,
    [name] VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

 CREATE TABLE [role] (
    id INT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (department_id)
    REFERENCES department(id)     
    ON DELETE SET NULL
 );

CREATE TABLE employee (
    id INT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (role_id)
    REFERENCES [role](id)
    -- FOREIGN KEY (manager_id)
    -- REFERENCES employee(id)
);
