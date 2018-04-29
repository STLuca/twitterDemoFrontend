import { UserService } from './../../Services/UserService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required,  Validators.minLength(6), Validators.maxLength(30)])]
    })
  }

  registerUser(){
    if (this.registerForm.valid){
      this.userService.registerUser(this.registerForm.value).subscribe(_ => this.registerForm.reset());
    }
    
  }

}
