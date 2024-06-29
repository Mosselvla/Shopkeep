import { GameController } from "../controllers/gameController";
// import * as testData from "../assets/data/testData.json";
import { Equipment } from "../models/products/equipment";
import { Consumable } from "../models/products/consumable";

export class DataCreatorService {
    public createData(_gC: GameController) {
        // currently disabled due to bug concerning JSON import paths and JS/TS compilation bullshit.
        // _gC.store.inventory.maxInventorySize = 10;
        // testData.equipment.forEach((eq) => {
        //     _gC.store.inventory.placeInInventory(
        //         new Equipment(
        //             eq.name,
        //             eq.price,
        //             eq.condition,
        //             eq.material,
        //             eq.color
        //         )
        //     );
        // });
        // testData.consumables.forEach((csm) => {
        //     _gC.store.inventory.placeInInventory(
        //         new Consumable(csm.name, csm.price, csm.effect)
        //     );
        // });
    }
}
