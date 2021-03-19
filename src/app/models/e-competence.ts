import {SkillsAndKnowledge} from './skills-and-knowledge';

export class ECompetence {
  guid: string;
  title: string;
  description: string;
  area: ECompetenceArea;
  skillsAndKnowledge: SkillsAndKnowledge[];
}

export enum ECompetenceArea {
  PLAN = 'A: PLAN',
  BUILD = 'B: BUILD',
  RUN = 'C: RUN',
  ENABLE = 'D: ENABLE',
  MANAGE = 'E: MANAGE'
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
