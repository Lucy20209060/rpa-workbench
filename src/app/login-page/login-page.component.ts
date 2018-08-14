import { Component, OnInit } from '@angular/core';
import { ElNotificationService } from 'element-angular/release/element-angular.module';
import { Router } from '@angular/router';
import { MyToolsService, MyHttpService } from '../../shared/services';
// import { test } from '../../shared/utils';
import { fadeAnimation } from '../../shared/animation';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [fadeAnimation],
})
export class LoginPageComponent implements OnInit {
  // 账号
  private accountNumber:string = '';
  // 密码
  private password:string = '';

  private AnimationActive:boolean = false;

  constructor(
    private notify: ElNotificationService,
    private router: Router,
    private myTools: MyToolsService,
    private myHttp: MyHttpService
  ) { }

  ngOnInit() {
    // mergeParams()
  }

  switch():void {
    this.AnimationActive = !this.AnimationActive
  }

  login():void {
    if(this.accountNumber === '')return this.notify.warning('请输入账号','登录失败');
    if(this.password === '')return this.notify.warning('请输入密码','登录失败');

    const params = {
      userName: this.accountNumber,
      password: this.password,
      loginFrom: 'workbench'
    };

    this.myHttp.ajax('/rpa/user/sso/rsa/public/hex',{},'get',(data)=>{
      console.log(11,data)
    });

    /*
		*	js跳转 带参数跳转
		*/ 
		// navigate方式
		// this.router.navigate(['/homePage']);
		// this.router.navigate(['/cart', 77]);

		// navigateByUrl方式
		// this.router.navigateByUrl('/cart/55');
  }

  alertInfo():void {
    this.myTools.prompt('warning','请联系管理员修改密码')
  }
}
