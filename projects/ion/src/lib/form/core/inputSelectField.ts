import {FormField} from './baseField';
import {IFormField} from '../interfaces';
import {IonInputSelectProps, SelectOption, ValueToEmmit} from '../../core/types/input-select';
import {defaultSelectOptions} from '../../input-select/input-select.component';

export type IInputSelectField = IFormField & Partial<IonInputSelectProps>;

export class InputSelectField extends FormField {
  label: string;
  type = 'input-select';
  value!: ValueToEmmit;
  selectOptions: SelectOption[];

  constructor({label, ...props}: IInputSelectField) {
    super(
      props.disabled,
      props.show,
      props.size,
      props.required,
      props.validators,
      props.defaultValue,
    );
    this.key = props.key;
    this.label = label || '';
    this.selectOptions = props.selectOptions || defaultSelectOptions;
  }
}
