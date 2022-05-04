-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1:3306
-- Tid vid skapande: 04 maj 2022 kl 20:21
-- Serverversion: 5.7.36
-- PHP-version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `bastu`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'FilipThuresson', '$2y$10$WYqafXlmjw64TztURd4rduQe5AWUeXDhxfpU5b6l4otnQNfLl/b2m');

-- --------------------------------------------------------

--
-- Tabellstruktur `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `start` varchar(100) NOT NULL,
  `end` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNr` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `events`
--

INSERT INTO `events` (`id`, `title`, `start`, `end`, `color`, `email`, `phoneNr`, `name`) VALUES
('2db484fc-e89e-4591-8d14-8e27c00559d4', 'Bokad Tid', '2022-05-05T10:00:00+02:00', '2022-05-05T20:00:00+02:00', 'red', 'filip.tthuresson@gmail.com', '0709220920', 'Filip Thuresson'),
('8787f026-ac6e-43c1-b05d-887187e401c5', 'Reserverat!', '2022-05-03T12:00:00+02:00', '2022-05-03T16:00:00+02:00', 'orange', 'filip.tthuresson@gmail.com', '0709220920', 'Filip Thuresson');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
