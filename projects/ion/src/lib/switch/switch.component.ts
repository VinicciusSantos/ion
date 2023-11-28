/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwitchSize } from '../core/types/switch';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ion-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IonSwitchComponent,
      multi: true,
    },
  ],
})
export class IonSwitchComponent implements ControlValueAccessor {
  @Input() key!: string;
  @Input() value = false;
  @Input() size: SwitchSize = 'sm';
  @Input() disabled = false;
  @Output() atValueChange = new EventEmitter<boolean>();

  onTouch = (): void => {};

  onChange = (value: boolean): void => {};

  // Allow Angular to set the value on the component
  writeValue(value: boolean): void {
    this.value = value;
    this.atValueChange.emit(value);
    this.executeFunction(this.onChange, value);
    this.executeFunction(this.onTouch);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  executeFunction(func: unknown, params?: unknown): void {
    if (typeof func === 'function') {
      func.bind(this)(params);
    }
  }
}
