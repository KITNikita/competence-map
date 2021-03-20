import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserQuery} from '../modules/shared/states/user.state';
import {User} from '../models/user';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userQuery: UserQuery) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User> {
    return this.userQuery.userPromise$;
  }
}
