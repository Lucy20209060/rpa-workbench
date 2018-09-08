import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../../shared/services';
import { menuList } from '../../../shared/utils';

const menu = [
  {name: '首页', code: 'homePage', icon: 'rpa-shouye'},
  {name: '客户端监控', code: 'clientMonitor', icon: 'rpa-diannao'},
  {name: '计划任务管理', code: 'taskManager', icon: 'rpa-renwu'},
  {name: '资产管理', code: 'assetManager', icon: 'rpa-cloud'},
  {name: '用户与权限管理', code: 'userAuthManager', icon: 'rpa-quanxianguanli'},
  {name: '企业应用市场管理', code: 'marketManager', icon: 'rpa-shichang'},
  {name: '操作日志查询', code: 'opLogQuery', icon: 'rpa-rizhi'},
  {name: '授权许可管理', code: 'lisenceManager', icon: 'rpa-shouquan'},
  {name: '系统设置', code: 'systemConfig', icon: 'rpa-web_set'}
]

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  menuList:Array<object> = [];
  constructor(
    private myHttp: MyHttpService
  ) { }

  ngOnInit() {
    this.getmenuList();
  }

  getmenuList() {
    this.myHttp.ajax('/rpa/auth/page/menu/list',{},'get',(res)=>{
      const list = res.data;
      this.menuList = menuList(list);
    });
  }

  

}
