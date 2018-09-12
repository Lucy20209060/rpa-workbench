import { Component, OnInit } from '@angular/core';
import { delay } from '../../../shared/utils/index'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  conditionInfo:Array<object>;

  constructor() { 
    this.conditionInfo = [
      {
        type: 'Input',
        key: '用户',
        value: '',
        placeholder: '请输入用户'
      }
    ]
  }

  ngOnInit() {
  }

  onChange() {
    delay(()=>{
      console.log(this.conditionInfo)
    })
  }

}
