import {Injectable} from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {UserQuery, UserStore} from '../modules/shared/states/user.state';
import * as _ from 'lodash';
import {User, UserRole} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private oktaAuth: OktaAuthService,
    private userStore: UserStore,
    private userQuery: UserQuery
  ) {
  }

  async logout(): Promise<void> {
    await this.oktaAuth.signOut();
  }

  async initUser(): Promise<void> {
    const user: User = _.merge(new User(), await this.oktaAuth.getUser());

    this.userStore.update({user});
  }

  async getUser(): Promise<User> {
    return await this.userQuery.userPromise$;
  }

  isAdmin(user: User): boolean {
    return user.groups.includes(UserRole.ADMIN.toString());
  }

  isExpert(user: User): boolean {
    return user.groups.includes(UserRole.EXPERT.toString());
  }

  async isCurrentAdmin(): Promise<boolean> {
    const user = await this.getUser();

    return this.isAdmin(user);
  }
}
