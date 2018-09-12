import { Component, OnInit } from '@angular/core';
import { delay } from '../../../shared/utils/index'
import { MyHttpService } from '../../../shared/services';

@Component({
  selector: 'app-robot-unattended',
  templateUrl: './robot-unattended.component.html',
  styleUrls: ['./robot-unattended.component.scss']
})
export class RobotUnattendedComponent implements OnInit {

  conditionInfo:Array<object> = [{ type: 'Input', key: '机器人昵称', value: '', placeholder: '请输入机器人昵称'}]
  pager:Object = { currentPage: 1, total: 0, pageSize: 0 }
  tableList:Array<object> = []

  constructor(
    private myHttp: MyHttpService
  ) {}

  ngOnInit() {
    this.getTableList();
  }

  // 筛选条件变化
  onChange() {
    delay(()=>{
      console.log('value',this.conditionInfo[0]['value'])
    })
  }

  // 获取表格数据
  getTableList() {
    const { pager } = this;
    const data = {
      clientTypeCd: 'robot_unattended',
      name: this.conditionInfo[0]['value'],
      currentPage: pager['currentPage'],
      pageSize: pager['pageSize']
    }
    this.myHttp.ajax('/rpa/client/list',data,'get',(res)=>{
      this.tableList = res.data;
      this.pager = res.pager;
    });
  }

  // 分页
  paginationChange() {
    this.getTableList();
  }

  handle(ref: any): void {
    // 当前index data
    // console.log(ref.index)
    console.log(ref.rowData)
  }

}
