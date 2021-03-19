import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[stop-propagation]'
})
export class StopPropagationDirective {

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }

  // If we need to prevent propagation of another events we should add it here
}
