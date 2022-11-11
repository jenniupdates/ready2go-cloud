use ready2go;

INSERT INTO `orders` (`trackingID`,`merchantOrderID`,`merchantID`,`merchantName`,`customerID`,
`customerAddress`,`sellerID`,`sellerAddress`,`orderStatus`,`orderCreation`)
VALUES
  (1,9,1,"Shopee",5,"Ap #504-3075 Dolor Rd.",35,"Ap #373-1658 Enim. Street",0,'2022-11-01 01:03:14'),
  (2,10,2,"Amazon",1,"5081 Ante Road",31,"841-4609 Auctor, Road",2,'2022-11-09 09:47:15'),
  (3,5,1,"Shopee",2,"966-9198 Donec Avenue",37,"849-4529 Et, Ave",4,'2022-11-05 11:22:49'),
  (4,2,0,"Lazada",4,"Ap #681-1233 Non, Street",46,"5112 Nullam Rd.",1,'2022-11-04 12:18:30'),
  (5,4,2,"Amazon",3,"Ap #918-1431 Per St.",36,"173-4139 Curabitur Rd.",5,'2022-11-11 03:02:23');


INSERT INTO `order_activities` (`trackingID`,`merchantOrderID`,`orderStatus`,`orderStatusDatetime`,`deliveryManID`)
VALUES  
  (3,5,0,"2022-11-05 11:22:49",null),
  (3,5,1,"2022-11-06 12:29:50",15),
  (3,5,2,"2022-11-07 15:26:59",15),
  (3,5,3,"2021-11-09 10:21:06",15),
  (3,5,4,"2022-11-11 01:03:14",15);

INSERT INTO `order_status` (`orderStatusID`,`orderStatusDescription`)
VALUES
  (0,'unfulfilled'),
  (1,'accepted'),
  (2,'dispatched'),
  (3,'transit'),
  (4,'delivered'),
  (5,'failed');

INSERT INTO `merchants` (`merchantID`,`merchantName`)
VALUES
  (0,'Lazada'),
  (1,'Shopee'),
  (2,'Amazon');

-- not much data inserted into Users because need go through encryption. 

INSERT INTO `users` (`userID`, `email`, `password`, `role`)
VALUES 
  (15, 'driver1-ready2go@gmail.com', '$2a$06$AuxMcpN2oTUO0n9I.QPrBOt7I35AK/Z0tB6075P4Ee5YQQCyCw29y', 2),
  (1, 'admin', '$2a$06$JLRvhnWezd4TwfzNYU1ayO3sWihuKtGzNZ3yt54H2a/IL4jCt4yKG', 0),
  (2, 'ITstaff-shopee@shopee.com', '$2a$06$DAFm9xJX2FjYneAhPfEIseKMOvblZoFg39cyAB3wHaLn9M2p0/7zC', 1);