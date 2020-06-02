DROP DATABASE IF EXISTS nathanMovies_db;

CREATE DATABASE nathanMovies_db;

USE nathanMovies_db;

CREATE TABLE myMovies (title VARCHAR(255),
releaseDate VARCHAR(255),
rating INT,
movieID INT AUTO_INCREMENT PRIMARY KEY
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

SELECT * FROM myMovies;

SELECT title, releaseDate, rating
FROM myMovies
WHERE title LIKE '%s%'
ORDER BY releaseDate;

