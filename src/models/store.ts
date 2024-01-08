import { Inventory } from "./inventory";
import { Workplace } from "./workplace";

export class Store {
    private _gold: number;
    private _inventory: Inventory;
    private _workplace: Workplace;

    constructor() {
        this._gold = 500;
        this._inventory = new Inventory();
        this._workplace = new Workplace();
    }

    public get gold(): number {
        return this._gold;
    }

    public get inventory(): Inventory {
        return this._inventory;
    }

    public get workplace(): Workplace {
        return this._workplace;
    }

    public addGold(_amount: number): void {
        this._gold = this._gold + _amount;
    }

    public subtractGold(_amount: number): void {
        this._gold = this.gold - _amount;
    }
}
