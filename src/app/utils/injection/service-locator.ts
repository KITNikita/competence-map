import {InjectFlags, InjectionToken, Injector, Type} from '@angular/core';

export class ServiceLocator {

  private static injector: Injector;

  static init(injector: Injector) {
    ServiceLocator.injector = injector;
  }

  static get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T {
    return ServiceLocator.injector.get(token, notFoundValue, flags);
  }
}
