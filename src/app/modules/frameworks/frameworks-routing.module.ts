import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FRAMEWORKS_ROUTES} from './frameworks-routes';
import {FrameworksComponent} from './components/frameworks/frameworks.component';
import {FrameworksResolver} from '../../resolvers/frameworks.resolver';
import {FrameworkResolver} from '../../resolvers/framework.resolver';
import {APP_ROUTES} from '../../app-routes';
import {ECompetencesResolver} from '../../resolvers/e-competences.resolver';
import {FrameworkAddPageComponent} from './pages/framework-add/framework-add.page';
import {FrameworkEditPageComponent} from './pages/framework-edit/framework-edit.page';
import {TestVpsComponent} from './components/test-vps/test-vps.component';
import {OktaAuthGuard} from '@okta/okta-angular';

const routes: Routes = [
  {
    path: FRAMEWORKS_ROUTES.PATH.ROOT,
    component: FrameworksComponent,
    canActivate: [OktaAuthGuard],
    resolve: {
      frameworks: FrameworksResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: FRAMEWORKS_ROUTES.PATH.ADD,
    component: FrameworkAddPageComponent,
    resolve: {
      eCompetences: ECompetencesResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: `:${FRAMEWORKS_ROUTES.PARAM.FRAMEWORK_ID}/${FRAMEWORKS_ROUTES.PATH.EDIT}`,
    component: FrameworkEditPageComponent,
    resolve: {
      framework: FrameworkResolver,
      eCompetences: ECompetencesResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'test-vps',
    component: TestVpsComponent
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.PATH.ROOT
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FrameworksRoutingModule {
}
