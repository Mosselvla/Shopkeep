import { Product } from "./product";

export enum MaterialType {
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
    Pink,
    Yellow,
    Blue,
    Red,
    White,
    Black,
    Gray,
}

export class Equipment extends Product {
    private _material: MaterialType;
    private _condition: number;
    private _color?: Color;

    constructor(
        name?: string,
        price?: number,
        condition?: number,
        material?: number,
        color?: number
    ) {
        super();
        this._material = MaterialType.Wood;
        this._condition = 100;
        if (name) this.name = name;
        if (price) this.price = price;
        if (condition) this._condition = condition;
        if (material) this._material = material;
        if (color) this._color = color;
    }

    public get material(): MaterialType {
        return this._material;
    }

    public set material(_material: MaterialType) {
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
