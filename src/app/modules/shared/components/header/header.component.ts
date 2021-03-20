import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {Spinner} from '../../../../utils/spinner/spinner-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(private oktaAuth: OktaAuthService) {
  }

  @Spinner()
  async logout(): Promise<void> {
    await this.oktaAuth.signOut();
  }
}
