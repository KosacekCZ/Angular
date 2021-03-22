import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleshipsService {
  constructor() {
  }

  public gameField: string[][] = [];
  public cField: string[][] = [];
  public size = 10;
  public label = '';
  public x: any;
  public y: any;
  public score = 0;
  public steps = 0;
  public spawnedShips = 0;
  public win = false;

  rint(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  spawnBoats(): void {
    let i: number;

    for (i = 0; i < 10; i++) {
      this.gameField[this.rint(10)][this.rint(10)] = 'boat';
    }
    let j: number;
    for (i = 0; i < this.size; i++) {
      for (j = 0; j < this.size; j++) {
        if (this.gameField[i][j] === 'boat') {
          this.spawnedShips++;
        }
      }
    }
  }

  fieldsFill(): void {
    this.win = false;
    this.score = 0;
    this.steps = 0;
    let i: number;
    let j: number;
    for (i = 0; i < this.size; i++) {
      this.gameField[i] = [];
      this.cField[i] = [];
      for (j = 0; j < this.size; j++) {
        this.gameField[i][j] = 'water';
        this.cField[i][j] = '';
      }
    }
    this.spawnBoats();
    console.log(this.gameField);

  }
    }
