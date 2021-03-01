import {Framework} from '../models/framework';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {FrameworkDummyService} from '../services/framework-dummy.service';
import {FRAMEWORKS_ROUTES} from '../modules/frameworks/frameworks-routes';
import {Injectable} from '@angular/core';

@Injectable()
export class FrameworkResolver implements Resolve<Framework> {

  constructor(private apiClient: FrameworkDummyService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Framework> {
    return this.apiClient.get(+route.params[FRAMEWORKS_ROUTES.PARAM.FRAMEWORK_ID]);
  }
}
