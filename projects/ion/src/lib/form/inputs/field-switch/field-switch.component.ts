import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SwitchField } from '../../core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-field-switch',
  templateUrl: './field-switch.component.html',
  styleUrls: ['./field-switch.component.scss', '../../form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldSwitchComponent {
  @Input() field!: SwitchField;
  @Input() formGroup = new FormGroup({});
}
