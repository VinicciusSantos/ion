import { FormField, IFormField } from './baseField';
import { InputType, IonInputProps } from '../../core/types/input';
import { IconDirection, IonButtonProps } from '../../core/types';

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
  onChanges?: (value: string) => void;

  constructor({ placeholder, label, ...props }: ITextField) {
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

  public valueChange(changes?: string | ((value: string) => void)): TextField {
    if (typeof changes === 'function') {
      this.onChanges = changes;
    } else if (changes && this.onChanges) {
      this.onChanges('123');
    }
    return this;
  }
}
