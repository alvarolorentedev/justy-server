CREATE TABLE BIDDERS(
   id       CHAR(36)    NOT NULL PRIMARY KEY,
   email    CHAR(256)   NOT NULL UNIQUE,
   password CHAR(60)    NOT NULL,
   isTest   INTEGER     NOT NULL DEFAULT 0
);