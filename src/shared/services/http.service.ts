import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams} from '@angular/http';
import { MyToolsService } from '.';

@Injectable()
export class MyHttpService {

  constructor(
    private http: Http,
    private myTools: MyToolsService
  ) { }

  ajaxParams(par:object):object{
    let params = new URLSearchParams();
    for(let item in par){
      params.set(item, par[item]);
    }
    return params;
  }

  ajax(url:string, data?:object, method:string = 'get', cb?:Function){
    const met = method.toLowerCase();
    const params = this.ajaxParams(data);
    const par = met === 'get' ? {search: params}:params;
    this.http[`${met}`](url, par)
    .subscribe((res:Response) => {
      const data = res.json();
      if(data.success){
        cb(data);
      }else{
        this.myTools.prompt('error',data.msg);
      }
    });
  }

}