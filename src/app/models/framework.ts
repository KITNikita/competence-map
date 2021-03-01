import {Competence} from './competence';

export class Framework {
  id: number;
  title: string;
  competences: Competence[];

  static emptyFramework(): Framework {
    return {title: '', competences: []} as Framework;
  }
}
