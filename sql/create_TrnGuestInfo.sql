CREATE TABLE `trnguestinfo` (
  `guestId` char(4) NOT NULL,
  `guestName` varchar(30) DEFAULT NULL,
  `hostName` varchar(30) CHARACTER SET utf32 DEFAULT NULL,
  `guestGroup` varchar(30) DEFAULT NULL,
  `statusId` char(2) DEFAULT NULL,
  `showDefault` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
