import { FormField } from './baseField';
import { IonInputAreaProps } from '../../core/types';
import { IFormField } from '../interfaces';

export type ITextAreaField = IFormField & IonInputAreaProps;

export class TextAreaField extends FormField {
  label = '';
  placeholder: string;
  type = 'textarea';
  cols: string;
  rows: string;

  constructor({ placeholder, label, ...props }: ITextAreaField) {
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
    this.placeholder = placeholder;
    this.cols = props.cols;
    this.rows = props.rows;
  }
}
