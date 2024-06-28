import { randomIntFromInterval } from "../lib/utils";
import { Color, Equipment, MaterialType } from "../models/products/equipment";
import { Product } from "../models/products/product";
import { Store } from "../models/store";
import * as readsync from "readline-sync";

export class CustomerServiceController {
    private _store: Store;

    constructor(_store: Store) {
        this._store = _store;
    }

    public repairItemForCustomer(): void {
        // customer brings in an item and asks you to repair it
        // TODO: randomize so you dont get the same items every time.
        // TODO: implement skill level. can you repair items of this material?
        const customerEquipment: Equipment = new Equipment();
        (customerEquipment.name = "Halberd"), (customerEquipment.price = 80);
        customerEquipment.material = MaterialType.Iron;
        customerEquipment.condition = 43;
        customerEquipment.color = Color.Black;

        const repairCost: number = Math.round(customerEquipment.condition / 2);
        const ownedRawMaterials =
            this._store.workplace.materialPouch.getMaterialCount(
                customerEquipment.material
            );
        if (ownedRawMaterials && ownedRawMaterials >= repairCost) {
            // TODO: randomize gold amount that customer offers.
            // TODO: take condition into account when calculating gold offer.
            // ^---> the lower the condition, the more the customer pays.
            const conditionModifier = 2 - customerEquipment.condition / 100;
            const goldOffer: number = Math.round(
                (customerEquipment.price / 3) * conditionModifier
            );

            // player has required resources to repair weapon.
            console.log(
                '"My',
                customerEquipment.name,
                "took quite a beating in a fight yesterday... Would you be able to fix her up some? I can offer",
                goldOffer + ' gold."'
            );
            let hasDecided = false;
            while (!hasDecided) {
                console.log(
                    "Your current workbench level is",
                    this._store.workplace.workbench.workbenchQualityName + "."
                );
                console.log(
                    "Repairing the",
                    customerEquipment.name,
                    "would cost you",
                    repairCost,
                    MaterialType[customerEquipment.material] + "."
                );
                console.log("You currently have", ownedRawMaterials, MaterialType[customerEquipment.material], ".")
                const answer = readsync
                    .question(
                        "Repair the " +
                            customerEquipment.name +
                            "? You receive " +
                            goldOffer +
                            " gold. (y/n)"
                    )
                    .toLowerCase();
                if (answer === "y" || answer === "n") {
                    hasDecided = true;
                    console.clear();
                    if (answer === "y") {
                        // accept the repair
                        const oldCondition = customerEquipment.condition;
                        this._store.workplace.materialPouch.removeRawMaterials(
                            customerEquipment.material,
                            repairCost
                        );
                        this._store.workplace.workbench.repairWeapon(
                            customerEquipment
                        );
                        this._store.addGold(goldOffer);
                        console.log(
                            "Using your",
                            this._store.workplace.workbench
                                .workbenchQualityName,
                            "workbench, you repair the",
                            customerEquipment.name,
                            "from",
                            oldCondition,
                            "to",
                            customerEquipment.condition + " condition points."
                        );
                        // TODO: introduce different dialog based on how much repair took place.
                        console.log(
                            `"Well, it's better than nothing I suppose. Might even reach the end of the street, ha! See you."\n`
                        );
                        console.log(
                            "...Another satisfied customer! You now have",
                            this._store.gold,
                            "gold."
                        );
                        console.log(
                            "Repairing the",
                            customerEquipment.name,
                            "cost you",
                            repairCost,
                            MaterialType[customerEquipment.material] + ".",
                            "You have",
                            this._store.workplace.materialPouch.getMaterialCount(
                                customerEquipment.material
                            ),
                            MaterialType[customerEquipment.material],
                            "left."
                        );
                    } else {
                        // decline the repair
                        console.log(
                            'You decline. \n "Bollocks, how am I gonna defend myself now? Some other time then..."'
                        );
                    }
                }
            }
        } else {
            // player does not have required materials
            console.log(
                "You do not have the required materials to repair this customer's weapon!"
            );
            console.log(
                "(You have",
                ownedRawMaterials,
                "of",
                repairCost,
                "required",
                MaterialType[customerEquipment.material] + ".)"
            );
        }
    }

    public sellItemToCustomer(): void {
        // customer is looking for an item
        // for now: random item from inventory.
        const randomInventoryKey = randomIntFromInterval(
            0,
            this._store.inventory.inventory.size
        );
        const wantedItem: Product | undefined =
            this._store.inventory.inventory.get(randomInventoryKey);
        console.log(
            '"Yes, hello, I would like to buy the ' +
                wantedItem?.name +
                ". " +
                wantedItem?.price +
                ` gold pieces sounds good to me."`
        );
        if (wantedItem) {
            let hasDecided = false;
            while (!hasDecided) {
                const answer = readsync
                    .question(
                        "Sell the " +
                            wantedItem.name +
                            " for " +
                            wantedItem.price +
                            "? (Y/N)"
                    )
                    .toLowerCase();
                if (answer === "y" || answer == "n") {
                    hasDecided = true;
                    if (answer === "y") {
                        this._store.addGold(wantedItem.price);
                        this._store.inventory.removeFromInventory(wantedItem);
                        console.log(
                            "You place the",
                            wantedItem.name,
                            "on the counter for the customer and receive",
                            wantedItem.price,
                            "shiny gold pieces in return."
                        );
                        console.log(
                            'You thank the customer for their business. `"Likewise, friend. This will come in handy."`'
                        );
                        console.log("\n");
                        console.log(
                            "...Another satisfied customer! You now have",
                            this._store.gold,
                            "gold."
                        );
                    } else {
                        console.log(
                            `You decline. "Oh well. I'll have to look elsewhere. It's a fine piece."`
                        );
                    }
                }
            }
        }
    }
}
