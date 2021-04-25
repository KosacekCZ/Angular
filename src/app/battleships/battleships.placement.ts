import {BattleshipsType} from './battleships.type';
import {BattleshipsService} from '../battleships.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class BattleshipsPlacement {


  constructor(bs: BattleshipsService) {
    this.bs = bs;
  }

  public bs: BattleshipsService;

  public placed = false;
  public ships = 2;
  public cruisers = 2;
  public destroyers = 2;
  public selected = 'empty';
  public rotation = false;
  public playerSpawnedShips = 18;
  public enemyShips = 2;
  public enemyCruisers = 2;
  public enemyDestroyers = 2;

  place(x: number, y: number): void {
    try {
      if (!this.placed) {
        if (this.selected === 'ship' && this.ships > 0) {
          if (this.rotation) {
            this.bs.yourField[x][y].type = 1;
            this.bs.yourField[x + 1][y].type = 1;
          } else {
            this.bs.yourField[x][y].type = 1;
            this.bs.yourField[x][y + 1].type = 1;
          }
          this.ships--;
        } else if (this.selected === 'cruiser' && this.cruisers > 0) {
          if (this.rotation) {
            this.bs.yourField[x][y].type = 1;
            this.bs.yourField[x + 1][y].type = 1;
            this.bs.yourField[x + 2][y].type = 1;
          } else {
            this.bs.yourField[x][y].type = 1;
            this.bs.yourField[x][y + 1].type = 1;
            this.bs.yourField[x][y + 2].type = 1;
          }
          this.cruisers--;
        } else if (this.selected === 'destroyer' && this.destroyers > 0) {
          if (this.rotation) {
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
          this.destroyers--;
        }
      } else {
        console.log('Exceed placed ships ammount');
      }
      if (this.ships === 0 && this.cruisers === 0 && this.destroyers === 0) {
        this.placed = true;
      }
    } catch (e) {
      console.log('Placement out of range exception');
    }
  }

  spawnBoats(): void {
    let i: number;
    let j: number;
    let r: number;
    while (this.enemyShips < 2) {
      i = this.bs.rint(9);
      j = this.bs.rint(9);
      r = this.bs.rint(1);
      while (this.enemyShips > 0) {
        if (this.bs.enemyField[i][j].type === 0) {
          try {
            if (r === 0) {
              this.bs.enemyField[i][j].type = 1;
              this.bs.enemyField[i][j + 1].type = 1;
            } else {
              this.bs.enemyField[i][j].type = 1;
              this.bs.enemyField[i + 1][j].type = 1;
              this.enemyShips--;
            }
          } catch (e) {
            if (r === 0) {
              this.bs.enemyField[i][j].type = 0;
              this.bs.enemyField[i][j + 1].type = 0;
            } else {
              this.bs.enemyField[i][j].type = 0;
              this.bs.enemyField[i + 1][j].type = 0;
              console.log('Irregular spawn pattern');
            }
          }
        }
      }
      while (this.enemyCruisers > 0) {
        if (this.bs.enemyField[i][j].type === 0) {
          try {
            if (r === 0) {
              this.bs.enemyField[i][j].type = 1;
              this.bs.enemyField[i][j + 1].type = 1;
              this.bs.enemyField[i][j + 2].type = 1;
            } else {
              this.bs.enemyField[i][j].type = 1;
              this.bs.enemyField[i + 1][j].type = 1;
              this.bs.enemyField[i + 2][j].type = 1;
              this.enemyCruisers--;
            }
          } catch (e) {
            if (r === 0) {
              this.bs.enemyField[i][j].type = 0;
              this.bs.enemyField[i][j + 1].type = 0;
              this.bs.enemyField[i][j + 2].type = 0;
            } else {
              this.bs.enemyField[i][j].type = 0;
              this.bs.enemyField[i + 1][j].type = 0;
              this.bs.enemyField[i + 2][j].type = 0;
              console.log('Irregular spawn pattern');
            }
          }
        }
      }
      while (this.enemyDestroyers > 0) {
        if (this.bs.enemyField[i][j].type === 0) {
          try {
            if (r === 0) {
              this.bs.enemyField[i][j].type = 1;
              this.bs.enemyField[i][j + 1].type = 1;
              this.bs.enemyField[i][j + 2].type = 1;
              this.bs.enemyField[i][j + 3].type = 1;
            } else {
              this.bs.enemyField[i][j].type = 1;
              this.bs.enemyField[i + 1][j].type = 1;
              this.bs.enemyField[i + 2][j].type = 1;
              this.bs.enemyField[i + 3][j].type = 1;
              this.enemyDestroyers--;
            }
          } catch (e) {
            if (r === 0) {
              this.bs.enemyField[i][j].type = 0;
              this.bs.enemyField[i][j + 1].type = 0;
              this.bs.enemyField[i][j + 2].type = 0;
              this.bs.enemyField[i][j + 3].type = 0;
            } else {
              this.bs.enemyField[i][j].type = 0;
              this.bs.enemyField[i + 1][j].type = 0;
              this.bs.enemyField[i + 2][j].type = 0;
              this.bs.enemyField[i + 3][j].type = 0;
              console.log('Irregular spawn pattern');
            }
          }
        }
      }
    }
  }
}
