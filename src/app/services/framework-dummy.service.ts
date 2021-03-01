import {Injectable} from '@angular/core';
import {Framework} from '../models/framework';
import {of} from 'rxjs';
import {ECompetenceArea} from '../models/e-competence';

@Injectable()
export class FrameworkDummyService {

  getAll(): Promise<Framework[]> {
    const frameworks: Framework[] = [
      {
        id: 1,
        title: 'Framework 1',
        competences: [
          {
            id: 1,
            title: 'Competence 1',
            eCompetences: [
              {
                id: 1,
                title: 'IS and Business Strategy Alignment',
                description: 'some desc',
                area: ECompetenceArea.PLAN,
                skillsAndKnowledge: [
                  {
                    id: 1,
                    title: 'business strategy concepts'
                  },
                  {
                    id: 2,
                    title: 'trends and implications of ICT internal or external developments for typical organisations'
                  },
                  {
                    id: 3,
                    title: 'the potential and opportunities of relevant business models'
                  }
                ],
                competences: []
              }
            ]
          },
          {
            id: 2,
            title: 'Competence 2',
            eCompetences: [
              {
                id: 1,
                title: 'IS and Business Strategy Alignment',
                description: 'some desc',
                area: ECompetenceArea.PLAN,
                skillsAndKnowledge: [
                  {
                    id: 1,
                    title: 'business strategy concepts'
                  },
                  {
                    id: 2,
                    title: 'trends and implications of ICT internal or external developments for typical organisations'
                  },
                  {
                    id: 3,
                    title: 'the potential and opportunities of relevant business models'
                  }
                ],
                competences: []
              },
              {
                id: 2,
                title: 'Service Level Management',
                description: 'some desc',
                area: ECompetenceArea.PLAN,
                skillsAndKnowledge: [
                  {
                    id: 1,
                    title: 'SLA documentation'
                  },
                  {
                    id: 2,
                    title: 'how to compare and interpret management data '
                  },
                  {
                    id: 3,
                    title: 'the elements forming the metrics of service level agreements'
                  }
                ],
                competences: []
              }
            ]
          },
          {
            id: 3,
            title: 'Competence 3',
            eCompetences: [
              {
                id: 1,
                title: 'Component Integration',
                description: 'some desc',
                area: ECompetenceArea.BUILD,
                skillsAndKnowledge: [
                  {
                    id: 1,
                    title: 'measure system performance before, during and after system integration'
                  },
                  {
                    id: 2,
                    title: 'document and record activities, problems and related repair activities'
                  },
                  {
                    id: 3,
                    title: 'match customers’ needs with existing products'
                  }
                ],
                competences: []
              },
              {
                id: 2,
                title: 'Testing',
                description: 'some desc',
                area: ECompetenceArea.BUILD,
                skillsAndKnowledge: [
                  {
                    id: 1,
                    title: 'create and manage a test plan'
                  },
                  {
                    id: 2,
                    title: 'manage and evaluate the test process'
                  },
                  {
                    id: 3,
                    title: 'design tests of ICT systems'
                  }
                ],
                competences: []
              }
            ]
          }
        ]
      }
    ];

    return of(frameworks).toPromise();
  }

  get(id: number): Promise<Framework> {
    const frameworks: Framework = {
      id: 1,
      title: 'Framework 1',
      competences: [
        {
          id: 1,
          title: 'Competence 1',
          eCompetences: [
            {
              id: 1,
              title: 'IS and Business Strategy Alignment',
              description: 'some desc',
              area: ECompetenceArea.PLAN,
              skillsAndKnowledge: [
                {
                  id: 1,
                  title: 'business strategy concepts'
                },
                {
                  id: 2,
                  title: 'trends and implications of ICT internal or external developments for typical organisations'
                },
                {
                  id: 3,
                  title: 'the potential and opportunities of relevant business models'
                }
              ],
              competences: []
            }
          ]
        },
        {
          id: 2,
          title: 'Competence 2',
          eCompetences: [
            {
              id: 1,
              title: 'IS and Business Strategy Alignment',
              description: 'some desc',
              area: ECompetenceArea.PLAN,
              skillsAndKnowledge: [
                {
                  id: 1,
                  title: 'business strategy concepts'
                },
                {
                  id: 2,
                  title: 'trends and implications of ICT internal or external developments for typical organisations'
                },
                {
                  id: 3,
                  title: 'the potential and opportunities of relevant business models'
                }
              ],
              competences: []
            },
            {
              id: 2,
              title: 'Service Level Management',
              description: 'some desc',
              area: ECompetenceArea.PLAN,
              skillsAndKnowledge: [
                {
                  id: 1,
                  title: 'SLA documentation'
                },
                {
                  id: 2,
                  title: 'how to compare and interpret management data '
                },
                {
                  id: 3,
                  title: 'the elements forming the metrics of service level agreements'
                }
              ],
              competences: []
            }
          ]
        },
        {
          id: 3,
          title: 'Competence 3',
          eCompetences: [
            {
              id: 1,
              title: 'Component Integration',
              description: 'some desc',
              area: ECompetenceArea.BUILD,
              skillsAndKnowledge: [
                {
                  id: 1,
                  title: 'measure system performance before, during and after system integration'
                },
                {
                  id: 2,
                  title: 'document and record activities, problems and related repair activities'
                },
                {
                  id: 3,
                  title: 'match customers’ needs with existing products'
                }
              ],
              competences: []
            },
            {
              id: 2,
              title: 'Testing',
              description: 'some desc',
              area: ECompetenceArea.BUILD,
              skillsAndKnowledge: [
                {
                  id: 1,
                  title: 'create and manage a test plan'
                },
                {
                  id: 2,
                  title: 'manage and evaluate the test process'
                },
                {
                  id: 3,
                  title: 'design tests of ICT systems'
                }
              ],
              competences: []
            }
          ]
        }
      ]
    };

    return of(frameworks).toPromise();
  }
}
