import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonIconModule} from '../icon/icon.module';
import {IonInputModule} from '../input/input.module';
import {FormComponent} from './form.component';
import {IonSwitchModule} from '../switch/switch.module';
import {IonInputAreaModule} from '../input-area/input-area.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonInputModule,
        IonInputAreaModule,
        IonIconModule,
        IonSwitchModule
    ],
    declarations: [FormComponent],
    exports: [FormComponent],
})
export class IonFormModule {
}
