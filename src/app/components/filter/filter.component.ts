import { Component, Input } from '@angular/core'

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() condition
  constructor() {}

  ngOnInit() {
		
  }
  
  onClick(name) {
    console.log(name.value)
  }
}