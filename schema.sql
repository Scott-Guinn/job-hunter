
-- CREATE DATABASE jobhunter;

\c jobhunter;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  points INT NULL
)

-- DROP TABLE IF EXISTS friends;
-- CREATE TABLE friends(
--   userID int
--   CONSTRAINT (fk_userID)
--   FOREIGN KEY (userID)
--     REFERENCES users(id)
--     ON DELETE CASCADE
-- )