import { Player } from "../models/player";
import { Store } from "../models/store";

export enum Action {
    Move,
}

export class GameController {
    private _isRunning: boolean;
    private _player: Player;
    private _store: Store;

    constructor() {
        this._isRunning = true;
        this._player = new Player();
        this._store = new Store();
    }

    public get isRunning(): boolean {
        return this._isRunning;
    }

    public set isRunning(_isRunning) {
        this._isRunning = _isRunning;
    }

    public get player(): Player {
        return this._player;
    }

    public get store(): Store {
        return this._store;
    }

    public handleAction(_action: string): void {
        switch (_action.toLowerCase()) {
            case "move":
                // move somewhere
                console.log("You move boi.");
                break;
            case "serve":
                // serve a customer
                console.log("You approach the first customer in line.");
                break;
            case "end":
                // end game
                this.isRunning = false;
                console.log("Goodbye!");
                break;
        }
    }
}
