import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.signupForm = new FormGroup({
    //   fname: new FormControl(''),
    //   lname: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // });
    this.signupForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSignupSubmit() {
    console.log(this.signupForm.get('fname').value);
    console.log(this.signupForm.get('lname').value);
  }
}
