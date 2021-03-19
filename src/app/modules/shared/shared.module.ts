import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {StopPropagationDirective} from './directives/stop-propagation/stop-propagation.directive';

@NgModule({
  declarations: [SpinnerComponent, HeaderComponent, StopPropagationDirective],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    StopPropagationDirective
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MatToolbarModule
  ]
})
export class SharedModule {
}
