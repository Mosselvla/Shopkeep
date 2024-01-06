"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var gameController_1 = require("./controllers/gameController");
// controllers/services
var gameController = new gameController_1.GameController();
// setup game loop logic
var isRunning = true;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// ask player their name
rl.question("What is your name?", function (name) {
    gameController.playerName = name;
    console.log("Welcome", name, "!");
});
// game loop
// while (isRunning) {}
