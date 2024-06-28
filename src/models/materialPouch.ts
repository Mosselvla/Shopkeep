import { MaterialType } from "./products/equipment";

export class MaterialPouch {
    private _rawMaterials: Map<MaterialType, number>;

    constructor() {
        this._rawMaterials = new Map<MaterialType, number>();
    }

    public hasMaterials(): boolean {
        return this._rawMaterials.size > 0;
    }

    public getMaterialCount(_material: MaterialType): number {
        const result = this._rawMaterials.get(_material);
        return result ? result : 0;
    }

    public getAvailableMaterials() {
        const _rawMaterialEntriesArray = Array.from(
            this._rawMaterials.entries()
        );
        return _rawMaterialEntriesArray.filter(([_key, value]) => value !== 0);
    }

    public addRawMaterials(_materialType: MaterialType, _amount: number): void {
        const _rawMaterial = this._rawMaterials.get(_materialType);
        if (_rawMaterial) {
            // material already exists
            this._rawMaterials.set(_materialType, _rawMaterial + _amount);
        } else {
            // material does not yet exist
            this._rawMaterials.set(_materialType, _amount);
        }
    }

    public removeRawMaterials(
        _materialType: MaterialType,
        _amount: number
    ): void {
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
