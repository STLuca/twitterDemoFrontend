import { LoginService } from './../../Services/LoginService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required,  Validators.minLength(6), Validators.maxLength(30)])]
    })
  }

  login(){
    
    if (this.loginForm.valid){
      var formValue = this.loginForm.value;
      console.log(formValue);
      this.loginService.login(formValue.username, formValue.password);
    }
    
  }
}
