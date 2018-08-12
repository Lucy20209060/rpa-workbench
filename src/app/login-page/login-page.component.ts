import { Component, OnInit } from '@angular/core';
import { ElNotificationService } from 'element-angular/release/element-angular.module';
import { Router } from '@angular/router';
import { MyToolsService } from '../_services/index';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // 账号
  private accountNumber:string = '';
  // 密码
  private password:string = '';

  constructor(
    private notify: ElNotificationService,
    private router: Router,
    private myTools: MyToolsService,
    private http: Http
  ) { }

  ngOnInit() {
    this.myTools.ajax('',{name:'lucy',age:12},'');
    
  }

  login():void {
    if(this.accountNumber === '')return this.notify.warning('请输入账号','登录失败');
    if(this.password === '')return this.notify.warning('请输入密码','登录失败');

    const params = this.myTools.ajaxParams({
      userName: this.accountNumber,
      password: this.password,
      loginFrom: 'workbench'
    });

    this.http
      .post('/rpa/user/sso/login/hex',params)
			.subscribe((res:Response) => {
        const data = res.json();
        if(data.success){
          this.router.navigate(['/homePage']);
        }else{
          this.notify.error(data.msg,'登录失败');
        }
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
