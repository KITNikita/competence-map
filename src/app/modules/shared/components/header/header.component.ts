import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Spinner} from '../../../../utils/spinner/spinner-utils';
import {AuthService} from '../../../../services/auth.service';
import {User} from '../../../../models/user';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  username$: Subject<string>;

  constructor(private authService: AuthService) {
    this.username$ = new Subject<string>();
  }

  async ngOnInit(): Promise<void> {
    const user: User = await this.authService.getUser();
    this.username$.next(user.name);
  }

  @Spinner()
  async logout(): Promise<void> {
    await this.authService.logout();
  }
}
