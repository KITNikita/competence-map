import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ECompetence} from '../models/e-competence';
import {Environment} from '../../environments/environment';

@Injectable()
export class CompetenceService {

  private readonly resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = `${Environment.apiHost}/competences`;
  }

  getAll(): Promise<ECompetence[]> {
    return this.httpClient.get<ECompetence[]>(`${this.resourceUrl}/e-cf`)
      .toPromise();
  }
}
