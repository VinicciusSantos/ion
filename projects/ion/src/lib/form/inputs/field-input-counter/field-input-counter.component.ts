import { Component, Input, OnInit } from '@angular/core';
import { CounterInputField } from '../../core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ion-field-input-counter',
  templateUrl: './field-input-counter.component.html',
  styleUrls: ['./field-input-counter.component.scss', '../../form.component.scss']
})
export class FieldInputCounterComponent implements OnInit {
  @Input() field!: CounterInputField;
  @Input() formGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {}
}
