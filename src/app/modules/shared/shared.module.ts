import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [SpinnerComponent, HeaderComponent],
  exports: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MatToolbarModule
  ]
})
export class SharedModule {
}
