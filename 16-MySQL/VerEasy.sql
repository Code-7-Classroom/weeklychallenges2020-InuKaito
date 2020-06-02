DROP DATABASE IF EXISTS nathanCar_db;

CREATE DATABASE nathanCar_db;

USE nathanCar_db;

CREATE TABLE cars(carName VARCHAR(255), 
carModel VARCHAR(255), 
carYear INT,
carID INT AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO cars(carName, carModel, carYear)
VALUES ("Nissan", "GTR R35", 2019),
("Nissan", "GTR R34", 2002),
("Toyota", "Supra", 1998);

INSERT INTO cars(carName, carModel, carYear)
VALUES ("Toyota", "Supra", 2020),
("Chevrolet", "Corvette", 2020);

SELECT * FROM cars;
