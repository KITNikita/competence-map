import {Component, OnInit} from '@angular/core';
import {getRouteData} from '../../../../utils/routing/routing-utils';
import {FRAMEWORKS_ROUTES} from '../../frameworks-routes';
import {ActivatedRoute} from '@angular/router';
import {Framework} from '../../../../models/framework';
import {ECompetence} from '../../../../models/e-competence';
import {User} from '../../../../models/user';

@Component({
  selector: 'app-framework-edit',
  template: `
    <app-framework
      [user]="user"
      [framework]="framework"
      [eCompetences]="eCompetences">
    </app-framework>
  `
})
export class FrameworkEditPageComponent implements OnInit {

  user: User;
  framework: Framework;
  eCompetences: ECompetence[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.framework = getRouteData(this.route, FRAMEWORKS_ROUTES.DATA.FRAMEWORK);
    this.eCompetences = getRouteData(this.route, FRAMEWORKS_ROUTES.DATA.eCOMPETENCES);
    this.user = getRouteData(this.route, FRAMEWORKS_ROUTES.DATA.USER);
  }

}
