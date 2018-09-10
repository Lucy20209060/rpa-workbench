import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot-unattended',
  templateUrl: './robot-unattended.component.html',
  styleUrls: ['./robot-unattended.component.scss']
})
export class RobotUnattendedComponent implements OnInit {
  conditionInfo:Array<object>
  value:string='123'
  constructor() {
    this.conditionInfo = [
      {
        type: 'Input',
        key: '机器人昵称',
        value: 'luchao',
        placeholder: '输入机器人昵称'
      }
    ]
  }

  ngOnInit() {
  }

}
