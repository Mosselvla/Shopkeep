"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var gameController_1 = require("./controllers/gameController");
var dataCreator_1 = require("./assets/data/dataCreator");
// controllers/services
var gameController = new gameController_1.GameController();
var dataCreator = new dataCreator_1.DataCreator();
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
dataCreator.createData(gameController.store.inventory);
console.log(gameController.store.inventory);
