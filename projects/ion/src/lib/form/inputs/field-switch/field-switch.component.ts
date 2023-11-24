import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SwitchField } from '../../core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-field-switch',
  templateUrl: './field-switch.component.html',
  styleUrls: ['./field-switch.component.scss', '../../form.component.scss'],
})
export class FieldSwitchComponent implements OnInit {
  @Input() field!: SwitchField;
  @Input() formGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {}
}
