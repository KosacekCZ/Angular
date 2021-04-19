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

  aiAttack(): void {

  }

  place(x: number, y: number): void {
    if (this.bs.placed == false) {
      if (this.bs.selected == 'ship' && this.bs.ships > 0) {
        if (this.bs.rotation) {
          this.bs.yourField[x][y].type = 1;
          this.bs.yourField[x + 1][y].type = 1;
        } else {
          this.bs.yourField[x][y].type = 1;
          this.bs.yourField[x][y + 1].type = 1;
        }
        this.bs.ships--;
        this.bs.placedShips++;
      } else if (this.bs.selected == 'cruiser' && this.bs.cruisers > 0) {
        if (this.bs.rotation) {
          this.bs.yourField[x][y].type = 1;
          this.bs.yourField[x + 1][y].type = 1;
          this.bs.yourField[x + 2][y].type = 1;
        } else {
          this.bs.yourField[x][y].type = 1;
          this.bs.yourField[x][y + 1].type = 1;
          this.bs.yourField[x][y + 2].type = 1;
        }
        this.bs.cruisers--;
        this.bs.placedShips++;
      } else if (this.bs.selected == 'destroyer' && this.bs.destroyers > 0) {
        if (this.bs.rotation) {
          this.bs.yourField[x][y].type = 1;
          this.bs.yourField[x + 1][y].type = 1;
          this.bs.yourField[x + 2][y].type = 1;
          this.bs.yourField[x + 3][y].type = 1;
        } else {
          this.bs.yourField[x][y].type = 1;
          this.bs.yourField[x][y + 1].type = 1;
          this.bs.yourField[x][y + 2].type = 1;
          this.bs.yourField[x][y + 3].type = 1;
        }
        this.bs.destroyers--;
        this.bs.placedShips++;
      }
      console.log(this.bs.placedShips);
    } else {
      console.log('Exceed placed ships ammount');
    }
    if (this.bs.ships == 0 && this.bs.cruisers == 0 && this.bs.destroyers == 0) {
      this.bs.placed = true;
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
      this.aiAttack();
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
