import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
// export type resource=<Array>

@Component({
  selector: 'page-tab',
  templateUrl: './page-tab.component.html',
  styleUrls: ['./page-tab.component.scss'],
})
export class PageTabComponent {
  @Input() path
	@Input() resources
	currentPath:string
  constructor() {
		this.currentPath = location.pathname.split('/')[2] || null;
  }

  ngOnInit() {
    
	}
	
	tabClick(code) {
		this.currentPath = code;
	}
}