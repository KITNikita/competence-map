import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FRAMEWORKS_ROUTES} from './frameworks-routes';
import {FrameworksComponent} from './components/frameworks/frameworks.component';
import {FrameworksResolver} from '../../resolvers/frameworks.resolver';
import {FrameworkEditPageComponent} from './pages/framework-edit/framework-edit.page';
import {FrameworkResolver} from '../../resolvers/framework.resolver';
import {APP_ROUTES} from '../../app-routes';
import {ECompetencesResolver} from '../../resolvers/e-competences.resolver';

const routes: Routes = [
  {
    path: FRAMEWORKS_ROUTES.PATH.ROOT,
    component: FrameworksComponent,
    resolve: {
      frameworks: FrameworksResolver
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
export class FrameworksRoutingModule { }