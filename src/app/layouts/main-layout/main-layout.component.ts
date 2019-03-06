import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../../shared/services';
import { menuList } from '../../../shared/utils';
import { findIndex } from 'lodash';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  menuList:Array<object> = [];
  currentPath:string;
  currentPage:object;
  constructor(
    private myHttp: MyHttpService
  ) {
    this.currentPath = location.pathname.split('/')[1];
  }

  ngOnInit() {
    // 获取菜单列表
    this.getmenuList();

    // 获取信息条数
    // this.getUnreadCount();
    // setInterval(() => {
    //   this.getUnreadCount();
    // },60000)
  }

  // 获取菜单列表
  getmenuList() {
    this.myHttp.ajax('http://localhost:3002/rpa/menu/list',{},'get',(res)=>{
      this.menuList = res.data;
    });
  }

  // 获取当前页面信息
  getCurrentPage(path) {
    const menuList = this.menuList;
    const index = findIndex(menuList,(item) => {
      return path === item['path'];
    })
    this.currentPage = menuList[index];
    // console.log(this.currentPage)
  }

  // 点击菜单
  menuClick(item) {
    this.currentPath = item.path;
    this.getCurrentPage(this.currentPath);
  }

  // 获取信息条数
  getUnreadCount() {
    this.myHttp.ajax('/rpa/message/unread/count',{},'get',(res)=>{
      // console.log(res)
    });
  }
}
