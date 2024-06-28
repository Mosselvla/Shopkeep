import * as readsync from "readline-sync";
import { Stall } from "../models/stall";
import { MaterialType } from "../models/products/equipment";

export class MarketController {
    private _stalls: Stall[];
    private _isAtMarket = true;

    constructor() {
        this._stalls = [];
    }

    public get stalls(): Stall[] {
        return this._stalls;
    }

    public addStall(_stall: Stall): void {
        this._stalls.push(_stall);
    }

    public visitMarket(): void {
        this._isAtMarket = true;
        console.clear();
        console.log(
            "It seems that there are",
            this._stalls.length,
            "stalls in town today."
        );
        while (this._isAtMarket) {
            console.log("Which stall would you like to visit?");
            const stallNames: string[] = [];
            for (let index = 0; index < this._stalls.length; index++) {
                const stall = this._stalls[index];
                stallNames.push(stall.name);
            }
            const stallIndex = readsync.keyInSelect(
                stallNames,
                "Choose a stall to visit by typing a number:"
            );
            if (stallIndex === -1) {
                this._isAtMarket = false;
                console.clear();
                console.log('You walk back to the store and get settled, ready to continue your work.');
            } else {
                this.visitStall(this._stalls[stallIndex]);
            }
        }
    }

    public visitStall(_stall: Stall) {
        console.log("You walk up to", _stall.name, ".");
        console.log("They sell the following things:");
        if (_stall.inventory.inventory.size > 0) {
            console.log("Products for sale:");
            console.log(_stall.inventory.inventory.entries());
        }
        console.log("\n");
        if (_stall.materialPouch.hasMaterials()) {
            console.log("Materials for sale:");
            // TODO: find a way to list all materials from map
            // One way: just get() all materialTypes by looping over MaterialType enum
            // Then only show those with value higher than 0
            console.log(
                "Copper:",
                _stall.materialPouch.getMaterialCount(MaterialType.Copper)
            );
            console.log(
                "Iron:",
                _stall.materialPouch.getMaterialCount(MaterialType.Iron)
            );
            console.log(
                "Steel:",
                _stall.materialPouch.getMaterialCount(MaterialType.Steel)
            );
        }
    }
}
