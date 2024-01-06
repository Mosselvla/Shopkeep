import * as readsync from "readline-sync";
import { randomIntFromInterval } from "../lib/utils";
import { Player } from "../models/player";
import { Product } from "../models/products/product";
import { Store } from "../models/store";

export enum Action {
    Move,
}

export class GameController {
    private _isRunning: boolean;
    private _player: Player;
    private _store: Store;

    constructor() {
        this._isRunning = true;
        this._player = new Player();
        this._store = new Store();
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
                        "??? Your inventory is empty. Stock up to be able to sell items to customers! ???"
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
        // customer is looking for an item
        // for now: random item from inventory.
        const randomInventoryKey = randomIntFromInterval(
            0,
            this.store.inventory.inventory.size
        );
        const wantedItem: Product | undefined =
            this.store.inventory.inventory.get(randomInventoryKey);
        console.log(
            '"Yes, hello, I would like to buy the ' +
                wantedItem?.name +
                ". " +
                wantedItem?.price +
                ` gold pieces sounds good to me."`
        );
        if (wantedItem) {
            let hasDecided = false;
            while (!hasDecided) {
                const answer = readsync
                    .question(
                        "Sell the " +
                            wantedItem.name +
                            " for " +
                            wantedItem.price +
                            "? (Y/N)"
                    )
                    .toLowerCase();
                if (answer === "y" || answer == "n") {
                    hasDecided = true;
                    if (answer === "y") {
                        this.store.addGold(wantedItem.price);
                        this.store.inventory.removeFromInventory(wantedItem);
                        console.log(
                            "You place the",
                            wantedItem.name,
                            "on the counter for the customer and receive",
                            wantedItem.price,
                            "shiny gold pieces in return."
                        );
                        console.log(
                            'You thank the customer for their business. `"Likewise, friend. This will come in handy."`'
                        );
                        console.log("\n");
                        console.log(
                            "...Another satisfied customer! You now have",
                            this.store.gold,
                            "gold."
                        );
                    } else {
                        console.log(
                            `You decline. "Oh well. I'll have to look elsewhere. It's a fine piece."`
                        );
                    }
                }
            }
        }
    }
}
