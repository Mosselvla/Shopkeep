import { Product } from "./products/product";

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

    public placeInInventory(_product: Product): boolean {
        if (!_product.key) {
            if (this._inventory.size === 0) {
                // inventory is empty
                // freely place the item
                this._inventory.set(0, _product);
                _product.key = 0;
                console.log(
                    "placement success!",
                    _product.name,
                    "was placed with key",
                    _product.key
                );
                return true;
            } else {
                if (this._inventory.size < this._maxInventorySize) {
                    // room in inventory
                    // place product in first available spot
                    for (let i = 0; i < this._inventory.size + 1; i++) {
                        if (!this._inventory.get(i)) {
                            // spot is free, place product in inventory
                            this._inventory.set(i, _product);
                            _product.key = i;
                            console.log(
                                "placement success!",
                                _product.name,
                                "was placed with key",
                                _product.key
                            );
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
