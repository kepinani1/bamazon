var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the below functions after the connection is made to prompt the user
    start();
});
// function which prompts the user for what action they should take
function start() {
    inquirer.prompt({
        name: "shopOrnot",
        type: "input",
        message: "Would you like to [SHOP] or [NOT SHOP] at Bamazon?",
        choices: ["SHOP", "NOT SHOP"]
    })
        .then(function (answer) {
            // based on their answer, either call the shop or not shop
            if (answer.shopOrnot.toUpperCase() === "SHOP") {
                queryDisplay();
                //I tried to launch queryProduct here once the user selects the 'SHOP' option
                // queryProduct();
            }
            else {
                end();
                console.log("Bye. Please come again.");
            }
        });
}
// function which prompts the user for what action they should take
function queryDisplay() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log('Welcome to Bamazon.Let the shopping begin.');

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            console.log("-----------------------------------");
        }
    }
    )}
// function queryProduct(){
    // Created a series of questions
inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the ID of the product you would like to buy?",
      validate: function (value) {
                        if (isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                        {
                            type: "input",
                            name: "quantity",
                            message: "How many units of the product would you like to buy?",
                            validate: function (value) {
                                if (isNaN(value)) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }
                        },
                    ]).then(function (answer) {
                        var productId = (answer.id) - 1;
                        var productQuantity = parseInt(answer.quantity);
                        //Based on price*quantity=Total cost formula (fixing number format to 3 digits as the standard (i.e., some quantity are in the hundreds so user can choose such high quantities.))
                        var totalCost = parseFloat(((res[productQuantity].price) * productQuantity).toFixed(3));

                        //review if product quantity is enough using unique product id
                        if (res[productId].stock_quantity >= productQuantity) {
                            //products table will be updated according to if there is the given quantity. Stock quantity will decrease by the product quantity requested by the user.
                            connection.query("UPDATE products SET ? WHERE ?", [
                                { stock_quantity: (res[productId].stock_quantity - productQuantity) },
                                { item_id: answer.id }
                            ], function (error) {
                                if (error) throw err;
                                console.log("Checkout confirmed. Your product order has been placed, and total cost is: " + totalCost.toFixed(3));
                                start();
                            }
                            );
                        }
                        else {
                            // There is insufficient quantity message.
                            console.log("Quantity chosen is insufficient. Try again...");
                            end();
                        }
                    });