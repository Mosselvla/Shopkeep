import { Inventory } from "../../models/inventory";
import { Consumable, Effect } from "../../models/products/consumable";
import { Material, Equipment, Color } from "../../models/products/equipment";

export class DataCreator {
    createData(_inventory: Inventory) {
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
        eq1.material = Material.Gold;

        eq2.name = "Helmet";
        eq2.price = 40;
        eq2.condition = 75;
        eq2.material = Material.Iron;

        eq3.name = "Cloak";
        eq3.price = 150;
        eq3.condition = 90;
        eq3.material = Material.Silk;
        eq3.color = Color.Black;

        eq4.name = "Mace";
        eq4.price = 60;
        eq4.condition = 70;
        eq4.material = Material.Iron;

        eq5.name = "Pickaxe";
        eq5.price = 225;
        eq5.condition = 85;
        eq5.material = Material.Titanium;
        eq5.color = Color.White;

        eq6.name = "Broadsword";
        eq6.price = 120;
        eq6.condition = 70;
        eq6.material = Material.Iron;

        csm1.name = "Tincture";
        csm1.price = 175;
        csm1.effect = Effect.Strengthening;

        csm2.name = "Large Potion";
        csm2.price = 250;
        csm2.effect = Effect.Healing;

        csm3.name = "Coagulate";
        csm3.price = 115;
        csm3.effect = Effect.Wisening;

        _inventory.placeInInventory(eq1);
        _inventory.placeInInventory(eq2);
        _inventory.placeInInventory(eq3);
        _inventory.placeInInventory(eq4);
        _inventory.placeInInventory(eq5);
        _inventory.placeInInventory(eq6);
        _inventory.placeInInventory(csm1);
        _inventory.placeInInventory(csm2);
        _inventory.placeInInventory(csm3);
    }
}