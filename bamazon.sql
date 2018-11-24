-- Creates the "bamazon" database --
CREATE database bamazon_db;
-- Uses code to incorporate into bamazon --
USE bamazon_db;
-- Creates the table "products" within bamazon --
CREATE TABLE products (
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NULL,
price DECIMAL(10,4) NULL,
stock_quantity INTEGER(10) NOT NULL,
-- Sets id as this table's primary key which means all data contained within it will be unique --
 PRIMARY KEY (item_id)
);

select * from products;

-- Creates new rows containing data in all named columns -- (mock data for 10 different products)
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Electronics", 160.57, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canon Camera", "Electronics", 490.89, 570);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sun glasses", "Accessories", 120.99, 967);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Roku Smart TV", "Electronics", 279.99, 725);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Anne Klein Coat", "Clothing", 119.29, 1200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Watch", "Accessories", 255.30, 670);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple MacBook Air", "Electronics", 1900.00, 8900);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Combat Boots", "Clothing", 114.57, 1289);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Luggage Spectra", "Luggage and Travel Gear", 399.99, 9500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guess Tote", "Accessories", 98.99, 789);
