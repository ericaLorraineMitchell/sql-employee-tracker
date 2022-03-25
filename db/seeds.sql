USE employee_db;

INSERT INTO department (name)
VALUES ("HR"), ("Marketing"), ("Sales"), ("Admin"), ("Executives");

INSERT INTO role (title, salary, depart_id)
VALUES ("HR Director", 42500, 1), ("Recruiting Manager", 35000, 1), ("Creative Director", 38200, 2), ("Chief Marketing Officer", 52000, 2), ("Sales Consultant", 32500, 3), ("Sales Manager", 36500, 3), ("Office Manager", 33500, 4), ("Executive Assistant", 48500, 4), ("Executive Director", 66500, 5), ("Vice President", 80200, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ebony", "Johnson", 1, NULL), ("Asia", "Moore", 1, 1), ("Jada", "Mitchell", 2, 3), ("Nia", "Harrington", 2, 3), ("Jasmin", "Price", 3, 3), ("Raven", "Green", 3, 3), ("Tiara", "Jones", 4, 4), ("Terrell", "Smith", 4, 5), ("Maurice", "Books", 5, 5), ("DeShawn", "Bennett", 5, 5), ("Andre", "Taylor", 5, NULL);