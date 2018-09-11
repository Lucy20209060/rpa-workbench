import { Component, OnInit } from '@angular/core';
import { delay } from '../../../shared/utils/index'

@Component({
  selector: 'app-robot-unattended',
  templateUrl: './robot-unattended.component.html',
  styleUrls: ['./robot-unattended.component.scss']
})
export class RobotUnattendedComponent implements OnInit {
  conditionInfo:Array<object>;
  constructor() {
    this.conditionInfo = [
      {
        type: 'Input',
        key: '机器人昵称',
        value: '',
        placeholder: '请输入机器人昵称'
      }
    ]
  }

  ngOnInit() {
  }

  onChange() {
    delay(()=>{
      console.log('value',this.conditionInfo[0]['value'])
    })
  }

}
