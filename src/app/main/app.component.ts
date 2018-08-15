import { Component } from '@angular/core';
import { MyToolsService } from '../shared/services/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private myTools: MyToolsService
  ) { }

  ngOnInit() {
    this.myTools.fristLogin();
  }




}