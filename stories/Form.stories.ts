import {Meta, Story} from '@storybook/angular';
import {TextField} from '../projects/ion/src/lib/form/core/textField';
import {FormComponent} from '../projects/ion/src/lib/form/form.component';
import {IonFormModule} from '../projects/ion/src/lib/form/form.module';
import {FormGroup} from '@angular/forms';

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
            key: 'nome',
            label: 'Nome',
            required: true,
            placeholder: 'Digite um nome',
        }),
        new TextField({
            key: 'password',
            label: 'Senha',
            required: true,
            placeholder: 'Digite uma senha',
            icon: 'filter',
            disabled: true,
        }),
    ],
    formGroup: new FormGroup({}),
    model: {
        nome: 'Pedro',
        password: [1, 2, 3],
    },
};
