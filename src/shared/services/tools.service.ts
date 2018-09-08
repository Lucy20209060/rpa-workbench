import { Injectable } from '@angular/core';
import { ElMessageService } from 'element-angular/release/element-angular.module';
import { Http, Response, URLSearchParams } from '@angular/http';
import { getUrlParam } from '../utils';

@Injectable()
export class MyToolsService {

  constructor(
    private message: ElMessageService,
    private http: Http
  ) { }

  prompt(type:string = 'success', info:string = ''):void {
    this.message[type](info);
  }

  fristLogin():void {
    const loginToken = getUrlParam('loginToken');
    if(loginToken === null)return;
    let params = new URLSearchParams();
    params.set('loginToken',loginToken);
    this.http
    .get('/rpa/user/baseinfo',{search:params})
    .subscribe((res:Response) => {
      const data = res.json();
      console.log(data)
    })
  }

}





