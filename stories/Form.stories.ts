import {Meta, Story} from '@storybook/angular';
import {TextField} from '../projects/ion/src/lib/form/core/textField';
import {FormComponent} from '../projects/ion/src/lib/form/form.component';
import {IonFormModule} from '../projects/ion/src/lib/form/form.module';
import {FormGroup} from '@angular/forms';
import {SwitchField} from '../projects/ion/src/lib/form/core/switchField';
import {TextAreaField} from '../projects/ion/src/lib/form/core/textAreaField';
import {EventEmitter} from '@angular/core';
import {CounterInputField} from "../projects/ion/src/lib/form/core";

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
            maxLength: '4',
            size: 3,
        }).valueChange(alert),
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
        new TextField({
            key: 'com_botao',
            label: 'Com botão',
            inputType: 'text',
            placeholder: 'Digite uma senha',
            iconInput: 'filter',
            inputButtonConfig: {
                label: 'Botão',
                type: 'secondary',
            },
            size: 3,
        }),
        new SwitchField({
            key: 'lindo',
            label: 'Você é lindo?',
            required: true,
            size: 2,
            switchSize: 'md',
        }),
        new CounterInputField({
            key: 'contador',
            label: 'Counter',
            size: 7,
        }),
        new TextAreaField({
            key: 'textarea',
            label: 'Text Area',
            required: true,
            placeholder: 'Digite uma senha',
            size: 4,
        }),
    ],
    formGroup: new FormGroup({}),
    model: {
        password: 'teste213',
        lindo: true,
        textarea: 'Vinicius 13',
        contador: 5
    },
};
