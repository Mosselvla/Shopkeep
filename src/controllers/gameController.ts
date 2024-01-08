import * as readsync from "readline-sync";
import { Player } from "../models/player";
import { Store } from "../models/store";
import { CustomerServiceController } from "./customerServiceController";

export enum Action {
    Move,
}

export class GameController {
    private _isRunning: boolean;
    private _player: Player;
    private _store: Store;
    private _customerServiceController: CustomerServiceController;

    constructor() {
        this._isRunning = true;
        this._store = new Store();
        this._player = new Player();
        this._customerServiceController = new CustomerServiceController(
            this._store
        );
    }

    public get isRunning(): boolean {
        return this._isRunning;
    }

    public set isRunning(_isRunning) {
        this._isRunning = _isRunning;
    }

    public get player(): Player {
        return this._player;
    }

    public get store(): Store {
        return this._store;
    }

    public handleAction(): void {
        const actions: string[] = ["Move", "Serve", "End"];
        console.log("What would you like to do?");
        const actionIndex = readsync.keyInSelect(
            actions,
            "Choose an option by typing a number:"
        );
        console.clear();
        switch (actions[actionIndex]) {
            case actions[0]:
                // move somewhere
                console.log("You move boi.");
                break;
            case actions[1]:
                // serve a customer
                console.log(
                    "You approach the first customer in line at the front of the shop."
                );
                this.serveCustomer();
                break;
            case actions[2]:
                // end game
                this.isRunning = false;
                console.log("Goodbye!");
                break;
        }
    }

    public serveCustomer(): void {
        // different questions from different customer.
        // TODO: randomize customers and their questions.
        // this._customerServiceController.sellItemToCustomer();
        this._customerServiceController.repairItemForCustomer();
    }
}
