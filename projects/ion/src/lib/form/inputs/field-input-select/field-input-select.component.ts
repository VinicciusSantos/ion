import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputSelectField} from '../../core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-field-input-select',
  templateUrl: './field-input-select.component.html',
  styleUrls: ['./field-input-select.component.scss', '../../form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldInputSelectComponent {
  @Input() field!: InputSelectField;
  @Input() formGroup = new FormGroup({});
}

