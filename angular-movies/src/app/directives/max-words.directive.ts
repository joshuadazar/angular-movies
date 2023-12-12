import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[maxText]',
  standalone: true
})
export class MaxCaracteresDirective implements OnInit {

  @Input() maxCaracteres!: number;

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
    ) {}

  ngOnInit() {
    this.limitText()
  }

  limitText() {
    let text: string = this.elementRef.nativeElement.textContent;

    if (text == ''){
      setTimeout(() => {
        this.limitText()
      }, 100);
    }
    else if(text.length>40){
      this.render.setProperty(
        this.elementRef.nativeElement,
        'innerText',
        text = text.slice(0,40) + '...'
      )
    }
    
  }

}