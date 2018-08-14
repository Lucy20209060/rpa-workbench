import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../../shared/services';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private myHttp: MyHttpService
  ) { }

  ngOnInit() {
    this.menuList();
  }

  menuList() {
    this.myHttp.ajax('/rpa/auth/page/menu/list',{},'get',(data)=>{
      console.log(2,data)
    });
  }

  

}
