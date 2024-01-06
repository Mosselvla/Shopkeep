import { Product } from "./product";

enum Material {
    WOOD,
    COPPER,
    IRON,
    STEEL,
    SILVER,
    GOLD,
    TITANIUM,
    DIAMOND,
}

export class Weapon extends Product {
    private _material: Material;
    private _condition: number;

    constructor() {
        super();
        this._material = Material.WOOD;
        this._condition = 100;
    }

    public get material(): Material {
        return this._material;
    }

    public set material(_material: Material) {
        this._material = _material;
    }

    public get condition(): number {
        return this._condition;
    }

    public set condition(_condition: number) {
        this._condition = _condition;
    }
}
