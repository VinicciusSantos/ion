import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormField} from './core/baseField';
import {clearObject} from '../../core/utils/clearObject';

export interface IonFormProps {
  fields: FormField[];
  formGroup?: IonFormGroup;
  model?: object;
}

interface IonFormGroup extends FormGroup {
  fields?: FormField[];
  findField(key: string): FormField | undefined;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() debugMode = false;
  @Input() fields?: FormField[];
  @Input() formGroup: IonFormGroup = new FormGroup({});

  @Input() set model(model: object) {
    this._model = model;
  }

  get model(): object {
    const value = this.formGroup.value || this._model;
    return clearObject(value);
  }

  private _model = {};

  createForm(): void {
    this.fields.forEach((field) => {
      this.formGroup.addControl(
        field.key,
        new FormControl(
          {
            value: field.defaultValue || this._model[field.key] || null,
            disabled: field.getDisabled(),
          },
          field.getValidators()
        )
      );
      field.setFormControl(this.formGroup.controls[field.key]);
    });
    this.formGroup.fields = this.fields;
    this.formGroup.findField = this.findField.bind(this);
  }

  private findField(key: string): FormField | undefined {
    return this.fields.find((field) => field.key === key);
  }

  ngOnInit(): void {
    this.createForm();
  }
}
