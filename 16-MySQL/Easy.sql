DROP DATABASE IF EXISTS nathanBook_db;

CREATE DATABASE nathanBook_db;

USE nathanBook_db;

CREATE TABLE myBook (Title VARCHAR(255),
publishDate DATE,
authorFirstName VARCHAR(255),
authorLastName VARCHAR(255),
bookID INT AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO myBook (Title, publishDate, authorFirstName, authorLastName)
VALUES ("Naruto", "1999-09-21", "Masashi", "Kishimoto"),
("Bleach", "2001-08-07", "Tite", "Kubo"),
("Fairy Tail", "2006-08-02", "Hiro", "Mashima"),
("My Hero Academia", "2014-07-07", "Kohei", "Horikoshi"),
("One Piece", "1997-07-22", "Eiichiro", "Oda");

INSERT INTO myBook (Title, publishDate, authorFirstName, authorLastName)
VALUES ("Tokyo Ghoul", "2011-09-08", "Sui", "Ishida"),
("Kimetsu no Yaiba", "2016-02-15", "Koyoharu", "Gotoge");

DELETE FROM myBook 
WHERE bookID = 5;

SELECT COUNT(bookID)
FROM myBook;

SELECT * FROM myBook;