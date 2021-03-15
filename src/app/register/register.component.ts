import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  jmeno: any;
  nameState: any;
  heslo: any;
  private httpClient: HttpClient;

  submit(): void {
    this.httpClient.post('https://webhook.site/28b8eb5a-5212-4f22-b43a-903ca2ba0c7e', {username: this.jmeno, password: this.heslo})
      .subscribe
      (
        () => alert('Success'),
        () => alert('Failed')
      );
  }

  ngOnInit(): void {
  }

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
}


