import { Injectable } from '@angular/core';
import { ElMessageService } from 'element-angular/release/element-angular.module';
import { Http, Response, URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class MyToolsService {

  constructor(
    private message: ElMessageService,
    private http: Http,
    private router: Router
  ) { }

  prompt(type:string = 'success', info:string = ''):void {
    this.message[type](info);
  }

}





