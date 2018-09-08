import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../../shared/services';

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
      console.log(2,res)
      this.menuList = res.data;
    });
  }

  

}
