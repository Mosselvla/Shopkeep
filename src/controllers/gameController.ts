export class GameController {
  private _playerName: string = "";

  constructor() {}

  public set playerName(name: string) {
    this._playerName = name;
  }

  public get playerName(): string {
    return this._playerName;
  }
}
