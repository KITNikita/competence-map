import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

export abstract class AbstractFormComponent {

  submitting = false;

  isFormDisabled(form: FormGroup): boolean {
    // return form.pristine || this.submitting || form.invalid;
    return form.invalid;
  }

  hasFieldError(control: AbstractControl, ...errors: string[]): boolean {
    if (control.touched) {
      if (errors.length > 0) {
        return errors.some(errorType => control.hasError(errorType));
      } else {
        return control.invalid;
      }
    }
  }

  protected validateAllFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

  protected deleteEmptyControls(formData: object): void {
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        if (Object.getPrototypeOf(formData[key]).isPrototypeOf(Object)) {
          this.deleteEmptyControls(formData[key]);
        } else {
          if (!formData[key]) {
            delete formData[key];
          }
        }
      } else {
        delete formData[key];
      }
    });
  }

  protected markFieldsAsUntouched(...controls: AbstractControl[]): void {
    controls.forEach((control: AbstractControl) => control.markAsUntouched());
  }

  protected disableFields(...controls: AbstractControl[]): void {
    controls.forEach((control: AbstractControl) => control.disable());
  }

  protected enableFields(...controls: AbstractControl[]): void {
    controls.forEach((control: AbstractControl) => control.enable());
  }

  protected cleanFields(...controls: AbstractControl[]): void {
    controls.forEach((control: AbstractControl) => control.reset());
  }
}
