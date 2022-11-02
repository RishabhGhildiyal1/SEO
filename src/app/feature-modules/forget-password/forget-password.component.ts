import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  cchecked =false;
  forgetPasswordForm!: FormGroup;

  constructor(private fb : FormBuilder,private title:Title, private meta: Meta) { }

  ngOnInit(): void {
    this.form()
    this.title.setTitle('SEO PROJECT')
    this.meta.addTag({name:'author' , content:'Sneaker Store'})
    this.meta.updateTag({name:'keywords' , content:'shop , Sneaker , accessories'})
    this.meta.updateTag({name:'description' , content:' Creating sneaker website'})
  }
  form(){
    this.forgetPasswordForm = this.fb.group({
      password : ['',[Validators.required]],
      cnfrmpassword : ['',[Validators.required]]
    })
}
}
