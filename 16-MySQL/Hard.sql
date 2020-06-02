DROP DATABASE IF EXISTS nathanMovies_db;

CREATE DATABASE nathanMovies_db;

USE nathanMovies_db;

CREATE TABLE myMovies (title VARCHAR(255),
releaseDate VARCHAR(255),
rating INT,
movieID INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO myMovies (title, releaseDate, rating)
VALUES ("Iron Man", "05-02-2008", 94),
("Iron Man 2", "05-07-2010", 73),
("Iron Man 3", "05-03-2013", 79),
("Captain America: The First Avenger", "07-22-2011", 80),
("Captain America: The Winter Soldier", "04-04-2014", 90),
("Captain America: Civil War", "05-06-2016", 91),
("Thor", "05-06-2011", 77),
("Thor: The Dark World", "11-08-2013", 66),
("Thor: Ragnarok", "11-03-2017", 93),
("Doctor Strange", "11-04-2016", 89);

-- add director’s First Name and Last Name into two separate columns.
alter table myMovies
add firstName VARCHAR(25);

alter table myMovies
add lastName VARCHAR(25);

-- adding director’s First Name and Last Name to their movies.
UPDATE myMovies
SET firstName = "Jon", lastName = "Favreau"
WHERE title = "Iron Man";

UPDATE myMovies
SET firstName = "Jon", lastName = "Favreau"
WHERE title = "Iron Man 2";

UPDATE myMovies
SET firstName = "Shane", lastName = "Black"
WHERE title = "Iron Man 3";

UPDATE myMovies
SET firstName = "Joe", lastName = "Johnston"
WHERE title = "Captain America: The First Avenger";

UPDATE myMovies
SET firstName = "Joe", lastName = "Russo"
WHERE title = "Captain America: The Winter Soldier";

UPDATE myMovies
SET firstName = "Joe", lastName = "Russo"
WHERE title = "Captain America: Civil War";

UPDATE myMovies
SET firstName = "Kenneth", lastName = "Branagh"
WHERE title = "Thor";

UPDATE myMovies
SET firstName = "Alan", lastName = "Talyor"
WHERE title = "Thor: The Dark World";

UPDATE myMovies
SET firstName = "Taika", lastName = "Waititi"
WHERE title = "Thor: Ragnarok";

UPDATE myMovies
SET firstName = "Scott", lastName = "Derrickson"
WHERE title = "Doctor Strange";

SELECT * FROM myMovies;

-- Puts the director’s First Name and Last Name together. 
SELECT CONCAT(firstName, ' ', lastName) FROM myMovies;

-- Create a query to put the list in alphabetical order by the last name from A-Z
Select * FROM myMovies ORDER BY lastName ASC;

-- remove the Movies where the Last Name ends with ”R-Z” 
DELETE FROM myMovies 
WHERE REGEXP_LIKE(lastName, '[r-z]$');

SELECT * FROM myMovies;

-- Write a query where the first three appear
SELECT * FROM myMovies LIMIT 3;


