import * as readline from "readline";
import { GameController } from "./controllers/gameController";
import { Product } from "./models/product";

// controllers/services
const gameController: GameController = new GameController();

// setup game loop logic
const isRunning = true;

const rl = readline.createInterface({
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

const product1: Product = new Product();
const product2: Product = new Product();
const product3: Product = new Product();
const product4: Product = new Product();
const product5: Product = new Product();
const product6: Product = new Product();
const product7: Product = new Product();
const product8: Product = new Product();
const product9: Product = new Product();
const product10: Product = new Product();
const product11: Product = new Product();

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
