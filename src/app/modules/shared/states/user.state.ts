import {Injectable} from '@angular/core';
import {filterNil, filterNilValue, Query, Store, StoreConfig} from '@datorama/akita';
import {filter, take} from 'rxjs/operators';
import {User} from '../../../models/user';

export interface UserState {
  user: User;
}

export function createInitialState(): UserState {
  return {
    user: undefined
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'user'})
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}

@Injectable({providedIn: 'root'})
export class UserQuery extends Query<UserState> {
  user$ = this.select('user').pipe(filterNil);
  userPromise$ = this.select('user').pipe(filterNilValue(), take(1)).toPromise();
  data$ = this.select()
    .pipe(filter(state => Object.values(state).every(field => field != null)));

  constructor(protected store: UserStore) {
    super(store);
  }
}

