import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  constructor(
		private router: Router
	) {}

  ngOnInit() {
		
	}
}