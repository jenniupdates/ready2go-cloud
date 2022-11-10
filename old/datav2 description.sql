DROP DATABASE IF EXISTS ready2go;
CREATE DATABASE ready2go;
use ready2go;

-- table data format expected to be produced from custoemrs like Shopee
CREATE TABLE IF NOT EXISTS order (
    trackingID int not null AUTO_INCREMENT, -- generated during data import?
    orderID int not null, -- ensure that this is unique in db    
    merchantID int not null,
    merchantName varchar(100) not null,
    customerID int not null,
    customerAddress varchar(200) not null,
    sellerID int not null,
    sellerAddress varchar(200) not null,
    orderStatus int not null default 0, -- default 0: status = unfulfilled
    orderCreation datetime not null, 
    currentLocation varchar(200), -- optional
    PRIMARY KEY (trackingID)
);

CREATE TABLE IF NOT EXISTS order_activities (
    trackingID int not null,
    orderID int not null,
    orderStatus int not null,
    orderDatetime datetime not null,
    currentLocation varchar(200) not null,
    nextDestination varchar(200) not null,
    deliveryManID int, -- his userID
    PRIMARY KEY (trackingID, orderID, orderStatus),
    FOREIGN KEY (trackingID, orderID, orderStatus) REFERENCES order(trackingID, orderID, orderStatus)
);

CREATE TABLE IF NOT EXISTS order_status (
    orderStatusID int not null,
    orderStatusDescription varchar(60) not null, -- unfulfilled, dispatched, in transit, delivered, rejected
    PRIMARY KEY (orderStatusID)
);

CREATE TABLE IF NOT EXISTS merchants (
    merchantID int not null, -- his userID
    merchantName varchar(100) not null,
    PRIMARY KEY (merchantID)
);

CREATE TABLE IF NOT EXISTS users (
    userID int not null,
    password varchar(64) not null, -- will be encrypted
    email varchar(100) not null,
    role int not null, -- 0:IT admin, 1: merchants, 2: drivers (?)
    PRIMARY KEY (userID)
);

