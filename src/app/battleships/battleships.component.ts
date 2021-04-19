import {Component, inject, OnInit} from '@angular/core';
import {BattleshipsService} from '../battleships.service';
import {type} from './battleships.type';

@Component({
  selector: 'app-battleships',
  templateUrl: './battleships.component.html',
  styleUrls: ['./battleships.component.scss']

})
export class BattleshipsComponent implements OnInit {
  constructor(bs: BattleshipsService) {
    this.bs = bs;
  }

  public bs: BattleshipsService;

// angular gloryhole

  // odhaleni policka

  place(x: number, y: number): void {
    if (this.bs.placedShips < 6) {
      this.bs.yourField[x][y]
    } else {
      console.log("Exceed placed ships ammount");
    }
  }

  reveal(x: number, y: number): void {
    if (this.bs.placed == true) {
      if (this.bs.enemyField[x][y].type != 1 && this.bs.enemyField[x][y].hit == false) {
        this.bs.steps++;
      } else if (this.bs.enemyField[x][y].type == 1 && this.bs.enemyField[x][y].hit == false) {
        this.bs.steps++;
        this.bs.score++;
      }
      this.bs.enemyField[x][y].hit = true;
      this.check();
    } else {
      console.log('Nedokončené pokládání');
    }
  }

  check(): void {
    if (this.bs.spawnedShips === this.bs.score) {
      this.bs.win = true;
    }
  }

  ngOnInit(): void {

  }

}
