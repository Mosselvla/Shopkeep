export class Player {
    private _name: string;

    constructor() {
        this._name = "";
    }

    public set name(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }
}
