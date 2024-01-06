import { Player } from "../models/player";
import { Store } from "../models/store";

export class GameController {
    private _player: Player;
    private _store: Store;

    constructor() {
        this._player = new Player();
        this._store = new Store();
    }

    public get player(): Player {
        return this._player;
    }

    public get store(): Store {
        return this._store;
    }
}
