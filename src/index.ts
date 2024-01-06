import * as readline from "readline";
import { GameController } from "./controllers/gameController";

// controllers/services
const gameController: GameController = new GameController();

// setup game loop logic
const isRunning = true;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ask player their name
rl.question("What is your name?", (name) => {
  gameController.playerName = name;
  console.log("Welcome", name + "!");
});

// game loop

// while (isRunning) {}
