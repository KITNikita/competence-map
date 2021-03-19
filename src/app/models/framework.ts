import {Competence} from './competence';

export class Framework {
  id: string;
  title: string;
  competences: Competence[];

  static emptyFramework(): Framework {
    return {title: '', competences: []} as Framework;
  }
}
