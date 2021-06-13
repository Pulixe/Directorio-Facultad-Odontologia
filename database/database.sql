CREATE DATABASE ng_patients_db;
USE ng_patients_db;

CREATE TABLE patients(

    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    phone varchar(180),
    email varchar(180),
    dentalt varchar(180),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE practicants(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    phone varchar(180),
    email varchar(180),
    about varchar (180),
    dentallt varchar (180),
    created_aat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Describe patients;