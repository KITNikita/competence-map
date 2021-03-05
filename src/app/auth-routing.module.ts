import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OKTA_CONFIG, OktaAuthModule, OktaCallbackComponent} from '@okta/okta-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OktaAuthInterceptor} from './modules/shared/interceptors/okta/okta-auth.interceptor';

const oktaConfig = {
  issuer: 'https://dev-82681560.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oaao0r74y3hVqO8S5d6',
  pkce: true,
  scopes: ['openid', 'email', 'profile']
};

const routes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    OktaAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: OKTA_CONFIG, useValue: oktaConfig},
    {provide: HTTP_INTERCEPTORS, useClass: OktaAuthInterceptor, multi: true}
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
