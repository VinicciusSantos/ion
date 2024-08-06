import { EventEmitter } from '@angular/core';

export type InputCountSize = 'sm' | 'md';

export interface IonInputCount {
  inputSize?: InputCountSize;
  count?: number;
  changedValue?: EventEmitter<{ newValue: number }>;
}
