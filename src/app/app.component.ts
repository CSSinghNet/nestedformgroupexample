

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChildFormComponent } from './childform/childform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule,ChildFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  title = 'nested FormGroup Example';
  
contactForm!: FormGroup;
constructor(private builder: FormBuilder){}

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(contactForm:FormGroup) {
    //check console
    console.log(contactForm);
  }
}
