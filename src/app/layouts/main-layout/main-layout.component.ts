import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../../shared/services';
import { menuList } from '../../../shared/utils';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  menuList:Array<object> = [];
  currentPath:string;
  constructor(
    private myHttp: MyHttpService
  ) {
    this.currentPath = location.pathname.split('/')[1];
  }

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
