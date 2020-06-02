DROP DATABASE IF EXISTS nathanCar_db;

CREATE DATABASE nathanCar_db;

USE nathanCar_db;

CREATE TABLE cars(carMake VARCHAR(255), 
carModel VARCHAR(255), 
carYear INT,
carID INT AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO cars(carMake, carModel, carYear)
VALUES ("Nissan", "GTR R35", 2019),
("Nissan", "GTR R34", 2002),
("Toyota", "Supra", 1998);

ALTER TABLE cars ADD prices INT;
ALTER TABLE cars ADD colors VARCHAR(255);

UPDATE cars
SET prices= 113540, colors= 'Solid Red, Jet Black Pearl, Super Silver Quadcoat, Gun Metallic, Pearl White Tricoat, Deep Blue Pearl' 
WHERE carModel = 'GTR R35';

UPDATE cars
SET prices= 60000, colors= 'Active Red,  Dark Blue Pearl, Lightning Yellow, Midnight Purple 2, Dark Metal Blue, Athlete Silver'
WHERE carModel = 'GTR R34';

UPDATE cars 
SET prices= 40000, colors= 'Super White, Diamond White, Alpine Silver, Quicksilver FX, Black, Deep Jewel Green, Baltic Blue, Royal Sapphire'
WHERE carModel = 'Supra';

ALTER TABLE cars ADD COLUMN makemodel VARCHAR(50);
UPDATE cars SET makemodel = CONCAT(carMake, ' ', carModel);
SELECT carMake, COUNT(1) FROM cars GROUP BY carMake;

SELECT * FROM cars;