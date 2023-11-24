import {FormField, IFormField} from './baseField';
import {IonInputCount} from '../../core/types';

export type ICounterInputField = IFormField & IonInputCount;

export class CounterInputField extends FormField {
    label: string;
    type = 'counter';
    inputSize: IonInputCount['inputSize'];
    count = 0;

    constructor({label, ...props}: ICounterInputField) {
        super(props.disabled,
            props.show,
            props.size,
            props.required,
            props.validators);
        this.key = props.key;
        this.label = label || '';
        this.inputSize = props.inputSize || 'md';
        this.count = props.count;
    }
}
