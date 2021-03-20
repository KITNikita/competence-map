import {Injectable} from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {UserStore} from '../modules/shared/states/user.state';
import * as _ from 'lodash';
import {User, UserRole} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private oktaAuth: OktaAuthService,
    private userStore: UserStore
  ) {
  }

  async initUser(): Promise<void> {
    console.log(await this.oktaAuth.getAccessToken());
    console.log(await this.oktaAuth.getIdToken());
    const user: User = _.merge(new User(), await this.oktaAuth.getUser());

    this.userStore.update({user});
  }

  isAdmin(user: User): boolean {
    return user.groups.includes(UserRole.ADMIN.toString());
  }

  isExpert(user: User): boolean {
    return user.groups.includes(UserRole.EXPERT.toString());
  }
}
