import { Component, OnInit } from '@angular/core';
import { delay } from '../../../shared/utils/index'

@Component({
  selector: 'app-unattended-robot-task',
  templateUrl: './unattended-robot-task.component.html',
  styleUrls: ['./unattended-robot-task.component.scss']
})
export class UnattendedRobotTaskComponent implements OnInit {
  conditionInfo:Array<object>;
  constructor() {
    this.conditionInfo = [
      {
        type: 'Input',
        key: '计划任务名称',
        value: '',
        placeholder: '请输入机器人昵称'
      },
      {
        type: 'Select',
        key: '请选择任务状态',
        value: '',
        placeholder: '',
        option:[
          {label:'全部', value:''},
          {label:'等待执行', value:'wait'},
          {label:'正在执行', value:'running'},
          {label:'手动终止', value:'termination'},
          {label:'执行终止', value:'completion'}
        ]
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
