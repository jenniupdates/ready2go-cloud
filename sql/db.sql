DROP DATABASE IF EXISTS ready2go;
CREATE DATABASE ready2go;
use ready2go;

CREATE TABLE IF NOT EXISTS orders (
    trackingID varchar(64) not null, 
    merchantorderID int not null,
    merchantID int not null,
    merchantName varchar(100) not null,
    customerID int not null,
    customerAddress varchar(200) not null,
    sellerID int not null,
    sellerAddress varchar(200) not null,
    orderStatus int not null default 0, 
    orderCreation datetime not null, 
    PRIMARY KEY (trackingID)
);

CREATE TABLE IF NOT EXISTS order_activities (
    trackingID varchar(64) not null,
    merchantorderID int not null,
    orderStatus int not null,
    orderStatusDatetime datetime not null,
    deliveryManID int, 
    PRIMARY KEY (trackingID, orderID, orderStatus),
    FOREIGN KEY (trackingID) REFERENCES orders (trackingID)
);

CREATE TABLE IF NOT EXISTS order_status (
    orderStatusID int not null,
    orderStatusDescription varchar(60) not null,
    PRIMARY KEY (orderStatusID)
);

CREATE TABLE IF NOT EXISTS merchants (
    merchantID int not null, 
    merchantName varchar(100) not null,
    PRIMARY KEY (merchantID)
);

CREATE TABLE IF NOT EXISTS users (
    userID int not null,
    email varchar(100) not null,
    password varchar(64) not null, 
    role int not null, 
    PRIMARY KEY (userID)
);

