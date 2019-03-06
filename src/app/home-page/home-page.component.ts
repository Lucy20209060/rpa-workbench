import { Component, OnInit } from '@angular/core';
import { delay } from '../../shared/utils/index'
import { MyHttpService } from '../../shared/services';

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
  productList:Array<object> = [];

  constructor( private myHttp: MyHttpService ) {
    
  }

  ngOnInit() {
    this.getProduct();
  }

  onChange() {
    delay(()=>{
      console.log(1)
    })
  }

  // 获取菜单列表
  getProduct() {
    this.myHttp.ajax('http://localhost:3002/rpa/product/list',{},'get',(res)=>{
      this.productList = res.data;
    });
  }

  productClick(productId) {
    this.getProductDetail(productId)
  }

  getProductDetail(productId) {
    this.myHttp.ajax(`http://localhost:3002/rpa/product/detail/${productId}`,{},'get',(res)=>{
      console.log(res)
    });
  }

}

