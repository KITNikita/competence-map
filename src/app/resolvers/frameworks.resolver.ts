import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Framework} from '../models/framework';
import {FrameworkService} from '../services/framework.service';

@Injectable()
export class FrameworksResolver implements Resolve<Framework[]> {

  constructor(private apiClient: FrameworkService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Framework[]> {
    return this.apiClient.getAll();
  }

}
