export class Player {
    private _name: string;

    constructor() {
        this._name = "";
    }

    public set name(_name: string) {
        this._name = _name;
    }

    public get name(): string {
        return this._name;
    }
}
