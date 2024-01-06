import { Inventory } from "./inventory";
import { Product } from "./product";

export class Store {
    private _gold: number;
    private _inventory: Inventory;

    constructor() {
        this._gold = 500;
        this._inventory = new Inventory();
    }

    public get gold(): number {
        return this._gold;
    }

    public set gold(_gold: number) {
        this.gold = _gold;
    }

    public get inventory(): Inventory {
        return this._inventory;
    }

    public addGold(amount: number): void {
        this.gold += amount;
    }
}
