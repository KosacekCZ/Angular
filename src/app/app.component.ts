import {Component} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebApp';
  searchInput = ``;

  typeSearch(): void {
    console.log(this.searchInput);
  }
}

