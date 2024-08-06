import {FormGroup} from '@angular/forms';
import {render, RenderResult, screen} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import {TextField} from './core/textField';
import {FormComponent, IonFormProps} from './form.component';
import {IonFormModule} from './form.module';
import {FormField} from './core';

const textFieldConfig = {
  key: 'title',
  label: 'Título',
  placeholder: 'Insira um título',
  required: true,
};

const textField: FormField = new TextField(textFieldConfig);

const sut = async (
  props: IonFormProps = {fields: []}
): Promise<RenderResult<FormComponent, FormComponent>> => {
  return render(FormComponent, {
    excludeComponentDeclaration: true,
    componentProperties: props,
    imports: [IonFormModule],
  });
};

describe('IonForm', () => {
  describe('with text field', () => {
    let input;
    let form;
    let detectChanges;
    let formGroup: FormGroup;

    beforeEach(async () => {
      formGroup = new FormGroup({});
      const {detectChanges: changes} = await sut({
        fields: [textField],
        formGroup,
      });
      detectChanges = changes;
      input = screen.getByRole('textbox', {
        name: new RegExp(textFieldConfig.label, 'i'),
      });
      form = screen.getByRole('form');
    });

    it('should render input text', () => {
      expect(input).toBeInTheDocument();
    });
    it('should render correct placeholder', () => {
      expect(input).toHaveAttribute('placeholder', textFieldConfig.placeholder);
    });
    it('should change value when typing', () => {
      const value = 'Renaissance';
      userEvent.type(input, value);
      expect(input).toHaveValue(value);
      expect(form).toHaveFormValues({
        [textFieldConfig.key]: value,
      });
    });
    it('should disable field', () => {
      textField.setDisable(true);
      detectChanges();
      setTimeout(() => {
        expect(formGroup.controls[textFieldConfig.key].disabled).toBeTruthy();
        expect(input).toBeDisabled();
      });
    });
    it('should enable field', () => {
      textField.setDisable(true);
      textField.setDisable(false);
      detectChanges();
      setTimeout(() => {
        expect(formGroup.controls[textFieldConfig.key].disabled).toBeFalsy();
        expect(input).not.toBeDisabled();
      });
    });
  });
});
