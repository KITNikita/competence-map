import {Framework} from '../models/framework';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {FRAMEWORKS_ROUTES} from '../modules/frameworks/frameworks-routes';
import {Injectable} from '@angular/core';
import {FrameworkService} from '../services/framework.service';

@Injectable()
export class FrameworkResolver implements Resolve<Framework> {

  constructor(private apiClient: FrameworkService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Framework> {
    return this.apiClient.get(+route.params[FRAMEWORKS_ROUTES.PARAM.FRAMEWORK_ID]);
  }
}
