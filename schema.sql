CREATE DATABASE bamazon_db;
USE bamazon_db;


CREATE TABLE products
(
  id int
  AUTO_INCREMENT,
  product_name varchar
  (30) NOT NULL,
  department_name varchar(30),
  price int,
  stock_quantity int,
  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("unflattering blouse", "clothes", "20", "25");
  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("orthopedic boots", "clothes", "70", "13");
    INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("shiny suit", "clothes", "100", "14");
   INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("brazen bull", "decor", "15", "10");
  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("authentic lutheran thurible", "decor", "60", "1");
    INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("plastic flamingo", "decor", "16", "10");
      INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("tanning oil", "sundries", "5", "25");
      INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("gagaku vinyl LP", "sundries", "12", "1");
  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("unflattering blouse", "clothes", "20", "25");
    INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("clavicula salomonis", "books", "10", "20");
      INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("spinoza, ethics", "books", "17", "7");
