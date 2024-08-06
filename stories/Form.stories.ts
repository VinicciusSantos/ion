import { FormGroup } from '@angular/forms';
import { Meta, Story } from '@storybook/angular/types-6-0';
import {
  CounterInputField,
  InputSelectField,
  SwitchField,
  TextAreaField,
  TextField,
} from '../projects/ion/src/lib/form/core';
import { FormComponent } from '../projects/ion/src/lib/form/form.component';
import { IonFormModule } from '../projects/ion/src/lib/form/form.module';

export default {
  title: 'Ion/Data Entry/Forms',
  component: FormComponent,
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  props: args,
  moduleMetadata: {
    declarations: [],
    imports: [IonFormModule],
  },
});

export const Default = Template.bind({});
Default.args = {
  fields: [
    new TextField({
      key: 'simples',
      label: 'Input simples',
      required: true,
      placeholder: 'Digite alguma coisa',
      size: 3,
      defaultValue: 'estou com um valor default, amigo',
    }).valueChange(({ value }) => console.log(value)),
    new TextField({
      key: 'com_botao',
      label: 'Com botão',
      inputType: 'text',
      placeholder: 'Digite uma senha',
      iconInput: 'filter',
      inputButtonConfig: {
        label: 'Desabilitar',
        type: 'secondary',
      },
      size: 3,
    }).clickButton(({ field }) => {
      field.setDisable(!field.getDisabled());
      field.inputButtonConfig.label = field.getDisabled()
        ? 'Habilitar'
        : 'Desabilitar';
    }),
    new TextField({
      key: 'tamanho_maximo',
      label: 'Máximo 4 caracteres',
      required: true,
      placeholder: 'Digite alguma coisa',
      maxLength: '4',
      size: 3,
    }).valueChange(({ value, model }) =>
      console.log('valueChange', value, model)
    ),
    new TextField({
      key: 'com_clear',
      label: 'Clear button',
      inputType: 'text',
      placeholder: 'Digite alguma coisa',
      clearButton: true,
      size: 3,
    }),
    new TextField({
      key: 'password',
      label: 'Senha',
      inputType: 'password',
      placeholder: 'Digite uma senha',
      iconInput: 'filter',
      disabled: false,
      size: 3,
    }),
    new TextField({
      key: 'disabled',
      label: 'Desabilitado',
      inputType: 'password',
      placeholder: 'Não digite alguma coisa kkkkk',
      iconInput: 'filter',
      disabled: true,
      valid: true,
      size: 3,
    }),
    new SwitchField({
      key: 'lindo',
      label: 'Você é lindo?',
      required: true,
      size: 1,
      switchSize: 'md',
    }).valueChange(({ value, form }) => {
      form.findField('zapzap').show = value;
    }),
    new TextField({
      key: 'zapzap',
      label: 'passa o zap, lindo',
      required: true,
      placeholder: 'uatizap',
      show: false,
      size: 3,
    }),
    new CounterInputField({
      key: 'contador',
      label: 'Counter',
      size: 2,
      disabled: true,
    }),
    new TextAreaField({
      key: 'textarea',
      label: 'Text Area',
      required: true,
      placeholder: 'Digite uma senha',
      size: 6,
    }),
    new InputSelectField({
      key: 'input_select',
      label: 'Input Select',
      size: 5,
      disabled: false,
      // defaultValue: {
      //   firstValue: 'teste',
      //   secondValue: 'teste2',
      //   optionSelected: {
      //     key: 'entre',
      //     label: 'Entre',
      //     multiple: true
      //   },
      // },
      // selectOptions: [{
      //   key: 'entre',
      //   label: 'Entre',
      //   multiple: true
      // }]
    }).valueChange(({ value }) => {
      console.log(value);
    }),
    // .formatModel((value: ValueToEmmit) => ({
    //   [value.optionSelected.key]: [value.firstValue, value.secondValue],
    // }))
  ],
  formGroup: new FormGroup({}),
  model: {
    password: 'teste213',
    lindo: false,
    textarea: 'Vinicius 13',
    contador: 10,
    input_select: {
      firstValue: 'teste123',
      secondValue: 'teste233',
    },
  },
};
