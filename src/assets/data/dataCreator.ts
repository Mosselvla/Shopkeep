import { GameController } from "../../controllers/gameController";
import { Consumable, Effect } from "../../models/products/consumable";
import {
    MaterialType,
    Equipment,
    Color,
} from "../../models/products/equipment";
import { Stall } from "../../models/stall";
import { DataCreatorService } from "../../services/dataCreatorService";

export class DataCreator {
    createData(_gC: GameController) {
        // create products for store
        const eq1: Equipment = new Equipment();
        const eq2: Equipment = new Equipment();
        const eq3: Equipment = new Equipment();
        const eq4: Equipment = new Equipment();
        const eq5: Equipment = new Equipment();
        const eq6: Equipment = new Equipment();
        const csm1: Consumable = new Consumable();
        const csm2: Consumable = new Consumable();
        const csm3: Consumable = new Consumable();

        eq1.name = "Dagger";
        eq1.price = 250;
        eq1.condition = 95;
        eq1.material = MaterialType.Gold;

        eq2.name = "Helmet";
        eq2.price = 40;
        eq2.condition = 75;
        eq2.material = MaterialType.Iron;

        eq3.name = "Cloak";
        eq3.price = 150;
        eq3.condition = 90;
        eq3.material = MaterialType.Silk;
        eq3.color = Color.Black;

        eq4.name = "Mace";
        eq4.price = 60;
        eq4.condition = 70;
        eq4.material = MaterialType.Iron;

        eq5.name = "Pickaxe";
        eq5.price = 225;
        eq5.condition = 85;
        eq5.material = MaterialType.Titanium;
        eq5.color = Color.White;

        eq6.name = "Broadsword";
        eq6.price = 120;
        eq6.condition = 70;
        eq6.material = MaterialType.Iron;

        csm1.name = "Tincture";
        csm1.price = 175;
        csm1.effect = Effect.Strengthening;

        csm2.name = "Large Potion";
        csm2.price = 250;
        csm2.effect = Effect.Healing;

        csm3.name = "Coagulate";
        csm3.price = 115;
        csm3.effect = Effect.Wisening;

        // setup and fill inventory
        _gC.store.inventory.maxInventorySize = 10;
        _gC.store.inventory.placeInInventory(eq1);
        _gC.store.inventory.placeInInventory(eq2);
        _gC.store.inventory.placeInInventory(eq3);
        _gC.store.inventory.placeInInventory(eq4);
        _gC.store.inventory.placeInInventory(eq5);
        _gC.store.inventory.placeInInventory(eq6);
        _gC.store.inventory.placeInInventory(csm1);
        _gC.store.inventory.placeInInventory(csm2);
        _gC.store.inventory.placeInInventory(csm3);

        // const dataCreatorService: DataCreatorService = new DataCreatorService();
        // dataCreatorService.createData(_gC);
        // ^^^currently has a bug concerning json import, only occurs during compilation.
        // services/dataCreatorService.ts:2:27 - error TS2732: Cannot find module '../assets/data/testData.json'. Consider using '--resolveJsonModule' to import module with '.json' extension.

        // stock up on raw materials
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Wool,
            50
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Linen,
            30
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Silk,
            10
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Wood,
            100
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Copper,
            60
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Iron,
            40
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Steel,
            20
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Silver,
            10
        );
        _gC.store.workplace.materialPouch.addRawMaterials(MaterialType.Gold, 5);
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Titanium,
            2
        );
        _gC.store.workplace.materialPouch.addRawMaterials(
            MaterialType.Diamond,
            1
        );

        // setup and fill marketplace with stalls
        const _stall1: Stall = new Stall();
        _stall1.name = `Bogan's Iron Domain`;
        _stall1.gold = 300;
        _stall1.materialPouch.addRawMaterials(MaterialType.Copper, 230);
        _stall1.materialPouch.addRawMaterials(MaterialType.Iron, 500);
        _stall1.materialPouch.addRawMaterials(MaterialType.Steel, 135);
        _stall1.inventory.maxInventorySize = 100;

        const _stall2: Stall = new Stall();
        _stall2.name = `Pookipie the Quartermistress`;
        _stall2.gold = 680;
        _stall2.inventory.maxInventorySize = 100;

        const _stall2eq1 = new Equipment();
        _stall2eq1.name = "Frying Pan";
        _stall2eq1.color = Color.Magenta;
        _stall2eq1.price = 40;
        _stall2eq1.material = MaterialType.Steel;
        _stall2eq1.condition = 85;

        const _stall2eq2 = new Equipment();
        _stall2eq2.name = "Tickling Feather";
        _stall2eq2.color = Color.Pink;
        _stall2eq2.price = 30;
        _stall2eq2.material = MaterialType.Wool;
        _stall2eq2.condition = 40;

        _stall2.inventory.placeInInventory(_stall2eq1);
        _stall2.inventory.placeInInventory(_stall2eq2);

        _gC.marketController.addStall(_stall1);
        _gC.marketController.addStall(_stall2);
    }
}
