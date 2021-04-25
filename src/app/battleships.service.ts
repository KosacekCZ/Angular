import {Injectable} from '@angular/core';
import {BattleshipsType} from './battleships/battleships.type';
import {BattleshipsPlacement} from './battleships/battleships.placement';

@Injectable({
  providedIn: 'root'
})

export class BattleshipsService {

  constructor(ps: BattleshipsPlacement) {
    this.ps = ps;
  }

  public ps: BattleshipsPlacement;

  public enemyField: BattleshipsType[][] = [];
  public yourField: BattleshipsType[][] = [];
  public size = 10;
  public x: any;
  public y: any;
  public score = 0;
  public steps = 0;
  public win = false;
  public started = false;
  public turn = 'player';

  start(): void {
    this.ps.playerSpawnedShips = 18;
    this.turn = 'player';
    this.started = true;
    this.fieldsFill();
    this.ps.spawnBoats();
    this.ps.ships = 2;
    this.ps.cruisers = 2;
    this.ps.destroyers = 2;
    this.ps.enemyShips = 2;
    this.ps.enemyCruisers = 2;
    this.ps.enemyDestroyers = 2;
  }

  rint(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  fieldsFill(): void {
    this.win = false;
    this.ps.enemyShips = 0;
    this.score = 0;
    this.steps = 0;
    this.ps.placed = false;
    let i: number;
    let j: number;
    for (i = 0; i < this.size; i++) {
      this.enemyField[i] = [];
      this.yourField[i] = [];
      for (j = 0; j < this.size; j++) {
        this.enemyField[i][j] = new BattleshipsType();
        this.yourField[i][j] = new BattleshipsType();
      }
    }
    console.log(this.enemyField);
  }
}
