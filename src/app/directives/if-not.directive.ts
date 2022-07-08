import {Directive, ElementRef, HostBinding, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {
  show = false;
  @Input('appIfNot') set ifNot(ifNot: any) {
    this.show = !ifNot;
    this.displayTemp();
  };
  @HostBinding('class.redd') redd = true;
  constructor(private vcr: ViewContainerRef, private tr: TemplateRef<any>) { }

  displayTemp() {
    if (this.show) {
      this.vcr.createEmbeddedView(this.tr);
    } else {
      this.vcr.clear();
    }
  }
}
