import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {PAGE_SPINNER} from './utils/spinner/spinner-utils';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet spinner></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private authService: AuthService
  ) {
    this.authService.initUser();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => this.managePageSpinner(event));
  }

  private managePageSpinner(event): void {
    if (event instanceof NavigationStart) {
      this.spinner.show(PAGE_SPINNER);
    } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
      this.spinner.hide(PAGE_SPINNER);
    }
  }

}
