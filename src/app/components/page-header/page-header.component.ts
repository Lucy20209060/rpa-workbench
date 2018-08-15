import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
export type page = {name:string, link:string, child?:Array<Object>}

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  // 接受来自父组建的数据 在此定义数据类型
  @Input() pageInfo: page
  constructor(
    // private router: Router,
  ) {
  }

  ngOnInit() {
    console.log(this.pageInfo)
  }
  
  
}