import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormField } from './core/baseField';
import { clearObject } from '../../core/utils/clearObject';

export interface IonFormProps {
  fields: IonFormFields;
  formGroup?: FormGroup;
}

export interface IonFormFields {
  [key: string]: FormField;
}

@Component({
  selector: 'ion-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() debugMode = false;
  @Input() fields: IonFormFields;
  @Input() formGroup = new FormGroup({});

  @Input() set model(model: any) {
    this._model = model;
  }

  get model() {
    const value = this.formGroup.value || this._model;
    return clearObject(value);
  }

  public formFields: FormField[];

  private _model = {};

  createForm(): void {
    this.formFields = Object.values(this.fields);
    this.formFields.forEach((field, index) => {
      this.formGroup.addControl(
        field.key,
        new FormControl(
          {
            value: this._model[field.key] || null,
            disabled: field.getDisabled(),
          },
          field.getValidators()
        )
      );
      field.setFormControl(this.formGroup.controls[field.key]);
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
}
