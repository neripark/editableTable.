-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017 年 12 朁E22 日 05:17
-- サーバのバージョン： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `mststatus`
--

CREATE TABLE `mststatus` (
  `statusId` char(2) NOT NULL,
  `status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `mststatus`
--

INSERT INTO `mststatus` (`statusId`, `status`) VALUES
('01', '未'),
('02', '回答待ち'),
('03', '○'),
('04', '△'),
('05', '×');

-- --------------------------------------------------------

--
-- テーブルの構造 `trnguestinfo`
--

CREATE TABLE `trnguestinfo` (
  `guestId` char(4) NOT NULL,
  `guestName` varchar(30) DEFAULT NULL,
  `hostName` varchar(30) CHARACTER SET utf32 DEFAULT NULL,
  `guestGroup` varchar(30) DEFAULT NULL,
  `statusId` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `trnguestinfo`
--

INSERT INTO `trnguestinfo` (`guestId`, `guestName`, `hostName`, `guestGroup`, `statusId`) VALUES
('0001', 'おきあゆりょうたろう', 'neri', 'G3', '02'),
('0002', 'いしだあきら', 'neri', 'G2', '02'),
('0003', 'ほしそういちろう', 'neri', 'G1', '03'),
('0004', 'わかもとのりお', 'neri', 'G3', '04'),
('0005', 'よながつばさ', 'park', 'G1', '01'),
('0006', 'しまざきのぶなが', 'neri', 'G3', '01'),
('0007', 'ふくやまじゅん', 'neri', 'G1', '03'),
('0008', 'さくらいたかひろ', 'neri', 'G1', '03'),
('0009', 'なかむらゆういち', 'park', 'G2', '03'),
('0010', 'せきともかず', 'neri', 'G2', '03'),
('0011', 'すぎやまのりあき', 'neri', 'G1', '03'),
('0012', 'おのだいすけ', 'neri', 'G3', '04'),
('0013', 'たちきふみひこ', 'park', 'G3', '02'),
('0014', 'おのさかまさや', 'park', 'G1', '03'),
('0015', 'かじゆうき', 'neri', 'G2', '03'),
('0016', 'しものひろ', 'park', 'G1', '03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mststatus`
--
ALTER TABLE `mststatus`
  ADD PRIMARY KEY (`statusId`);

--
-- Indexes for table `trnguestinfo`
--
ALTER TABLE `trnguestinfo`
  ADD PRIMARY KEY (`guestId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
