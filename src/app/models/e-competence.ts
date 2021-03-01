import {SkillOrKnowledge} from './skill-or-knowledge';
import {Competence} from './competence';

export class ECompetence {
  id: number;
  title: string;
  description: string;
  area: ECompetenceArea;
  skillsAndKnowledge: SkillOrKnowledge[];
  competences: Competence[];
}

export enum ECompetenceArea {
  PLAN = 'PLAN',
  BUILD = 'BUILD',
  RUN = 'RUN',
  ENABLE = 'ENABLE',
  MANAGE = 'MANAGE'
}

// tslint:disable-next-line:no-namespace
export namespace ECompetenceArea {
  export function eAreas() {
    return [
      ECompetenceArea.PLAN,
      ECompetenceArea.BUILD,
      ECompetenceArea.RUN,
      ECompetenceArea.ENABLE,
      ECompetenceArea.MANAGE
    ];
  }
}
