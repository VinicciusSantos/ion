import { FormField, IFormField } from './baseField';
import { SwitchSize } from '../../core/types';

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
      props.validators
    );
    this.key = props.key;
    this.label = label;
    this.switchSize = switchSize;
  }
}
