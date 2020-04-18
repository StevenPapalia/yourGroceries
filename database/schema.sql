DROP DATABASE IF EXISTS groceryStore;

CREATE DATABASE groceryStore;

USE groceryStore;

DROP TABLE IF EXISTS groceries;

CREATE TABLE groceries (
  grocery_id INT(10) NOT NULL AUTO_INCREMENT,
  item VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (grocery_id)
);