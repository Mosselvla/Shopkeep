import { Product } from "./product";

export enum Material {
    Wool,
    Linen,
    Silk,
    Wood,
    Copper,
    Iron,
    Steel,
    Silver,
    Gold,
    Titanium,
    Diamond,
}

export enum Color {
    Green,
    Orange,
    Magenta,
    Yellow,
    Blue,
    Red,
    White,
    Black,
    Gray,
}

export class Equipment extends Product {
    private _material: Material;
    private _condition: number;
    private _color?: Color;

    constructor() {
        super();
        this._material = Material.Wood;
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

    public get color(): Color | undefined {
        return this.color;
    }

    public set color(_color: Color) {
        this._color = _color;
    }

    public get displayName(): string {
        const color = this._color ? this._color.toString() : "";
        return color + "" + this.material.toString() + " " + this.name;
    }
}
