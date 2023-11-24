import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextAreaField } from '../../core/textAreaField';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-field-text-area',
  templateUrl: './field-text-area.component.html',
  styleUrls: ['./field-text-area.component.scss', '../../form.component.scss'],
})
export class FieldTextAreaComponent implements OnInit {
  @Input() field!: TextAreaField;
  @Input() formGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {}
}
