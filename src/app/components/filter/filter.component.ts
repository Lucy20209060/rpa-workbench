import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  @Input() condition:Array<object>;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
		
  }

  // input框删除按钮
  cancel(index) {
    this.condition[index]['value'] = '';
    this.inputChange();
  }

  // input change
  inputChange() {
    this.change.emit(this.condition)
  }

  selectChange() {
    this.change.emit(this.condition)
  }

  reset() {
    this.condition.forEach( ( item, index ) => {
      if(item["type"] === "Input"){
        this.condition[index]['value'] = ''
      }else if(item["type"] === "Select"){
        this.condition[index]['value'] = ""
      }
      this.inputChange();
    });
  }
}