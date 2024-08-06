import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectOption, ValueToEmmit} from '../core/types/input-select';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const defaultSelectOptions: SelectOption[] = [
  {
    label: 'Entre',
    multiple: true,
    firstPlaceholder: 'Valor inicial',
    secondPlaceholder: 'Valor final',
  },
  {label: 'Igual a'},
  {label: 'Maior ou igual a'},
  {label: 'Maior que'},
  {label: 'Menor ou igual a'},
  {label: 'Menor que'},
];

@Component({
  selector: 'ion-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IonInputSelectComponent,
      multi: true,
    },
  ],
})
export class IonInputSelectComponent implements OnInit, ControlValueAccessor {
  @Input() key = '';
  @Input() name?: string;
  @Input() disabled = false;
  @Input() fullValue!: ValueToEmmit;
  @Input() value = '';
  @Input() secondValue = '';
  @Input() selectOptions: SelectOption[] = defaultSelectOptions;
  @Input() valid: boolean | null = null;
  @Output() valueChange = new EventEmitter<ValueToEmmit>();

  public dropdownVisible = false;
  public currentOption!: SelectOption;

  // Save a reference to the change function passed to us by
  // the Angular form control
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  onChange(value: string): void {}

  // Save a reference to the touched function passed to us by
  // the Angular form control
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  onTouch = (): void => {};

  public handleSelect(selectedOption: SelectOption[]): void {
    this.currentOption = selectedOption[0];
    this.toggleDropdownVisibility();
    this.writeValue({
      firstValue: '',
      secondValue: '',
      optionSelected: this.currentOption
    });
  }

  public handleClick(): void {
    this.toggleDropdownVisibility();
  }

  // Allow Angular to set the value on the component
  public writeValue(value: Partial<ValueToEmmit>): void {
    const valueToEmmit: ValueToEmmit = {
      ...this.fullValue,
      ...value
    };
    if (!this.currentOption.multiple) {
      delete valueToEmmit.secondValue;
    }
    this.valueChange.emit(valueToEmmit);
    this.value = valueToEmmit.firstValue;
    this.secondValue = valueToEmmit.secondValue;
    this.executeFunction(this.onChange, valueToEmmit);
    this.executeFunction(this.onTouch);
  }

  // Allow the Angular form control to disable this input
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public onClickOutside(): void {
    this.dropdownVisible = false;
  }

  ngOnInit(): void {
    if (!this.getCurrentOption()) {
      this.selectOptions[0].selected = true;
    }

    this.currentOption = this.getCurrentOption();

    if (!this.fullValue) {
      this.fullValue = {
        firstValue: '',
        secondValue: '',
        optionSelected: this.currentOption,
      };
    }
  }

  private toggleDropdownVisibility(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  private getCurrentOption(): SelectOption {
    return this.selectOptions.filter((option) => option.selected)[0];
  }

  private executeFunction(func: unknown, params?: unknown): void {
    if (typeof func === 'function') {
      func.bind(this)(params);
    }
  }
}
