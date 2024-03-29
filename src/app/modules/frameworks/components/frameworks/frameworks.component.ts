import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Framework} from '../../../../models/framework';
import {getRouteData} from '../../../../utils/routing/routing-utils';
import {ActivatedRoute, Router} from '@angular/router';
import {FRAMEWORKS_ROUTES} from '../../frameworks-routes';
import {ECompetence} from '../../../../models/e-competence';
import {SkillsAndKnowledge} from '../../../../models/skills-and-knowledge';
import {APP_ROUTES} from '../../../../app-routes';
import {FrameworkService} from '../../../../services/framework.service';
import {Spinner} from '../../../../utils/spinner/spinner-utils';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksComponent implements OnInit {

  frameworks: Framework[];
  isAdmin: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private frameworkService: FrameworkService,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {
    this.authService.initUser();
  }

  async ngOnInit(): Promise<void> {
    this.frameworks = getRouteData(this.route, FRAMEWORKS_ROUTES.DATA.FRAMEWORKS);
    const user = await this.authService.getUser();
    this.isAdmin = this.authService.isAdmin(user);
    console.log('user: ', user);
  }

  logout(): void {
    this.authService.logout();
  }

  async syncFrameworks(): Promise<void> {
    this.frameworks = await this.frameworkService.getAll();
    this.cd.detectChanges();
  }

  skillsAndKnowledge(eCompetences: ECompetence[]): SkillsAndKnowledge[] {
    return eCompetences?.flatMap(eCompetence => eCompetence.skillsAndKnowledge);
  }

  onEdit(framework: Framework): void {
    this.router.navigate([APP_ROUTES.PATH.FRAMEWORKS, framework.id, FRAMEWORKS_ROUTES.PATH.EDIT]);
  }

  onAdd() {
    this.router.navigate([APP_ROUTES.PATH.FRAMEWORKS, FRAMEWORKS_ROUTES.PATH.ADD]);
  }

  @Spinner()
  async onDelete(framework: Framework): Promise<void> {
    await this.frameworkService.delete(framework);
    this.syncFrameworks();
  }

  // get isAdmin(): boolean {
  //   return this.authService.isAdmin(this.user);
  // }
}
