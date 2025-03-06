CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PhoneNumber VARCHAR(15) UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    UserType ENUM('Customer', 'Admin') DEFAULT 'Customer',
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Airports (
    AirportCode CHAR(3) PRIMARY KEY,
    AirportName VARCHAR(100) NOT NULL,
    City VARCHAR(50) NOT NULL,
    Country VARCHAR(50) NOT NULL
);


CREATE TABLE Flights (
    FlightID INT PRIMARY KEY AUTO_INCREMENT,
    AirlineName VARCHAR(50) NOT NULL,
    FlightNumber VARCHAR(10) NOT NULL,
    DepartureAirport CHAR(3) NOT NULL,
    ArrivalAirport CHAR(3) NOT NULL,
    DepartureTime DATETIME NOT NULL,
    ArrivalTime DATETIME NOT NULL,
    TotalSeats INT NOT NULL CHECK (TotalSeats > 0),
    FOREIGN KEY (DepartureAirport) REFERENCES Airports(AirportCode),
    FOREIGN KEY (ArrivalAirport) REFERENCES Airports(AirportCode)
);


CREATE TABLE Bookings (
    BookingID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    FlightID INT NOT NULL,
    BookingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Status ENUM('Booked', 'Cancelled') DEFAULT 'Booked',
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (FlightID) REFERENCES Flights(FlightID)
);


CREATE TABLE Tickets (
    TicketID INT PRIMARY KEY AUTO_INCREMENT,
    BookingID INT NOT NULL,
    SeatNumber VARCHAR(5) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (BookingID) REFERENCES Bookings(BookingID)
);


ALTER TABLE Flights
ADD CONSTRAINT chk_flight_time CHECK (ArrivalTime > DepartureTime);


-- Triggers :
-- 1. to prevent overbooking

CREATE TRIGGER prevent_overbooking
BEFORE INSERT ON Bookings
FOR EACH ROW
BEGIN
    DECLARE booked_seats INT;
    SELECT COUNT(*) INTO booked_seats
    FROM Bookings
    WHERE FlightID = NEW.FlightID AND Status = 'Booked';
    
    DECLARE total_seats INT;
    SELECT TotalSeats INTO total_seats
    FROM Flights
    WHERE FlightID = NEW.FlightID;
    
    IF booked_seats >= total_seats THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot book more seats than available on this flight.';
    END IF;
END;


-- 2. Update seat availability after booking:
CREATE TRIGGER update_seat_count
AFTER INSERT ON Tickets
FOR EACH ROW
BEGIN
    UPDATE Flights
    SET TotalSeats = TotalSeats - 1
    WHERE FlightID = (SELECT FlightID FROM Bookings WHERE BookingID = NEW.BookingID);
END;



-- Handle cancellations
CREATE TRIGGER handle_cancellation
AFTER UPDATE ON Bookings
FOR EACH ROW
BEGIN
    IF NEW.Status = 'Cancelled' THEN
        UPDATE Flights
        SET TotalSeats = TotalSeats + 1
        WHERE FlightID = OLD.FlightID;
    END IF;
END;
