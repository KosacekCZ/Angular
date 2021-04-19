import {Injectable} from '@angular/core';
import {BattleshipsType} from './battleships/battleships.type';

@Injectable({
  providedIn: 'root'
})

export class BattleshipsService {
  constructor() {
  }

  public enemyField: BattleshipsType[][] = [];
  public yourField: BattleshipsType[][] = [];
  public size = 10;
  public label = '';
  public x: any;
  public y: any;
  public score = 0;
  public steps = 0;
  public spawnedShips = 0;
  public win = false;
  public placed = false;
  public placedShips = 0;
  public ships = 2;
  public cruisers = 2;
  public destroyers = 2;
  public started = false;
  public selected = 'empty';

  start(): void {
    this.started = true;
    this.fieldsFill();
    this.spawnBoats();
  }

  rint(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  spawnBoats(): void {
    let i: number;
    let j: number;
    while (this.spawnedShips < 10) {
      i = this.rint(9);
      j = this.rint(9);
      if (!(this.enemyField[i][j].isBoat)) {
        this.enemyField[i][j].isBoat = true;
        this.enemyField[i][j].type = 1;
        this.spawnedShips++;
      }
    }
  }


  fieldsFill(): void {
    this.win = false;
    this.spawnedShips = 0;
    this.score = 0;
    this.steps = 0;
    this.placed = false;
    this.placedShips = 0;
    let i: number;
    let j: number;
    for (i = 0; i < this.size; i++) {
      this.enemyField[i] = [];
      this.yourField[i] = [];
      for (j = 0; j < this.size; j++) {
        this.enemyField[i][j] = new BattleshipsType();
        this.enemyField[i][j].hit = false;

        this.yourField[i][j] = new BattleshipsType();
        this.yourField[i][j].hit = false;

      }
    }
    console.log(this.enemyField);
  }

  bsAI(): void {

  }
}
