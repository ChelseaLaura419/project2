DROP DATABASE IF EXISTS combat_db;

CREATE DATABASE combat_db;

USE combat_db;

CREATE TABLE information (

    firstName VARCHAR(40) NOT NULL,

    lastName VARCHAR(40) NOT NULL,

    email VARCHAR(50) NOT NULL,

    password VARCHAR(20) NOT NULL,
);

-- CREATE TABLE people (

--   name VARCHAR NOT NULL,

--   class/race VARCHAR NOT NULL,

--   age INTEGER(1000),

--   height INTEGER(10),

--   weight INTEGER(200),

--   weapon VARCHAR(40) NOT NULL,

--   experience INTEGER(20)
-- );


-- INSERT INTO people (name, age, height, weight, weapon, experience)
-- VALUES 
-- -- Dr. Who --
--     ("Tenth Doctor", "Time Lord", 900(roughly), 6.1, 160, "Sonic Screwdriver", 15);
--     ("Donna Noble", "Human", 30s, 5.7, unknown, "Herself", 9);
--     ("The Master(Missy)", "Time Lord", 1000(uncertain), 5.4, N/a, "Disguised screwdriver/small concealed blade", 15);

-- -- Adventure Time --

-- -- Marvel--

-- CREATE TABLE character (

--   name VARCHAR NOT NULL,

--   class/race VARCHAR NOT NULL,

--   age INTEGER(1000),

--   height INTEGER(10),

--   weight INTEGER(200),

--   weapon VARCHAR(40) NOT NULL,

--   experience INTEGER(20)
  
-- );
