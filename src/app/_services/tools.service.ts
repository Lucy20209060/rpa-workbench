import { Injectable } from '@angular/core';
import { ElMessageService } from 'element-angular/release/element-angular.module';
import { Http, Response, URLSearchParams} from '@angular/http';
import { mergeParams } from '../../utils/tools';

@Injectable()
export class MyToolsService {

  constructor(
    private message: ElMessageService,
    private http: Http
  ) { }

  prompt(type:string = 'success', info:string = ''):void {
    this.message[type](info);
  }

  ajax(url:string, data:object = {}, method:string = 'get'){
    mergeParams(data);
  }

  ajaxParams(par:object):object{
    let params = new URLSearchParams();
    for(let item in par){
      params.set(item, par[item]);
    }
    return params;
  }

}



