import { FormGroup, ValidatorFn } from '@angular/forms';
import { FormField } from './core';

export interface IFormModel {
  [x: string]: unknown;
}

export interface IFormField {
  key: string;
  label?: string;
  disabled?: boolean;
  show?: boolean;
  size?: number;
  required?: boolean;
  validators?: ValidatorFn[];
  defaultValue?: unknown;
}

export type IValueChangeCallback = (changes: {
  value: unknown;
  model: IFormModel;
  form: FormGroup;
  field: FormField;
}) => void;

export type IClickInputButtonCallback = (event: {
  value: unknown;
  model: IFormModel;
  form: FormGroup;
  field: FormField;
}) => void;
