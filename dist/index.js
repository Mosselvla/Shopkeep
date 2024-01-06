"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var gameController_1 = require("./controllers/gameController");
var product_1 = require("./models/product");
// controllers/services
var gameController = new gameController_1.GameController();
// setup game loop logic
var isRunning = true;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// ask player their name
// rl.question("What is your name?", (name) => {
//     gameController.player.name = name;
//     console.log("Welcome", name + "!");
//     rl.close();
// });
// game loop
// while (isRunning) {}
var product1 = new product_1.Product();
var product2 = new product_1.Product();
var product3 = new product_1.Product();
var product4 = new product_1.Product();
var product5 = new product_1.Product();
var product6 = new product_1.Product();
var product7 = new product_1.Product();
var product8 = new product_1.Product();
var product9 = new product_1.Product();
var product10 = new product_1.Product();
var product11 = new product_1.Product();
product1.name = "Iron Dagger";
product1.price = 20;
product2.name = "Healing potion (Small)";
product2.price = 10;
product3.name = "Iron Broadsword";
product3.price = 100;
product4.name = "Iron Mace";
product4.price = 70;
product5.name = "Iron Two-handed Sword";
product5.price = 130;
product6.name = "Steel Broadsword";
product6.price = 120;
product7.name = "Steel Two-handed Sword";
product7.price = 150;
product7.name = "Black Cloak";
product7.price = 25;
product8.name = "Iron Helmet";
product8.price = 40;
product9.name = "Iron Shield";
product9.price = 75;
product10.name = "Steel Helmet";
product10.price = 80;
product10.name = "Bandolier";
product10.price = 55;
product11.name = "Jester's Shoes";
product11.price = 60;
gameController.store.inventory.placeInInventory(product1);
gameController.store.inventory.placeInInventory(product2);
gameController.store.inventory.placeInInventory(product3);
gameController.store.inventory.placeInInventory(product4);
gameController.store.inventory.placeInInventory(product5);
gameController.store.inventory.placeInInventory(product6);
gameController.store.inventory.placeInInventory(product7);
gameController.store.inventory.placeInInventory(product8);
gameController.store.inventory.placeInInventory(product9);
gameController.store.inventory.placeInInventory(product10);
gameController.store.inventory.placeInInventory(product11);
console.log(gameController.store.inventory);
