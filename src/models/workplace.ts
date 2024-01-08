import { Material } from "./products/equipment";
import { Workbench } from "./workbench";

export class Workplace {
    private _workbench: Workbench;
    private _rawMaterials: Map<Material, number>;

    constructor() {
        this._workbench = new Workbench();
        this._rawMaterials = new Map<Material, number>();
    }

    public get workbench(): Workbench {
        return this._workbench;
    }

    public get rawMaterials(): Map<Material, number> {
        return this._rawMaterials;
    }

    public addRawMaterials(_materialType: Material, _amount: number): void {
        const _rawMaterial = this._rawMaterials.get(_materialType);
        if (_rawMaterial) {
            // material already exists
            this._rawMaterials.set(_materialType, _rawMaterial + _amount);
        } else {
            // material does not yet exist
            this._rawMaterials.set(_materialType, _amount);
        }
    }

    public removeRawMaterials(_materialType: Material, _amount: number): void {
        const _rawMaterial = this._rawMaterials.get(_materialType);
        if (_rawMaterial) {
            // material already exists
            if (_rawMaterial - _amount < 0) {
                // prevent negative number, go to zero
                this._rawMaterials.set(_materialType, 0);
            } else {
                this._rawMaterials.set(_materialType, _rawMaterial - _amount);
            }
        }
        // no else, cannot remove what doesnt exist
        // "van 'n kale kip kende nie plukke" -Barack Obama
    }
}
