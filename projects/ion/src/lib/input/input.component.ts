import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButtonProps } from '../core/types';
/* eslint-disable @typescript-eslint/no-empty-function */
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconDirection, IconType } from '../core/types/icon';
import { InputType } from '../core/types/input';

@Component({
  selector: 'ion-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IonInputComponent,
      multi: true,
    },
  ],
})
export class IonInputComponent implements ControlValueAccessor {
  @Input() key = '';
  @Input() placeholder?: string;
  @Input() button = 'Button';
  @Input() iconInput: IconType;
  @Input() disabled = false;
  @Input() iconDirection?: IconDirection = 'left';
  @Input() valid: boolean;
  @Input() invalid: boolean;
  @Input() errorMsg?: string;
  @Input() inputButton = false;
  @Input() inputButtonConfig?: IonButtonProps;
  @Input() value = '';
  @Input() inputType: InputType = 'text';
  @Input() clearButton = false;
  @Input() readonly = false;
  @Input() maxLength?: string | number | null = null;
  @Output() valueChange = new EventEmitter<string>();
  @Output() clickButton = new EventEmitter();

  ngOnInit(): void {
    this.checkAndSetButtonSize();
  }

  onChange(value: string): void {
    this.valueChange.emit(value);
  }

  onTouch = () => {};

  setValue(value: string): void {
    this.writeValue(value);
    this.onTouch();
  }

  public handleClick(): void {
    this.clickButton.emit();
  }

  // Allow Angular to set the value on the component
  writeValue(value: string): void {
    this.onChange(value);
    this.value = value;
  }

  // Save a reference to the change function passed to us by
  // the Angular form control
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Save a reference to the touched function passed to us by
  // the Angular form control
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  // Allow the Angular form control to disable this input
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public clearInput(): void {
    this.writeValue('');
  }

  public isClearButtonVisible(): boolean {
    return this.clearButton && this.value.length > 0;
  }

  private checkAndSetButtonSize(): void {
    if (this.inputButtonConfig && !this.inputButtonConfig.size) {
      this.inputButtonConfig.size = 'md';
    }
  }
}
