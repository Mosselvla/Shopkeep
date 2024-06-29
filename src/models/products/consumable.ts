import { Product } from "./product";

export enum Effect {
    Healing,
    Strengthening,
    Fortifying,
    Wisening,
    Sleeping,
    Raging,
}

export class Consumable extends Product {
    private _effect: Effect;

    constructor(name?: string, price?: number, effect?: number) {
        super();
        this._effect = Effect.Healing;
        if (name) this.name = name;
        if (price) this.price = price;
        if (effect) this._effect = effect;
    }

    public get effect(): Effect {
        return this._effect;
    }

    public set effect(_effect: Effect) {
        this._effect = _effect;
    }

    public displayName(): string {
        return this.name + " of " + this.effect;
    }
}
