CREATE TABLE BUYERS(
   id       CHAR(36)    NOT NULL UNIQUE,
   email    CHAR(256)   NOT NULL,
   password CHAR(60)    NOT NULL
);