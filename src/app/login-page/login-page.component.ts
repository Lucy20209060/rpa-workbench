import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public accountNumber:string;
  constructor() { }

  ngOnInit() {
  }

  login():void {
    console.log(this.accountNumber)
  }

}
