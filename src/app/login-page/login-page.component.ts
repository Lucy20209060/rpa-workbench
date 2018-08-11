import { Component, OnInit } from '@angular/core';
import { ElMessageService } from 'element-angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // 账号
  private accountNumber:string = '';
  constructor(
    private message: ElMessageService
  ) {

  }

  ngOnInit() {
  }

  login():void {
    this.message.show('hahhahah')
    // console.log(this)
    // if(this.accountNumber === '') return this.message.show('请输入账号');

    // console.log(this.accountNumber)
  }

}
