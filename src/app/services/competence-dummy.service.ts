import {Injectable} from '@angular/core';
import {ECompetence, ECompetenceArea} from '../models/e-competence';
import {of} from 'rxjs';

@Injectable()
export class CompetenceDummyService {

  getAll(): Promise<ECompetence[]> {
    const eCompetences: ECompetence[] = [
      {
        id: 1,
        title: 'IS and Business Strategy Alignment',
        description: 'some desc',
        area: ECompetenceArea.PLAN,
        skillsAndKnowledge: [{id: 1, title: 'P skill 1'}, {id: 2, title: 'P skill 2'}, {id: 3, title: 'P skill 3'}],
        competences: []
      },
      {
        id: 2,
        title: 'Architecture Design',
        description: 'some desc',
        area: ECompetenceArea.PLAN,
        skillsAndKnowledge: [{id: 1, title: 'P2 skill 1'}, {id: 2, title: 'P2 skill 2'}, {id: 3, title: 'P2 skill 3'}],
        competences: []
      },
      {
        id: 3,
        title: 'Application Development',
        description: 'some desc',
        area: ECompetenceArea.BUILD,
        skillsAndKnowledge: [{id: 1, title: 'B skill 1'}, {id: 2, title: 'B skill 2'}, {id: 3, title: 'B skill 3'}],
        competences: []
      },
      {
        id: 4,
        title: 'User Support',
        description: 'some desc',
        area: ECompetenceArea.RUN,
        skillsAndKnowledge: [{id: 1, title: 'R skill 1'}, {id: 2, title: 'R skill 2'}, {id: 3, title: 'R skill 3'}],
        competences: []
      },
      {
        id: 5,
        title: 'Information Security Strategy Development',
        description: 'some desc',
        area: ECompetenceArea.ENABLE,
        skillsAndKnowledge: [{id: 1, title: 'E skill 1'}, {id: 2, title: 'E skill 2'}, {id: 3, title: 'E skill 3'}],
        competences: []
      },
      {
        id: 6,
        title: 'Forecast Development',
        description: 'some desc',
        area: ECompetenceArea.MANAGE,
        skillsAndKnowledge: [{id: 1, title: 'M skill 1'}, {id: 2, title: 'M skill 2'}, {id: 3, title: 'M skill 3'}],
        competences: []
      }
    ];

    return of(eCompetences).toPromise();
  }
}
