import { FormGroup } from '@angular/forms';

import { IconDirection, IonButtonProps } from '../../core/types';
import { InputType, IonInputProps } from '../../core/types/input';
import { IClickInputButtonCallback, IFormField } from '../interfaces';
import { FormField } from './baseField';

export type ITextField = IFormField & IonInputProps;

export class TextField extends FormField {
  label = '';
  placeholder: string;
  icon: string;
  type = 'text';
  inputType: InputType;
  valid: boolean;
  iconDirection?: IconDirection;
  inputButton = false;
  inputButtonConfig?: IonButtonProps;
  readonly = false;
  clearButton = false;
  maxLength?: string | number | null = null;
  onClick?: (value: unknown) => void;

  constructor({ placeholder, label, ...props }: ITextField) {
    super(
      props.disabled,
      props.show,
      props.size,
      props.required,
      props.validators,
      props.defaultValue
    );
    this.key = props.key;
    this.label = label;
    this.placeholder = placeholder;
    this.icon = props.iconInput;
    this.inputType = props.inputType || 'text';
    this.valid = props.valid;
    this.iconDirection = props.iconDirection;
    this.inputButton = !!props.inputButtonConfig;
    this.inputButtonConfig = props.inputButtonConfig;
    this.readonly = props.readonly;
    this.clearButton = props.clearButton;
    this.maxLength = props.maxLength;
  }

  public clickButton(callback?: IClickInputButtonCallback): FormField {
    if (callback) {
      this.onClick = callback;
    } else if (this.onClick) {
      const formGroup = this.formControl.root as FormGroup;
      this.onClick({
        value: this.formControl.value,
        model: formGroup.value,
        form: formGroup,
        field: this,
      });
    }
    return this;
  }
}
