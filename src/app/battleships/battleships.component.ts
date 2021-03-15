import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-battleships',
  templateUrl: './battleships.component.html',
  styleUrls: ['./battleships.component.scss']
})
export class BattleshipsComponent implements OnInit {
  gameField: string[][] = [];
  cField: string[][] = [];
  size = 10;
  label = '';
  public x: any;
  public y: any;
  score = 0;
  steps = 0;
  spawnedShips = 0;
  win = false;

  rint(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
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

  reveal(x: number, y: number): void {
    if (this.cField[x][y] !== 'boat' && this.cField[x][y] !== 'water') {
      this.steps++;
    }
    if (this.gameField[x][y] === 'boat' && this.cField[x][y] !== 'boat') {
      this.score++;
    }
    this.cField[x][y] = this.gameField[x][y];
    console.log(this.cField[x][y] + ' ; ' + this.gameField[x][y]);
    this.check();
  }

  check(): void {
    if (this.spawnedShips === this.score) {
      this.win = true;
    }
  }

  debug(): void {
    console.log(this.cField);
    console.log(this.gameField);
    console.log(this.spawnedShips);
  }

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

}
