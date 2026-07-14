--delete if there is existing tables
DROP TABLE IF EXISTS orders_products;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username TEXT NOT NULL,
password TEXT NOT NULL,
UNIQUE (username)
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
date DATE NOT NULL,
note TEXT,
user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE products (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT NOT NULL,
price DECIMAL NOT NULL CHECK (price > 0)
);

CREATE TABLE orders_products (
order_id INTEGER NOT NULL REFERENCES orders(id) ON DElETE CASCADE,
product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
quantity INTEGER NOT NULL CHECK(quantity > 0),
PRIMARY KEY(order_id, product_id)
);