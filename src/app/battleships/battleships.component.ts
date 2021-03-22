import {Component, inject, OnInit} from '@angular/core';
import {BattleshipsService} from '../battleships.service';

@Component({
  selector: 'app-battleships',
  templateUrl: './battleships.component.html',
  styleUrls: ['./battleships.component.scss']

})
export class BattleshipsComponent implements OnInit {
  constructor(bs: BattleshipsService) {this.bs = bs;}
  public bs: BattleshipsService;

// angular gloryhole

  // odhaleni policka
  reveal(x: number, y: number): void {
    if (!new RegExp('boat|water').test(this.bs.cField[x][y])) {
      this.bs.steps++;
    }
    if (this.bs.gameField[x][y] === 'boat' && this.bs.cField[x][y] !== 'boat') {
      this.bs.score++;
    }
    this.bs.cField[x][y] = this.bs.gameField[x][y];
    this.check();
  }

  check(): void {
    if (this.bs.spawnedShips === this.bs.score) {
      this.bs.win = true;
    }
  }

  ngOnInit()
    :
    void {
  }

}
