import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Spinner} from 'ngx-spinner/lib/ngx-spinner.enum';
import {PAGE_SPINNER} from '../../../../utils/spinner/spinner-utils';

@Component({
  selector: '[spinner]',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {

  readonly spinnerConfig: Spinner = {
    bdColor: '#edf1f2',
    color: '#f18903',
    type: 'ball-clip-rotate',
    size: 'default',
    fullScreen: false,
    zIndex: 10000
  };

  @Input() loaderName = PAGE_SPINNER;
}
