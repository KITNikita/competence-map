import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ECompetence} from '../models/e-competence';
import {CompetenceService} from '../services/competence.service';

@Injectable()
export class ECompetencesResolver implements Resolve<ECompetence[]> {

  constructor(private apiClient: CompetenceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ECompetence[]> {
    return this.apiClient.getAll();
  }
}
