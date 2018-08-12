import { Injectable } from '@angular/core';
import { ElMessageService } from 'element-angular/release/element-angular.module';

@Injectable()
export class MyToolsService {

  constructor(
    private message: ElMessageService,
  ) { }

  prompt(type:string = 'success', info:string = ''):void {
    this.message[type](info);
  }

}
