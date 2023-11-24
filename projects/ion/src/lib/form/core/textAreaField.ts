import { FormField, IFormField } from './baseField';
import { IonInputAreaProps } from '../../core/types';

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
      props.validators
    );
    this.key = props.key;
    this.label = label;
    this.placeholder = placeholder;
    this.cols = props.cols;
    this.rows = props.rows;
  }
}
