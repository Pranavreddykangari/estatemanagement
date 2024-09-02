import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  Inquiry!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.Inquiry = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.Inquiry.valid) {
      console.log(this.Inquiry.value);
      // Handle form submission logic here
    }
  }
}
