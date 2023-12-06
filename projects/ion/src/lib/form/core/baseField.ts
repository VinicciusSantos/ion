import {
  AbstractControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { isBoolean } from 'util';

import { IValueChangeCallback } from '../interfaces';

export abstract class FormField {
  show: boolean;
  size: number;
  type: string;
  required: boolean;
  onChanges?: IValueChangeCallback;
  formControl: AbstractControl;
  private _key: string;

  constructor(
    private disabled = false,
    show = true,
    size = 4,
    required = false,
    private readonly validators = [],
    readonly defaultValue
  ) {
    this.show = show;
    this.size = size;
    this.required = required;
  }

  setFormControl(control: AbstractControl): void {
    this.formControl = control;
  }

  setDisable(value: boolean): void {
    this.disabled = value;
    value && this.formControl
      ? this.formControl.disable()
      : this.formControl.enable();
    this.formControl.updateValueAndValidity();
  }

  set key(key: string) {
    this._key = key;
  }

  get key(): string {
    return this._key;
  }

  getDisabled(): boolean {
    return this.disabled;
  }

  getValidators(): ValidatorFn[] {
    if (this.required) {
      this.validators.push(Validators.required);
    }
    return this.validators;
  }

  public valueChange(changes?: IValueChangeCallback | unknown): FormField {
    const isFunction = typeof changes === 'function';
    if (isFunction) {
      this.onChanges = changes as IValueChangeCallback;
    }
    if ((changes || isBoolean(changes)) && this.onChanges && !isFunction) {
      setTimeout(() => {
        const formGroup = this.formControl.root as FormGroup;
        this.onChanges({
          value: changes,
          model: formGroup.value,
          form: formGroup,
          field: this,
        });
      });
    }
    return this;
  }
}
