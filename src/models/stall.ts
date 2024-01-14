import { Inventory } from "./inventory";
import { MaterialPouch } from "./materialPouch";

export class Stall {
    private _name: string;
    private _gold: number;
    private _inventory: Inventory;
    private _materialPouch: MaterialPouch;

    constructor() {
        this._name = "";
        this._gold = 0;
        this._inventory = new Inventory();
        this._materialPouch = new MaterialPouch();
    }

    public get name(): string {
        return this._name;
    }

    public set name(_name: string) {
        this._name = _name;
    }

    public get gold(): number {
        return this._gold;
    }

    public set gold(_gold: number) {
        this._gold = _gold;
    }

    public get inventory(): Inventory {
        return this._inventory;
    }

    public get materialPouch(): MaterialPouch {
        return this._materialPouch;
    }
}
