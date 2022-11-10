use ready2go;

INSERT INTO `orders` (`trackingID`,`orderID`,`merchantID`,`merchantName`,`customerID`,
`customerAddress`,`sellerID`,`sellerAddress`,`orderStatus`,`orderCreation`)
VALUES
  (1,9,1,"Shopee",5,"Ap #504-3075 Dolor Rd.",35,"Ap #373-1658 Enim. Street",0,'2022-11-01 01:03:14'),
  (2,10,2,"Amazon",1,"5081 Ante Road",31,"841-4609 Auctor, Road",2,'2022-11-09 09:47:15'),
  (3,5,1,"Shopee",2,"966-9198 Donec Avenue",37,"849-4529 Et, Ave",4,'2022-11-05 11:22:49'),
  (4,2,0,"Lazada",4,"Ap #681-1233 Non, Street",46,"5112 Nullam Rd.",1,'2022-11-04 12:18:30'),
  (5,4,2,"Amazon",3,"Ap #918-1431 Per St.",36,"173-4139 Curabitur Rd.",5,'2022-11-11 03:02:23');


INSERT INTO `order_activities` (`trackingID`,`orderID`,`orderStatus`,`orderStatusDatetime`,`deliveryManID`)
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

-- no data inserted into Users because need go through encryption.