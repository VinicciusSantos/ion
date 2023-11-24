import { FormControl } from '@angular/forms';
import {CounterInputField, ICounterInputField} from './counterInputField';

const fields: ICounterInputField = {
    key: 'test',
    label: 'Teste',
};

describe('CounterInputField', () => {
    let counterInputField: CounterInputField;
    const formControl = new FormControl('');

    beforeAll(() => {
        counterInputField = new CounterInputField({ ...fields });
        counterInputField.setFormControl(formControl);
    });

    it('should instantiate a text field', () => {
        expect(counterInputField).toBeInstanceOf(CounterInputField);
    });
    it('should set a key on field', () => {
        counterInputField.key = 'test';
        expect(counterInputField.key).toBe('test');
    });
    it('should have type counter', () => {
        expect(counterInputField.type).toBe('counter');
    });
    it('should enable field', () => {
        counterInputField.setDisable(false);
        expect(counterInputField.getDisabled()).toBeFalsy();
        expect(formControl.enabled).toBeTruthy();
    });
});
