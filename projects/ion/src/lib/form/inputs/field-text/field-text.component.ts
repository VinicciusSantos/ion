import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextField } from '../../core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss', '../../form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldTextComponent {
  @Input() field!: TextField;
  @Input() formGroup = new FormGroup({});
}
