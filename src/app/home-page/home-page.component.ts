import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private pageInfo:Object = {
    name: '用户与权限管理',
    link: 'userAuthManager',
    child: [
      {
        name: '用户列表',
        link: 'userList'
      },
      {
        name: '权限组配置',
        link: 'roleList'
      }
    ]
  }

  constructor(
    // private http: Http
  ) { }

  ngOnInit() {
    
  }

}

