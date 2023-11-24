import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonIconModule } from '../icon/icon.module';
import { IonInputModule } from '../input/input.module';
import { FormComponent } from './form.component';
import { IonSwitchModule } from '../switch/switch.module';
import { IonInputCounterModule } from '../input-counter/input-counter.module';
import { IonInputAreaModule } from '../input-area/input-area.module';
import {
  FieldTextComponent,
  FieldTextAreaComponent,
  FieldInputCounterComponent,
  FieldSwitchComponent,
} from './inputs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonInputModule,
    IonInputAreaModule,
    IonIconModule,
    IonSwitchModule,
    IonInputCounterModule,
  ],
  declarations: [
    FormComponent,
    FieldTextComponent,
    FieldTextAreaComponent,
    FieldSwitchComponent,
    FieldInputCounterComponent,
  ],
  exports: [FormComponent],
})
export class IonFormModule {}
