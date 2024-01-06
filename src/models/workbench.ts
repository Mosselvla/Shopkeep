import { Weapon } from "./products/weapon";

enum Quality {
    BASIC,
    INTERMEDIATE,
    EXPERT,
}

export class Workbench {
    private _workbenchQuality: Quality;

    constructor() {
        this._workbenchQuality = Quality.BASIC;
    }

    public repairWeapon(_weapon: Weapon) {
        switch (this._workbenchQuality) {
            case Quality.BASIC:
                _weapon.condition <= 80
                    ? (_weapon.condition += 20)
                    : (_weapon.condition = 100);
                break;
            case Quality.INTERMEDIATE:
                _weapon.condition <= 60
                    ? (_weapon.condition += 40)
                    : (_weapon.condition = 100);
                break;
            case Quality.EXPERT:
                _weapon.condition <= 40
                    ? (_weapon.condition += 60)
                    : (_weapon.condition = 100);
                break;
        }
    }
}
