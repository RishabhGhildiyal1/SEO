import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { COMMON_EMAIL, COMMON_VALIDATION, PATTERN_EMAIL, PATTERN_PASS } from 'src/app/validations/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked =false;
  loginForm!: FormGroup;

  constructor(private fb : FormBuilder, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.form();
      this.title.setTitle('SEO PROJECT')
      this.meta.addTag({name:'author' , content:'Sneaker Store'})
      this.meta.updateTag({name:'keywords' , content:'shop , Sneaker , accessories'})
      this.meta.updateTag({name:'description' , content:' Creating sneaker website'})

  }

  form(){
    this.loginForm = this.fb.group({
      email : ['',[PATTERN_EMAIL,COMMON_EMAIL, COMMON_VALIDATION]],
      password : ['',[COMMON_VALIDATION,PATTERN_PASS,Validators.minLength(6)]]
    })
}
}
