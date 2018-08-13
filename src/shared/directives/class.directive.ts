import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[lu-class]',
})
export class LuClassDirective implements OnInit {
  
  @Input('lu-class') classNames: string = ''
  
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }
  
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.classNames)
  }
  
}

// 示例 <div lu-class="my-class"></div>