var mysql = require('mysql');


var inquirer = require("inquirer");

const Confirm = require('prompt-confirm');





var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "bamazonDB"
});








connection.connect(function (err) {
  if (err) {

    console.error('error connecting: ' + err);
    return;
  }

  console.log("                     ");
  console.log('Welcome to Bamazon!');
  console.log("====================");



  displayItems();

});




function displayItems() {
  // query the database for all items available
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.log("\nAvailable products...\n");
    for (var i = 0; i < results.length; i++) {

      

      console.log(results[i].item_id + ' || ' + results[i].product_name + ' || ' + results[i].department_name + ' || ' + '$' + results[i].price + ' || ' + results[i].stock_quantity + ' units' + '\n');
    }
    loadprompt(results);
  })
}





function loadprompt() {


  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID number of the item you would you like to purchase?"

      }
    ])
    .then(function (val) {

      var userChoice = parseInt(val.choice);



      unitCheck(userChoice);

    })

}


function unitCheck(userChoice) {



  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;



    for (var i = 0; i < results.length; i++) {

      if (userChoice === results[i].item_id) {

        var product = results[i].product_name;

        var productPrice = results[i].price;

        var productAmount = results[i].stock_quantity;

        console.log(product + "  $" + productPrice);

        loadAmount(productAmount, product, productPrice);


      }
    }

  })

}




  function loadAmount(productAmount, product, productPrice) {

    inquirer
      .prompt([
        {
          type: "input",
          name: "amount",
          message: "How many would you like to purchase?"

        }
      ])
      .then(function (val) {

       

        var userQuantity = parseInt(val.amount);

        var purchasePrice= productPrice * userQuantity;

       productAmount;

       console.log("You chose " + userQuantity + " " + product + "'s for $" + purchasePrice );
      


       if(userQuantity > productAmount){

          

            console.log("\nInsufficient quantity!");

            console.log("You chose " + userQuantity + ". There are: " + productAmount + " available.");

            loadAmount(productAmount);

          } 
else{          

         

            connection.query("UPDATE products SET stock_quantity = stock_quantity - ?", [userQuantity],

            function (err) { 

        

              var updatedAmount= productAmount-userQuantity; 
              
              console.log("\nSuccessfully purchased " + userQuantity + " " + product + "'s! \nYour Total: $" + purchasePrice );

              console.log("There are: " + updatedAmount + " left");
            



            
        }
          
        )





 }
  })
      

}









