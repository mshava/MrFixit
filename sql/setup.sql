CREATE DATABASE mr_fixit;
CREATE USER admin@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILAGES ON mr_fixit.* TO admin@localhost;
FLUSH PRIVILAGES;

use mr_fixit;

drop table if exists mechanics;
drop table if exists users;
drop table if exists carServices;
drop table if exists airConditioning;
drop table if exists mechanicalRepairs;
drop table if exists carRepairs;
drop table if exists autoElectronics;
drop table if exists autoRepairs;

CREATE TABLE mechanics (
    id int not null auto_increment primary key,
    fullName varchar (100) not null,
    password varchar (100) not null,
    contacts decimal (20.2),
    address varchar (100) not null,
    services varchar (100) not null,
    carModel varchar (100) not null
);

CREATE TABLE users (
    id int not null auto_increment primary key,
    mechanics_id int,
    fullName varchar (100) not null,
    password varchar (100) not null,
    contacts decimal (20.2),
    email varchar (100) not null,
    ownerType varchar (100) not null,
    carModel varchar (100) not null,
    engineCapacity varchar (100) not null,
    vehicleYear varchar (100) not null,
    vehicleRegNum varchar (100) not null
);

CREATE TABLE carServices (
    id int not null auto_increment primary key,
    mechanics_id int,
    users_id int,
    visualCheck varchar (100) not null,
    replacement varchar (100) not null,
    adjustment varchar (100) not null,
    plasticFilter varchar (100) not null,
    replacementOf varchar (100) not null,
    engineOil varchar (100) not null,
    lightAssessment varchar (100) not null,
    safetyCheck varchar (100) not null,
    foreign key (mechanics_id) references mechanics (id),
    foreign key (users_id) references users (id)
);

CREATE TABLE airConditioning (
    id int not null auto_increment primary key,
    mechanics_id int,
    users_id int,
    aircornRepair varchar (100) not null,
    regassingSystems varchar (100) not null,
    evoporatorReplace varchar (100) not null,
    aircornFitment varchar (100) not null,
    carbinPollenFitment varchar (100) not null,
    profAircornHose varchar(100) not null,
    tempSensorRepair varchar (100) not null,
    foreign key (mechanics_id) references mechanics (id),
    foreign key (users_id) references users (id)
);

CREATE TABLE mechanicalRepairs (
    id int not null auto_increment primary key,
    mechanics_id int,
    users_id int,
    engine varchar (100) not null,
    gearBox varchar (100) not null,
    clutchPlates varchar (100) not null,
    transmissions varchar (100) not null,
    camShaftRepair varchar (100) not null,
    foreign key (mechanics_id) references mechanics (id),
    foreign key (users_id) references users (id)
);

CREATE TABLE carRepairs (
    id int not null auto_increment primary key,
    mechanics_id int,
    users_id int,
    inspectionRepair varchar (100) not null,
    vehicleFaults varchar (100) not null,
    foreign key (mechanics_id) references mechanics (id),
    foreign key (users_id) references users (id)
);

CREATE TABLE autoElectronics (
    id int not null auto_increment primary key,
    mechanics_id int,
    users_id int,
    starters varchar (100) not null,
    alternators varchar (100) not null,
    others varchar (100) not null,
    foreign key (mechanics_id) references mechanics (id),
    foreign key (users_id) references users (id)
);

CREATE TABLE autoRepairs (
    id int not null auto_increment primary key,
    mechanics_id int,
    users_id int,
    diagnostic_check varchar (100) not null,
    engineSettings varchar(100) not null,
    performanceTuning varchar(100) not null,
    resetServices varchar(100) not null,
    electricDetection varchar(100) not null,
    foreign key (mechanics_id) references mechanics (id),
    foreign key (users_id) references users (id)
);
