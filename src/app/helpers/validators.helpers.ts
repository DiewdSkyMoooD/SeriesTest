import { AbstractControl, ValidatorFn } from "@angular/forms";

export const validNumberNatural = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) return null;
      return (isNaN(value) || value < 0) ? { invalidNumber: true } : null;
    };
  };
  