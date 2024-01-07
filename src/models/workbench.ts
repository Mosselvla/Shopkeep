import { Equipment } from "./products/equipment";

enum Quality {
    Basic,
    Intermediate,
    Expert,
}

export class Workbench {
    private _workbenchQuality: Quality;

    constructor() {
        this._workbenchQuality = Quality.Basic;
    }

    public get workbenchQuality(): Quality {
        return this._workbenchQuality;
    }

    public get workbenchQualityName(): string {
        return Quality[this._workbenchQuality];
    }

    public set workbenchQuality(_workbenchQuality: Quality) {
        this._workbenchQuality = _workbenchQuality;
    }

    public repairWeapon(_weapon: Equipment) {
        switch (this._workbenchQuality) {
            case Quality.Basic:
                _weapon.condition <= 80
                    ? (_weapon.condition += 20)
                    : (_weapon.condition = 100);
                break;
            case Quality.Intermediate:
                _weapon.condition <= 60
                    ? (_weapon.condition += 40)
                    : (_weapon.condition = 100);
                break;
            case Quality.Expert:
                _weapon.condition <= 40
                    ? (_weapon.condition += 60)
                    : (_weapon.condition = 100);
                break;
        }
    }
}
