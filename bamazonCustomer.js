var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"password",
	database:"bamazon_db"
});

connection.connect(function(err){
	if(err)throw err;
});

var pTable = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["id", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,35,10,10,10]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
        console.log(displayTable.toString());

		purchase();
	});
}

function purchase(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Input the ID of the item you would like to purchase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"Input the quantity you would like to purchase",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, quantityNeeded);
 });
};

function purchaseOrder(ID, amtNeeded){
	connection.query('Select * FROM products WHERE id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(amtNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * amtNeeded;
			console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is $" + totalCost + ", what a steal!" );
            
			
		} else{
			console.log("Insufficient quantity! Can you not read? What kind of weirdo wants " + amtNeeded + " " + res[0].product_name + "s anyways?");
		};
		pTable();
	});
};

pTable(); 

