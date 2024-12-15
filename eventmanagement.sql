-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2024 at 04:18 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventmanagement`
--
CREATE DATABASE IF NOT EXISTS `eventmanagement` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `eventmanagement`;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `BookingID` int(11) NOT NULL,
  `EventID` int(11) NOT NULL,
  `PaymentID` int(11) DEFAULT NULL,
  `UserID` int(11) NOT NULL,
  `BookingDate` date NOT NULL,
  `Status` enum('Pending','Confirmed','Canceled') DEFAULT 'Pending',
  `TicketPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`BookingID`, `EventID`, `PaymentID`, `UserID`, `BookingDate`, `Status`, `TicketPrice`) VALUES
(1, 1, 1, 1, '2024-01-10', 'Confirmed', 150.00),
(2, 2, 2, 2, '2024-05-18', 'Confirmed', 75.50),
(3, 3, 3, 3, '2024-09-05', 'Confirmed', 200.00),
(4, 4, 4, 4, '2024-03-20', 'Confirmed', 120.00),
(5, 5, 5, 5, '2024-07-25', 'Confirmed', 90.00),
(6, 1, NULL, 2, '2024-01-11', 'Pending', 150.00),
(7, 2, NULL, 3, '2024-05-19', 'Pending', 75.50),
(8, 3, NULL, 4, '2024-09-06', 'Pending', 200.00),
(9, 4, NULL, 5, '2024-03-21', 'Pending', 120.00),
(10, 5, NULL, 1, '2024-07-26', 'Pending', 90.00);

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
CREATE TABLE `event` (
  `EventID` int(11) NOT NULL,
  `OrganizerID` int(11) NOT NULL,
  `VenueID` int(11) NOT NULL,
  `EventName` varchar(150) NOT NULL,
  `Description` text DEFAULT NULL,
  `DateStart` date NOT NULL,
  `DateEnd` date DEFAULT NULL,
  `Time` time NOT NULL,
  `Status` enum('Active','Canceled','Completed') DEFAULT 'Active',
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `Availability` int(11) NOT NULL,
  `Image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`EventID`, `OrganizerID`, `VenueID`, `EventName`, `Description`, `DateStart`, `DateEnd`, `Time`, `Status`, `CreatedAt`, `Availability`, `Image`) VALUES
(1, 1, 1, 'Tech Conference 2024', 'A conference for tech enthusiasts.', '2024-01-15', '2024-01-16', '09:00:00', 'Active', '2024-12-15 01:51:07', 200, 'images/tech_conference.jpg'),
(2, 2, 2, 'Music Festival', 'An outdoor music festival.', '2024-05-20', '2024-05-22', '10:00:00', 'Active', '2024-12-15 01:51:07', 500, 'images/music_festival.jpg'),
(3, 1, 3, 'Art Exhibition', 'A showcase of modern art.', '2024-09-10', '2024-09-12', '11:00:00', 'Active', '2024-12-15 01:51:07', 300, 'images/art_exhibition.jpg'),
(4, 2, 1, 'Business Summit', 'A summit for business leaders.', '2024-03-25', '2024-03-26', '08:00:00', 'Active', '2024-12-15 01:51:07', 150, 'images/business_summit.jpg'),
(5, 1, 2, 'Health Expo', 'An expo on health and wellness.', '2024-07-30', '2024-07-31', '09:30:00', 'Active', '2024-12-15 01:51:07', 400, 'images/health_expo.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `organizer`
--

DROP TABLE IF EXISTS `organizer`;
CREATE TABLE `organizer` (
  `OrganizerID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `OrganizerName` varchar(100) NOT NULL,
  `OrganizerInfo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `organizer`
--

INSERT INTO `organizer` (`OrganizerID`, `UserID`, `OrganizerName`, `OrganizerInfo`) VALUES
(1, 3, 'Charlie\'s Events', 'Organizing tech and art events since 2020'),
(2, 5, 'Norton Productions', 'Bringing you the best in music and business events');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `PaymentID` int(11) NOT NULL,
  `BookingID` int(11) NOT NULL,
  `Amount` decimal(10,2) NOT NULL,
  `PaymentDate` date NOT NULL,
  `PaymentMethod` enum('Credit Card','Debit Card','PayPal','Bank Transfer','Cash') NOT NULL,
  `Status` enum('Pending','Completed','Failed') DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`PaymentID`, `BookingID`, `Amount`, `PaymentDate`, `PaymentMethod`, `Status`) VALUES
(1, 1, 150.00, '2024-01-10', 'Credit Card', 'Completed'),
(2, 2, 75.50, '2024-05-18', 'PayPal', 'Completed'),
(3, 3, 200.00, '2024-09-05', 'Bank Transfer', 'Completed'),
(4, 4, 120.00, '2024-03-20', 'Debit Card', 'Completed'),
(5, 5, 90.00, '2024-07-25', 'Cash', 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `ProfilePicture` varchar(255) DEFAULT NULL,
  `Role` enum('User','Admin','Organizer') DEFAULT 'User'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `Name`, `Email`, `Password`, `PhoneNumber`, `ProfilePicture`, `Role`) VALUES
(1, 'Alice Johnson', 'alice.johnson@example.com', 'password1', '123-456-7890', 'alice.jpg', 'User'),
(2, 'Bob Smith', 'bob.smith@example.com', 'password2', '098-765-4321', 'bob.jpg', 'Admin'),
(3, 'Charlie Brown', 'charlie.brown@example.com', 'password3', '555-123-4567', 'charlie.jpg', 'Organizer'),
(4, 'Diana Prince', 'diana.prince@example.com', 'password4', '222-333-4444', 'diana.jpg', 'User'),
(5, 'Edward Norton', 'edward.norton@example.com', 'password5', '777-888-9999', 'edward.jpg', 'Organizer');

-- --------------------------------------------------------

--
-- Table structure for table `venue`
--

DROP TABLE IF EXISTS `venue`;
CREATE TABLE `venue` (
  `VenueID` int(11) NOT NULL,
  `Name` varchar(150) NOT NULL,
  `Address` text NOT NULL,
  `Capacity` int(11) NOT NULL,
  `Type` enum('Indoor','Outdoor','Hybrid') NOT NULL,
  `ContactInfo` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `venue`
--

INSERT INTO `venue` (`VenueID`, `Name`, `Address`, `Capacity`, `Type`, `ContactInfo`) VALUES
(1, 'Grand Hall', '123 Main St, New York, NY', 500, 'Indoor', 'contact@grandhall.com'),
(2, 'Open Air Park', '456 Park Ave, Los Angeles, CA', 1000, 'Outdoor', 'info@openairpark.com'),
(3, 'Hybrid Center', '789 Central Blvd, San Francisco, CA', 750, 'Hybrid', 'support@hybridcenter.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BookingID`),
  ADD KEY `EventID` (`EventID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`EventID`),
  ADD KEY `OrganizerID` (`OrganizerID`),
  ADD KEY `VenueID` (`VenueID`);

--
-- Indexes for table `organizer`
--
ALTER TABLE `organizer`
  ADD PRIMARY KEY (`OrganizerID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`PaymentID`),
  ADD KEY `BookingID` (`BookingID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `venue`
--
ALTER TABLE `venue`
  ADD PRIMARY KEY (`VenueID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BookingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `EventID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `organizer`
--
ALTER TABLE `organizer`
  MODIFY `OrganizerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `PaymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `venue`
--
ALTER TABLE `venue`
  MODIFY `VenueID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`EventID`) REFERENCES `event` (`EventID`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`OrganizerID`) REFERENCES `organizer` (`OrganizerID`),
  ADD CONSTRAINT `event_ibfk_2` FOREIGN KEY (`VenueID`) REFERENCES `venue` (`VenueID`);

--
-- Constraints for table `organizer`
--
ALTER TABLE `organizer`
  ADD CONSTRAINT `organizer_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`BookingID`) REFERENCES `booking` (`BookingID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
