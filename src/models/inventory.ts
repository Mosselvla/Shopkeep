import { Product } from "./product";

export class Inventory {
    private _inventory: Map<number, Product>;
    private _maxInventorySize: number;

    constructor() {
        this._inventory = new Map<number, Product>();
        this._maxInventorySize = 10;
    }

    public get inventory(): Map<number, Product> {
        return this._inventory;
    }

    public placeInInventory(product: Product): boolean {
        if (!product.key) {
            if (this._inventory.size === 0) {
                this._inventory.set(0, product);
                product.key = 0;
                console.log(
                    "placement success!",
                    product.name,
                    "was placed with key",
                    product.key
                );
                console.log("current inventory: ");
                console.log(this._inventory);
                return true;
            } else {
                if (this._inventory.size < this._maxInventorySize) {
                    // room in inventory
                    // place product in first available spot
                    for (let i = 0; i < this._inventory.size + 1; i++) {
                        if (!this._inventory.get(i)) {
                            // spot is free, place product in inventory
                            this._inventory.set(i, product);
                            product.key = i;
                            console.log(
                                "placement success!",
                                product.name,
                                "was placed with key",
                                product.key
                            );
                            console.log("current inventory: ");
                            console.log(this._inventory);
                            break;
                        }
                    }
                    return true;
                } else {
                    // no room in inventory
                    console.log("placement failed: no room left in inventory!");
                    return false;
                }
            }
        }
        // product with key already exists in inventory
        console.log("placement failed: product with key already exists!");
        return false;
    }

    public removeFromInventory(product: Product): void {
        if (product.key) {
            this._inventory.delete(product.key);
            product.key = null;
        }
    }
}
