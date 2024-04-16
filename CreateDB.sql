/*
use master
go
drop database comicsMarket
go
*/

create database comicsMarket
go

use comicsMarket
go


-- Create Users table
CREATE TABLE Users (
    id INT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    birthDate DATE,
)
GO
INSERT INTO Users (id,firstName, lastName, password, email, birthDate)
VALUES (11111111,'Misha', 'Kolomyza', 'admin', 'admin@admin.com', '2024-04-04')
GO
-- Create Products table
--drop table Products
CREATE TABLE Products (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    author VARCHAR(255),
    artist VARCHAR(255),
    publisher VARCHAR(255),
    publicationDate DATE,
    genre VARCHAR(255), 
    price DECIMAL(10, 2) NOT NULL,
    coverImage VARCHAR(255),
    stock INT DEFAULT 0
)
GO
INSERT INTO Products (id, title, description, author, artist, publisher, publicationDate, genre, price, coverImage, stock)
VALUES
(12345, 'The Amazing Spider-Man', 'Peter Parker faces a new threat...', 'Stan Lee', 'Steve Ditko', 'Marvel Comics', '1963-03-01', 'Superhero, Action', 6.00, 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/d0/57c43ae6ec459/clean.jpg', 10),
(24680, 'Batman: Year One', 'Bruce Wayne''s early days as the Dark Knight', 'Frank Miller', 'David Mazzucchelli', 'DC Comics', '1987-02-01', 'Superhero, Crime', 12.99, 'https://m.media-amazon.com/images/I/61+hFGCapwL._SL1500_.jpg', 5),
(35791, 'Watchmen', 'A deconstruction of the superhero genre', 'Alan Moore', 'Dave Gibbons', 'DC Comics', '1986-09-01', 'Superhero, Thriller', 19.99, 'https://m.media-amazon.com/images/I/61BvMZbTw9L._SL1000_.jpg', 8), 
(11121, 'Saga', 'A space opera/fantasy comic book series', 'Brian K. Vaughan', 'Fiona Staples', 'Image Comics', '2012-03-14', 'Sci-Fi, Fantasy', 9.99, 'https://s3.amazonaws.com/comicgeeks/comics/covers/large-2678528.jpg?1708830976', 7),
(13141, 'The Walking Dead Deluxe', 'A post-apocalyptic horror comic book series', 'Robert Kirkman', 'Tony Moore', 'Image Comics', '2003-10-08', 'Horror, Survival', 19.99, 'https://www.hollywoodreporter.com/wp-content/uploads/2020/07/the_walking_dead_-_publicity_-_embed_6-2020_.jpg?w=928', 4),
(13142, 'The Walking Dead', 'A post-apocalyptic horror comic book series', 'Robert Kirkman', 'Tony Moore', 'Image Comics', '2003-10-08', 'Horror, Survival', 14.99, 'https://www.hollywoodreporter.com/wp-content/uploads/2020/07/the_walking_dead_-_publicity_-_embed_5-2020_.jpg?w=928', 12),
(15161, 'Ms. Marvel', 'A teenage Pakistani American superhero', 'G. Willow Wilson', 'Adrian Alphona', 'Marvel Comics', '2014-02-05', 'Superhero, Coming-of-age', 3.99, 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/e0/6160bdc11ac10/clean.jpg', 15), 
(17181, 'Black Panther', 'The king and protector of Wakanda', 'Ta-Nehisi Coates', 'Brian Stelfreeze', 'Marvel Comics', '2016-04-06', 'Superhero, Political', 4.99, 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/03/619e63a155950/clean.jpg', 20),
(19202, 'Hellboy', 'A demon summoned to Earth who fights supernatural evil', 'Mike Mignola', 'Mike Mignola', 'Dark Horse Comics', '1994-03-23', 'Supernatural, Action', 10.99, 'https://m.media-amazon.com/images/I/612645-lZcL._SL1200_.jpg', 6),
(21222, 'Sandman', 'A dark fantasy comic book series about the Lord of Dreams', 'Neil Gaiman', 'Sam Kieth', 'DC Comics', '1989-01-01', 'Fantasy, Horror', 15.99, 'https://m.media-amazon.com/images/I/71etcZII5cL._SL1000_.jpg', 4),
(23242, 'Y: The Last Man', 'A post-apocalyptic science fiction comic book series', 'Brian K. Vaughan', 'Pia Guerra', 'Vertigo Comics', '2002-09-18', 'Sci-Fi, Drama', 12.99, 'https://m.media-amazon.com/images/I/71lBTGxPOOL._SL1500_.jpg', 9), 
(25262, 'Preacher', 'A supernatural, Western, and dark comedy comic book series', 'Garth Ennis', 'Steve Dillon', 'Vertigo Comics', '1995-04-01', 'Supernatural, Western', 16.99, 'https://m.media-amazon.com/images/I/71DjQ8bWwXL._SL1000_.jpg', 5), 
(27282, 'Fables', 'Fairy tale characters living in the real world', 'Bill Willingham', 'Lan Medina', 'Vertigo Comics', '2002-07-10', 'Fantasy, Mystery', 13.99, 'https://m.media-amazon.com/images/I/81YyqrzNDbL._SL1499_.jpg', 11),
(29303, 'Invincible', 'A superhero comic book series', 'Robert Kirkman', 'Cory Walker', 'Image Comics', '2003-01-22', 'Superhero, Action', 9.99, 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1699557764-91kCNDS7ucL.jpg?crop=1xw:1xhcenter,top&resize=980:*', 8), 
(31323, 'The Wicked + The Divine', 'Twelve gods reincarnated as pop stars', 'Kieron Gillen', 'Jamie McKelvie', 'Image Comics', '2014-06-18', 'Fantasy, Music', 3.99, 'https://cdn.imagecomics.com/assets/i/releases/7187/the-wicked-the-divine-1_2e9b2f1490.jpg', 13),
(33343, 'Paper Girls', 'Four 12-year-old newspaper delivery girls get caught in a conflict', 'Brian K. Vaughan', 'Cliff Chiang', 'Image Comics', '2015-10-07', 'Sci-Fi, Mystery', 11.99, 'https://ew.com/thmb/vbb3CkRcNTBnKrGFuc0mzQBMzhw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Papergirls-dfe9b536a36c4d189b5aff86cadc3f92.jpg', 6)
GO
--drop table CartItems
-- Create CartItems table
CREATE TABLE CartItems (
    userId INT NOT NULL,
    productId INT NOT NULL,
    quantity INT DEFAULT 0,
	CONSTRAINT PK_Cart UNIQUE (userId, productId),
    CONSTRAINT FK_User FOREIGN KEY (userId) REFERENCES Users(id),
    CONSTRAINT FK_Product FOREIGN KEY (productId) REFERENCES Products(id)
)
GO

--INSERT INTO CartItems (userId, productId, quantity)VALUES (11111111,12345, 1),(11111111,24680, 1)

CREATE PROCEDURE AddProductToCart
    @userId INT,
    @productId INT,
    @quantity INT = 1
AS
BEGIN
    SET NOCOUNT ON

    IF EXISTS (SELECT 1 FROM CartItems WHERE userId = @userId AND productId = @productId)
    BEGIN
    UPDATE CartItems
    SET quantity = quantity + @quantity
    WHERE userId = @userId AND productId = @productId
    END
    ELSE
    BEGIN
    INSERT INTO CartItems (userId, productId, quantity)
    VALUES (@userId, @productId, @quantity)
    END
END
GO

--EXEC AddProductToCart 11111111, 12345

CREATE OR ALTER PROCEDURE AddUser
	@id INT,
    @firstName VARCHAR(50),
    @lastName VARCHAR(50),
    @password VARCHAR(255),
    @email VARCHAR(255),
    @birthDate DATE = NULL
AS
BEGIN
    SET NOCOUNT ON

    IF EXISTS (SELECT 1 FROM Users WHERE  id =  @id)
    BEGIN
    RAISERROR ('User already exists.', 16, 1)
    RETURN
    END
	IF EXISTS (SELECT 1 FROM Users WHERE  email =  @email)
    BEGIN
    RAISERROR ('Email address already exists.', 16, 1)
    RETURN
    END

    INSERT INTO Users (id, firstName, lastName, password, email, birthDate)
    VALUES (@id, @firstName, @lastName, @password, @email, @birthDate)
END
GO

--EXEC AddUser 22222222, 'John',  'Doe', 'hashed_password', 'john.doe@example.com', '1990-01-01'

CREATE PROCEDURE AddProduct
    @id INT,
    @title VARCHAR(255),
    @description TEXT = NULL,
    @author VARCHAR(255) = NULL,
    @artist VARCHAR(255) = NULL,
    @publisher VARCHAR(255) = NULL,
    @publicationDate DATE = NULL,
    @genre VARCHAR(255) = NULL,
    @price DECIMAL(10, 2),
    @coverImage VARCHAR(255) = NULL,
    @stock INT = 0
AS
BEGIN
    SET NOCOUNT ON;

    -- Insert the new product with the provided ID
    INSERT INTO Products (id, title, description, author, artist, publisher, publicationDate, genre, price, coverImage, stock)
    VALUES (@id, @title, @description, @author, @artist, @publisher, @publicationDate, @genre, @price, @coverImage, @stock);
END;
GO

--EXEC AddProduct @id = 35792, @title = 'The Sandman: Overture',@description = 'description', @author = 'Neil Gaiman', @artist = 'J.H. Williams III', @publisher = 'Vertigo Comics', @publicationDate = '2013-10-30', @genre = 'Fantasy, Horror', @price = 24.99, @coverImage = 'https://images-na.ssl-images-amazon.com/images/I/91i-0kI121L.jpg', @stock = 5



GRANT SELECT, INSERT, UPDATE, DELETE ON dbo.Users TO mishakolomyza;
GRANT SELECT, INSERT, UPDATE, DELETE ON dbo.Products TO mishakolomyza;
GRANT SELECT, INSERT, UPDATE, DELETE ON dbo.CartItems TO mishakolomyza;

GRANT EXECUTE ON dbo.AddProductToCart TO mishakolomyza;
GRANT EXECUTE ON dbo.AddUser TO mishakolomyza;
GRANT EXECUTE ON dbo.AddProduct TO mishakolomyza;








select * from CartItems inner join Users on userId = id


select * from Products



