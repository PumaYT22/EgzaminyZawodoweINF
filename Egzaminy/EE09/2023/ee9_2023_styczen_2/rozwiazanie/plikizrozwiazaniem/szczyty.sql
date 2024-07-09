-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 19 Sty 2021, 17:33
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `gory2`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `szczyty`
--

CREATE TABLE `szczyty` (
  `id` int(11) NOT NULL,
  `pasmo` text COLLATE utf8_polish_ci NOT NULL,
  `nazwa` text COLLATE utf8_polish_ci NOT NULL,
  `wysokosc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `szczyty`
--

INSERT INTO `szczyty` (`id`, `pasmo`, `nazwa`, `wysokosc`) VALUES
(1, 'Beskid Makowiecki', 'Mędralowa', 1169),
(2, 'Beskid Mały', 'Czupel', 934),
(3, 'Beskid Niski', 'Lackowa', 997),
(4, 'Beskid Sądecki', 'Radziejowa', 1262),
(5, 'Beskid Śląski', 'Skrzyczne', 1257),
(6, 'Beskid Wyspowy', 'Mogielica', 1170),
(7, 'Beskid Żywiecki', 'Babia Góra (Diablak)', 1725),
(8, 'Bieszczady', 'Tarnica', 1346),
(9, 'Gorce', 'Turbacz', 1310),
(10, 'Góry Bardzkie', 'Szeroka Góra', 765),
(11, 'Góry Bystrzyckie', 'Jagodna', 977),
(12, 'Góry Izerskie', 'Wysoka Kopa', 1126),
(13, 'Góry Kaczawskie', 'Skopiec', 724),
(14, 'Góry Kamienne', 'Waligóra', 936),
(15, 'Góry Opawskie', 'Biskupia Kopa', 889),
(16, 'Góry Orlickie', 'Orlica', 1084),
(17, 'Góry Sowie', 'Wielka Sowa', 1015),
(18, 'Góry Stołowe', 'Szczeliniec Wielki', 919),
(19, 'Góry Świętokrzyskie', 'Łysica – Skała Agaty', 614),
(20, 'Góry Wałbrzyskie', 'Borowa', 854),
(21, 'Góry Złote', 'Kowadło', 989),
(22, 'Karkonosze', 'Śnieżka', 1603),
(23, 'Masyw Ślęży', 'Ślęża', 718),
(24, 'Pieniny', 'Wysoka', 1050),
(25, 'Masyw Śnieżnika', 'Śnieżnik', 1425),
(26, 'Tatry', 'Rysy', 2499);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `szczyty`
--
ALTER TABLE `szczyty`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
