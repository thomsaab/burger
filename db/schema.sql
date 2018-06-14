CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id integer(11) NOT NULL AUTO_INCREMENT,
	burger_name varchar(30) NOT NULL,
	devoured boolean default false,
	date timestamp NOT NULL,
	PRIMARY KEY (`id`)
);


INSERT INTO burgers (burger_name, devoured)
VALUES ("Chicken Sandwich", false), ("Turkey Burger", false), ("Veggie Burger", false);



ALTER TABLE burgers ALTER COLUMN devoured SET DEFAULT false;