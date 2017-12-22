CREATE TABLE `test`.`TrnGuestInfo`
( `guestId` CHAR(4) NOT NULL ,
  `guestName` VARCHAR(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,
  `hostName` VARCHAR(30) CHARACTER SET utf32 COLLATE utf32_general_ci NULL ,
  `guestGroup` VARCHAR(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,
  `statusId` CHAR(2) NULL ,
  PRIMARY KEY (`guestId`(4)))
ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci;
