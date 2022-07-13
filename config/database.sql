CREATE DATABASE employeesDatabase;

CREATE TABLE positions (
    id SERIAL,
    position_name VARCHAR(150) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE offices (
    id SERIAL,
    office_name VARCHAR(150) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employees(
    id SERIAL,
    firstname VARCHAR(150),
    lastname VARCHAR(150),
    phone VARCHAR(150),
    gender VARCHAR(150),
    position_id INTEGER REFERENCES positions(id),
    office_id INTEGER REFERENCES offices(id)
);