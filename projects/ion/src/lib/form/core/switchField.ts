import { FormField } from './baseField';
import { SwitchSize } from '../../core/types';
import { IFormField } from '../interfaces';

export interface ISwitchField extends IFormField {
  label: string;
  switchSize?: SwitchSize;
}

export class SwitchField extends FormField {
  label = '';
  type = 'switch';
  switchSize: SwitchSize;

  constructor({ label, switchSize, ...props }: ISwitchField) {
    super(
      props.disabled,
      props.show,
      props.size,
      props.required,
      props.validators,
      props.defaultValue,
    );
    this.key = props.key;
    this.label = label;
    this.switchSize = switchSize;
  }
}
