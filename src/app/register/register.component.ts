import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  jmeno: any;
  nameState: any;
  heslo: any;
  // @ts-ignore
  shortname: boolean;


  submit(): void {
// tady to asi pošle ty věci někam do arraylistu
  }


  log(): void {
    console.log(this.jmeno + ' ' + this.heslo);
  }
  ngOnInit(): void {
  }
}


