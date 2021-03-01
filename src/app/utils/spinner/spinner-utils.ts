import {NgxSpinnerService} from 'ngx-spinner';
import {ServiceLocator} from '../injection/service-locator';

export const PAGE_SPINNER = 'page-spinner';

export function Spinner(name: string = PAGE_SPINNER): MethodDecorator {

  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {

    const originalMethod = descriptor.value;

    descriptor.value = (...args: any[]) => {
      const spinner: NgxSpinnerService = ServiceLocator.get(NgxSpinnerService);

      spinner.show(name);

      const rawResult: any = originalMethod.apply(this, args);

      if (rawResult instanceof Promise) {
        return rawResult.then(result => {
          spinner.hide(name);
          return result;
        }).catch(e => {
          spinner.hide(name);
          throw e;
        });
      }

      spinner.hide(name);

      return rawResult;
    };

    return descriptor;
  };
}
