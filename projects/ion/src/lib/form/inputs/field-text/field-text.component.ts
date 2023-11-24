import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextField } from '../../core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss', '../../form.component.scss'],
})
export class FieldTextComponent implements OnInit {
  @Input() field!: TextField;
  @Input() formGroup = new FormGroup({});

  constructor() {}

  public valueChange(value: string): void {
    this.field.valueChange(value);
  }

  ngOnInit() {}
}
