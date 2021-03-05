import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Environment} from '../../../../../environments/environment';
import {OktaAuthService} from '@okta/okta-angular';

@Injectable()
export class OktaAuthInterceptor implements HttpInterceptor {

  constructor(private oktaAuth: OktaAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // Only add an access token to whitelisted origins
    const allowedOrigins = [Environment.apiHost];
    if (allowedOrigins.some(url => request.urlWithParams.includes(url))) {
      const accessToken = await this.oktaAuth.getAccessToken();
      const token = await this.oktaAuth.tokenManager.get('accessToken');
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token.value
        }
      });
    }
    return next.handle(request).toPromise();
  }
}
