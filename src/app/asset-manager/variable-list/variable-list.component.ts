import { Component, OnInit } from '@angular/core'
import { delay } from '../../../shared/utils/index'

@Component({
  selector: 'app-variable-list',
  templateUrl: './variable-list.component.html',
  styleUrls: ['./variable-list.component.scss']
})
export class VariableListComponent implements OnInit {

  conditionInfo:Array<object>;

  constructor() {
    this.conditionInfo = [
      {
        type: 'Input',
        key: '变量名',
        value: '',
        placeholder: '请输入变量名'
      },
      {
        type: 'Input',
        key: '变量名称',
        value: '',
        placeholder: '请输入变量名称'
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
