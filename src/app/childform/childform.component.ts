import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, FormGroup, FormControl, Validators, ControlContainer, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './childform.component.html',
  styleUrl: './childform.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class ChildFormComponent implements OnInit {
  childForm: any;
  constructor(public parentForm: FormGroupDirective) {}
  ngOnInit() {
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
      'address',
      new FormGroup({
        streetName: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        pinCode: new FormControl(null, [Validators.required]),
      })
    );
  }
}
