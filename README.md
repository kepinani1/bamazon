# bamazon

Objective: Using sql, and node, create a 'bamazon' app which produces prompts upon which user input is recorded/stored. The app should ask the user: ID of the product, and quantity of product(s). The app should also be able to determine if quantity in stock is enough to fulfill user demand. 

For this application, I used sql to create a table 'products'. This table has a listing of 10 unique ('mock') products with information detailing quantity and price. Additionally, I created javascript code that would display products from this table once the user inputs 'SHOP' into the node terminal. A series of inquirer prompts should also appear as a result of the user choosing 'SHOP.'

Challenges: A table of products appears once the user inputs 'SHOP.' However, once the user inputs 'SHOP,' the other inquirer prompts (i.e., 'What is the ID of the product you would like to buy?') do not appear. I will have to work on fixing/resolving this issue for the future.
