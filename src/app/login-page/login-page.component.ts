import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // 账号
  public accountNumber:string = '';
  constructor() { }

  ngOnInit() {
  }

  login():void {
    if(this.accountNumber === '')return;
    console.log(this.accountNumber)
  }

}
