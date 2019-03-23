CREATE DATABASE newCharacter_db;

DROP DATABASE IF EXISTS newCharacter_db;
CREATE DATABASE newCharacter_db;

CREATE TABLE characters(
name varchar(30) NOT NULL , 
class  varchar(30) NOT NULL ,
age  varchar(30)  INTEGER ,
height  varchar(30) NOT NULL ,
strength  varchar(30) NOT NULL ,
weakness  varchar(30) NOT NULL,
description varchar(30) NOT NULL ,
photo  varchar(30) NOT NULL ,
);