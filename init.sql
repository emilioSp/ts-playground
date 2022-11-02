SELECT 'CREATE DATABASE my_table'
WHERE NOT EXISTS (SELECT * FROM pg_database WHERE datname = 'my_table');

CREATE TABLE IF NOT EXISTS accounts (
	user_id serial PRIMARY KEY,
	name VARCHAR UNIQUE NOT NULL,
	email VARCHAR UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS company (
	company_id serial PRIMARY KEY,
	name VARCHAR NOT NULL,
	address VARCHAR NOT NULL
);

INSERT INTO accounts (name, email) VALUES 
('Emilio', 'emilio@tiscali.it'), 
('Crina', 'crina@tiscali.it'),
('Grazia', 'grazia@tiscali.it');

INSERT INTO company (name, address) VALUES 
('Translated', 'via indonesia 23'),
('Pazzeschissimo', 'via budal 43'),
('ERDIR', 'via diritto 21');