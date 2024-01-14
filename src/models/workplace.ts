import { MaterialType } from "./products/equipment";
import { MaterialPouch } from "./materialPouch";
import { Workbench } from "./workbench";

export class Workplace {
    private _workbench: Workbench;
    private _materialPouch: MaterialPouch;

    constructor() {
        this._workbench = new Workbench();
        this._materialPouch = new MaterialPouch();
    }

    public get workbench(): Workbench {
        return this._workbench;
    }

    public get materialPouch(): MaterialPouch {
        return this._materialPouch;
    }
}
