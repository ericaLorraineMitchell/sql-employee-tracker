USE employee_db;

INSERT INTO department (name)
VALUES ("HR"), ("Marketing"), ("Sales"), ("Admin"), ("Executive");

INSERT INTO role (title, salary, depart_id)
VALUES ("HR Director", 42500, 1), ("Recruiting Manager", 35000, 1), ("Creative Director", 38200, 2), ("Chief Marketing Officer", 52000, 2), ("Sales Consultant", 32500, 3), ("Sales Manager", 36500, 3), ("Office Manager", 33500, 4), ("Executive Assistant", 48500, 4), ("Executive Director", 66500, 5), ("Vice President", 80200, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ebony", "Johnson", 1, NULL), ("Asia", "Moore", 1, 01), ("Jada", "Mitchell", 2, 03), ("Nia", "Harrington", 2, 03), ("Jasmin", "Price", 3, 03), ("Raven", "Green", 3, 03), ("Tiara", "Jones", 4, 04), ("Terrell", "Smith", 4, 05), ("Maurice", "Books", 5, 05), ("DeShawn", "Bennett", 5, NULL);