import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMON_EMAIL, COMMON_VALIDATION, PATTERN_EMAIL, PATTERN_PASS } from 'src/app/validations/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form()
  }

  form(){
    this.loginForm = this.fb.group({
      email : ['',[PATTERN_EMAIL,COMMON_EMAIL, COMMON_VALIDATION]],
      password : ['',[COMMON_VALIDATION,PATTERN_PASS,Validators.minLength(6)]],
      confirmPassword : ['',[COMMON_VALIDATION, PATTERN_PASS,Validators.minLength(6)]],
    })
}

}
