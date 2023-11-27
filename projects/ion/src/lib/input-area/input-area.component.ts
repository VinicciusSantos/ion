/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ion-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IonInputAreaComponent,
      multi: true,
    },
  ],
})
export class IonInputAreaComponent implements ControlValueAccessor {
  @Input() key!: string;
  @Input() cols = '30';
  @Input() rows = '5';
  @Input() disabled = false;
  @Input() value: string;
  @Input() expand?: boolean;
  @Input() placeholder?: string;
  @Output() valueChange = new EventEmitter<string>();

  onTouch = (): void => {};

  onChange = (value: string): void => {};

  writeValue(value: string): void {
    this.valueChange.emit(value);
    this.executeFunction(this.onChange, value);
    this.executeFunction(this.onTouch);
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
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
