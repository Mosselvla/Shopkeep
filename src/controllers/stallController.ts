import * as readsync from "readline-sync";
import { MaterialType } from "../models/products/equipment";
import { Stall } from "../models/stall";

export class StallController {
    private _stall: Stall;
    private _visitingStall = true;

    private _stallOptions: string[] = ["Buy products", "Buy materials"];

    constructor(_stall: Stall) {
        this._stall = _stall;
    }

    public visitStall() {
        console.log("You walk up to", this._stall.name + ".");

        while (this._visitingStall) {
            this.logStallInventory();
            const stallOptionIndex = readsync.keyInSelect(
                this._stallOptions,
                "What would you like to do?"
            );
            if (stallOptionIndex === -1) {
                this._visitingStall = false;
                console.clear();
                console.log("You walk away from the stall.");
            } else if (stallOptionIndex === 1) {
                // buy material
                console.clear();
                console.log("Which material would you like to buy?");
                const _availableMaterials = this._stall.materialPouch.getAvailableMaterials();
            }
        }
    }

    public logStallInventory() {
        console.log("They sell the following:");
        if (this._stall.inventory.inventory.size > 0) {
            console.log("Products");
            console.log("---------------------------------");
            console.log(this._stall.inventory.inventory.entries());
        }
        console.log("\n");
        if (this._stall.materialPouch.hasMaterials()) {
            console.log("Materials");
            console.log("---------------------------------");
            const _availableMaterials =
                this._stall.materialPouch.getAvailableMaterials();
            for (let i = 0; i < _availableMaterials.length; i++) {
                const element = _availableMaterials[i];
                if (element[0] && element[1]) {
                    console.log(MaterialType[element[0]], ":", element[1]);
                }
                // TODO: re-use some of this logic to create the next step: buying a material.
                // use availableMaterials array in readsync.keyInSelect() to show them as options
                // then prompt user to ask how much they would like to buy of the material
                // then calculate cost and ask user if they would like to confirm the purchase
                    // if they cannot afford the amount, inform the user
                    // if the store stock is lower than requested amount, sell max
                        // or: use some standard options (1, 5, 10, 20, 50, 100, 250, 500 etc.)
            }
        }
        console.log("\n");
    }
}
