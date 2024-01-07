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

    public handleAction(_action: string): void {
        switch (_action.toLowerCase()) {
            case "move":
                // move somewhere
                console.log("You move boi.");
                break;
            case "serve":
                if (this.store.inventory.inventory.size > 0) {
                    // serve a customer
                    console.log(
                        "You approach the first customer in line at the front of the shop."
                    );
                    this.serveCustomer();
                } else {
                    console.log(
                        'The customer looks around a little confused. "Uh, it looks a little empty around here... I will try to find my needs elsewhere."'
                    );
                    console.warn(
                        "---??? Your inventory is empty. Stock up to be able to sell items to customers! ???---"
                    );
                }
                break;
            case "end":
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
