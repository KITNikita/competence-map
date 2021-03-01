import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_ROUTES} from './app-routes';
import {FRAMEWORKS_ROUTES} from './modules/frameworks/frameworks-routes';

const routes: Routes = [
  {
    path: APP_ROUTES.PATH.ROOT,
    redirectTo: APP_ROUTES.PATH.FRAMEWORKS,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.PATH.FRAMEWORKS,
    loadChildren: () => import('./modules/frameworks/frameworks.module').then(m => m.FrameworksModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
