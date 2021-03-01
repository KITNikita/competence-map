import {Component, OnInit} from '@angular/core';
import {getRouteData} from '../../../../utils/routing/routing-utils';
import {FRAMEWORKS_ROUTES} from '../../frameworks-routes';
import {ActivatedRoute} from '@angular/router';
import {Framework} from '../../../../models/framework';
import {ECompetence} from '../../../../models/e-competence';

@Component({
  selector: 'app-framework-add',
  template: '<app-framework [framework]="framework" [eCompetences]="eCompetences"></app-framework>'
})
export class FrameworkAddPageComponent implements OnInit {

  framework: Framework;
  eCompetences: ECompetence[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.framework = Framework.emptyFramework();
    this.eCompetences = getRouteData(this.route, FRAMEWORKS_ROUTES.DATA.eCOMPETENCES);
    console.log('HEllo');
  }

}
