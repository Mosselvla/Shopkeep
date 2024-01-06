import * as readsync from "readline-sync";
import { GameController } from "./controllers/gameController";
import { DataCreator } from "./assets/data/dataCreator";

// controllers/services
const gameController: GameController = new GameController();
const dataCreator: DataCreator = new DataCreator();

// create inventory data
dataCreator.createData(gameController.store.inventory);

// ask player their name
gameController.player.name = readsync.question("What is your name?");

console.log(`
_______           _______  _______  _        _______  _______  _______ 
(  ____ \|\     /|(  ___  )(  ____ )| \    /\(  ____ \(  ____ \(  ____ )
| (    \/| )   ( || (   ) || (    )||  \  / /| (    \/| (    \/| (    )|
| (_____ | (___) || |   | || (____)||  (_/ / | (__    | (__    | (____)|
(_____  )|  ___  || |   | ||  _____)|   _ (  |  __)   |  __)   |  _____)
      ) || (   ) || |   | || (      |  ( \ \ | (      | (      | (      
/\____) || )   ( || (___) || )      |  /  \ \| (____/\| (____/\| )      
\_______)|/     \|(_______)|/       |_/    \/(_______/(_______/|/       

`);
console.log("");
console.log("Welcome to Shopkeep, ", gameController.player.name, "!");
console.log(
    "-------------------------------------------------------------------"
);
console.log(
    "The day breaks as you unlock the front door and enter your shop. You are ready to have a good day of sales and fortune!"
);

// game loop
while (gameController.isRunning) {
    const action = readsync.question("What would you like to do?");
    gameController.handleAction(action);
}
