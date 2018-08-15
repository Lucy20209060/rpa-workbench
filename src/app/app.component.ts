import { Component } from '@angular/core';
import { MyToolsService } from '../shared/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main';
  constructor(
    private myTools: MyToolsService
  ) { }

  ngOnInit() {
    this.myTools.fristLogin();
  }




}