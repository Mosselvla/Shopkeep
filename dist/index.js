"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readsync = require("readline-sync");
var gameController_1 = require("./controllers/gameController");
var dataCreator_1 = require("./assets/data/dataCreator");
// controllers/services
var gameController = new gameController_1.GameController();
var dataCreator = new dataCreator_1.DataCreator();
// create inventory data
dataCreator.createData(gameController);
// ask player their name
gameController.player.name = readsync.question("What is your name?");
console.log("\n_______           _______  _______  _        _______  _______  _______ \n(  ____ \\|\\     /|(  ___  )(  ____ )| \\    /\\(  ____ \\(  ____ \\(  ____ )\n| (    \\/| )   ( || (   ) || (    )||  \\  / /| (    \\/| (    \\/| (    )|\n| (_____ | (___) || |   | || (____)||  (_/ / | (__    | (__    | (____)|\n(_____  )|  ___  || |   | ||  _____)|   _ (  |  __)   |  __)   |  _____)\n      ) || (   ) || |   | || (      |  ( \\ \\ | (      | (      | (      \n/\\____) || )   ( || (___) || )      |  /  \\ \\| (____/\\| (____/\\| )      \n\\_______)|/     \\|(_______)|/       |_/    \\/(_______/(_______/|/       \n\n");
console.log("");
console.log("Welcome to Shopkeep, ", gameController.player.name, "!");
console.log("-------------------------------------------------------------------");
console.log("The day breaks as you unlock the front door and enter your shop. You are ready to have a good day of sales and fortune!");
// game loop
while (gameController.isRunning) {
    gameController.handleAction();
}
