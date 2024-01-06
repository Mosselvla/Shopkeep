import * as readline from "readline";
import { GameController } from "./controllers/gameController";
import { DataCreator } from "./assets/data/dataCreator";
import { Equipment } from "./models/products/equipment";
import { Product } from "./models/products/product";

// controllers/services
const gameController: GameController = new GameController();
const dataCreator: DataCreator = new DataCreator();

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
dataCreator.createData(gameController.store.inventory);
console.log(gameController.store.inventory);
