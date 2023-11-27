import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonInputCount } from '../core/types';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNaN } from 'lodash';

@Component({
  selector: 'ion-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IonInputCounterComponent,
      multi: true,
    },
  ],
})
export class IonInputCounterComponent implements ControlValueAccessor {
  @Input() key = '';
  @Input() inputSize: IonInputCount['inputSize'] = 'md';
  @Input() count = 0;
  @Output() changedValue = new EventEmitter();

  private minValue = 0;

  public countDecrement(): void {
    if (this.count > this.minValue) {
      this.writeValue(this.count - 1);
    }
  }

  public countIncrement(): void {
    this.writeValue(this.count + 1);
  }

  onTouch = (): void => {};

  onChange = (value: number): void => {};

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(value: number | string): void {
    if (!isNaN(Number(value))) {
      const countNumeric = Number(value);
      this.executeFunction(this.onChange, countNumeric);
      this.executeFunction(this.onTouch);
      this.count = countNumeric;
      this.changedValue.emit({ newValue: value });
    }
  }

  executeFunction(func: unknown, params?: unknown): void {
    if (typeof func === 'function') {
      func.bind(this)(params);
    }
  }
}
