import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Framework} from '../../../../models/framework';
import {getRouteData} from '../../../../utils/routing/routing-utils';
import {ActivatedRoute, Router} from '@angular/router';
import {FRAMEWORKS_ROUTES} from '../../frameworks-routes';
import {ECompetence} from '../../../../models/e-competence';
import {SkillOrKnowledge} from '../../../../models/skill-or-knowledge';
import {APP_ROUTES} from '../../../../app-routes';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksComponent implements OnInit {

  frameworks: Framework[];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.frameworks = getRouteData(this.route, FRAMEWORKS_ROUTES.DATA.FRAMEWORKS);
  }

  skillsAndKnowledge(eCompetences: ECompetence[]): SkillOrKnowledge[] {
    return eCompetences.flatMap(eCompetence => eCompetence.skillsAndKnowledge);
  }

  onEdit(framework: Framework): void {
    this.router.navigate([APP_ROUTES.PATH.FRAMEWORKS, framework.id, FRAMEWORKS_ROUTES.PATH.EDIT]);
  }

  onAdd() {
    this.router.navigate([APP_ROUTES.PATH.FRAMEWORKS, FRAMEWORKS_ROUTES.PATH.ADD]);
  }

  onDelete(framework: Framework): void {

  }
}
