export class Product {
    private _key: number | null;
    private _name: string;
    private _price: number;

    constructor() {
        this._key = null;
        this._name = "";
        this._price = 0;
    }

    public get key(): number | null {
        return this._key;
    }

    public set key(_key: number | null) {
        this._key = _key;
    }

    public get name(): string {
        return this._name;
    }

    public set name(_name: string) {
        this._name = _name;
    }

    public get price(): number {
        return this._price;
    }

    public set price(_price: number) {
        this._price = _price;
    }
}
