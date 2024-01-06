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

    public get gold(): number {
        return this._gold;
    }

    public set gold(_gold: number) {
        this.gold = _gold;
    }

    public get inventory(): Inventory {
        return this._inventory;
    }

    public addGold(_amount: number): void {
        this.gold += _amount;
    }

    public subtractGold(_amount: number): void {
        this.gold -= _amount;
    }
}
