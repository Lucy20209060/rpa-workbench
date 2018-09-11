import { Component, Input } from '@angular/core'

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() condition
  public value:string;
  constructor() {}

  ngOnInit() {
		
  }

  changeName(event) {
    console.log(event,this.condition)
  }

  // ngDoCheck() {
  //   console.log(this.value)
  // }
  
  onClick() {
    console.log(this.value)
  }
}