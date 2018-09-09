import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-tab',
  templateUrl: './page-tab.component.html',
  styleUrls: ['./page-tab.component.scss'],
})
export class PageTabComponent {
	@Input() pageInfo
	currentPath:string
  constructor(
		private router: Router,
		private titleService: Title
	) {
		this.currentPath = location.pathname.split('/')[2] || null;
  }

  ngOnInit() {
		// 监听路由变化
    this.router.events.subscribe((event) => {
			this.currentPath = location.pathname.split('/')[2] || null;
			// this.titleService.setTitle(this.pageInfo.name);
    });
	}
}