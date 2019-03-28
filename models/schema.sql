USE combat_db;

CREATE TABLE information (

    firstName VARCHAR(40) NOT NULL,

    lastName VARCHAR(40) NOT NULL,

    email VARCHAR(50) NOT NULL,

    password VARCHAR(20) NOT NULL
);

CREATE TABLE characters (

  name VARCHAR NOT NULL,

  class_race VARCHAR NOT NULL,

  age INTEGER(255) NOT NULL,

  height VARCHAR(10) NOT NULL,

  strength INTEGER(200) NOT NULL,

  weakness VARCHAR(40) NOT NULL,

  description INTEGER(255)
);
