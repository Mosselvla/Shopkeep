import { Inventory } from "./inventory";
import { Workbench } from "./workbench";

export class Store {
    private _gold: number;
    private _inventory: Inventory;
    private _workbench: Workbench;

    constructor() {
        this._gold = 500;
        this._inventory = new Inventory();
        this._workbench = new Workbench();
    }

    public get workbench(): Workbench {
        return this._workbench;
    }

    public get gold(): number {
        return this._gold;
    }

    public get inventory(): Inventory {
        return this._inventory;
    }

    public addGold(_amount: number): void {
        this._gold = this._gold + _amount;
    }

    public subtractGold(_amount: number): void {
        this._gold = this.gold - _amount;
    }
}
