CREATE database  bamazonDB;

USE bamazonDB;

create TABLE products(
	item_id INT auto_increment NOT NULL,
    product_name varchar(30),
    department_name varchar(30),
    price integer(30),
    stock_quantity integer(30),
    primary key (item_id)
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shout-stain remover", "Cleaning Products", 400, 100);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Twister", "Toys and Games", 1700, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ipod", "Electronics", 5000, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tooth Brush", "Personal Hygine", 400, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plate Set", "Household", 1900, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mens Shoes", "Clothing", 2800, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bob Marley: Legend", "Music", 900, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Independence Day", "Movies", 1000, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paint Set", "Arts and Crafts", 1200, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shovel", "Home and Garden", 700, 15);
