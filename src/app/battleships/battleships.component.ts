import {Component, inject, OnInit} from '@angular/core';
import {BattleshipsService} from '../battleships.service';
import {type} from './battleships.type';
import {BattleshipsPlacement} from './battleships.placement';

@Component({
  selector: 'app-battleships',
  templateUrl: './battleships.component.html',
  styleUrls: ['./battleships.component.scss']

})
export class BattleshipsComponent implements OnInit {
  constructor(bs: BattleshipsService, ps: BattleshipsPlacement) {
    this.bs = bs;
    this.ps = ps;
  }

  public bs: BattleshipsService;
  public ps: BattleshipsPlacement;

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async aiAttack(): Promise<void> {
    await this.delay(1500);
    this.attackPlayer(this.bs.rint(9), this.bs.rint(9));
  }

  attackEnemy(x: number, y: number): void {
    if (this.bs.turn === 'player') {
      if (this.ps.placed == true) {
        if (this.bs.enemyField[x][y].type != 1 && this.bs.enemyField[x][y].hit == false) {
          this.bs.steps++;
        } else if (this.bs.enemyField[x][y].type == 1 && this.bs.enemyField[x][y].hit == false) {
          this.bs.steps++;
          this.bs.score++;
        }
        this.bs.enemyField[x][y].hit = true;
        this.bs.turn = 'enemy';
        this.check();
        this.aiAttack();
      } else {
        console.log('Nedokončené pokládání');
      }
    }
  }

  attackPlayer(x: number, y: number): void {
    if (this.bs.turn === 'enemy') {
      if (this.bs.yourField[x][y].type == 1) {
        this.ps.playerSpawnedShips--;
      } else {
        console.log('miss');
      }
      this.bs.yourField[x][y].hit = true;
      this.bs.turn = 'player';
      this.check();
    }
  }

  check(): void {
    if (this.ps.enemyShips === this.bs.score) {
      this.bs.win = true;
    } else if (this.ps.playerSpawnedShips <= 0) {
      this.bs.win = true;
    }
  }

  ngOnInit(): void {

  }

}
