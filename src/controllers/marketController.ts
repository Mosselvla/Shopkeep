import * as readsync from "readline-sync";
import { Stall } from "../models/stall";
import { StallController } from "./stallController";

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
                console.log(
                    "You walk back to the store and get settled, ready to continue your work."
                );
            } else {
                console.clear();
                const stallController: StallController = new StallController(
                    this._stalls[stallIndex]
                );
                stallController.visitStall();
            }
        }
    }
}
