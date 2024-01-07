import { randomIntFromInterval } from "../lib/utils";
import { Product } from "../models/products/product";
import { Store } from "../models/store";
import * as readsync from "readline-sync";

export class CustomerServiceController {
    private _store: Store;

    constructor(_store: Store) {
        this._store = _store;
    }

    public sellItemToCustomer(): void {
        // customer is looking for an item
        // for now: random item from inventory.
        const randomInventoryKey = randomIntFromInterval(
            0,
            this._store.inventory.inventory.size
        );
        const wantedItem: Product | undefined =
            this._store.inventory.inventory.get(randomInventoryKey);
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
                        this._store.addGold(wantedItem.price);
                        this._store.inventory.removeFromInventory(wantedItem);
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
                            this._store.gold,
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
