import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CounterInputField } from '../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ion-field-input-counter',
  templateUrl: './field-input-counter.component.html',
  styleUrls: [
    './field-input-counter.component.scss',
    '../../form.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldInputCounterComponent {
  @Input() field!: CounterInputField;
  @Input() formGroup = new FormGroup({});

  public changedValue(event: { newValue: number }): void {
    this.field.valueChange(event.newValue);
  }
}
