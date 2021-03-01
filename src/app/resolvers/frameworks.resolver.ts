import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Framework} from '../models/framework';
import {FrameworkDummyService} from '../services/framework-dummy.service';

@Injectable()
export class FrameworksResolver implements Resolve<Framework[]> {

  constructor(private apiClient: FrameworkDummyService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Framework[]> {
    return this.apiClient.getAll();
  }

}
