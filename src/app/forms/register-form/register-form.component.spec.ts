
import { TweetUserPair } from './../../data-models/MainModels/TweetUserPair';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../../Services/UserService';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';

class MockUserService{
  
  registerUser(user){}
  
}

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule, 
        CustomMaterialModule, 
        BrowserAnimationsModule],
      declarations: [ RegisterFormComponent ],
      providers: [{provide: UserService, useClass: MockUserService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('username invalid', () => {
    let username = component.registerForm.controls['username'];
    expect(username.valid).toBeFalsy();
  });

  it('email invalid', () => {
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('password invalid', () => {
    let password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  it('username field validity', () =>{
    let errors = {};
    let username = component.registerForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();

    username.setValue("a");
    errors = username.errors || {};
    expect(errors['minlength']['requiredLength']).toBe(2);

    username.setValue("aaaaaaaaaaaaaaaaaaaaaaa");
    errors = username.errors || {};
    expect(errors['maxlength']['requiredLength']).toBe(20);
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    password.setValue("a");
    errors = password.errors || {};
    expect(errors['minlength']['requiredLength']).toBe(6);

    password.setValue("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    errors = password.errors || {};
    expect(errors['maxlength']['requiredLength']).toBe(30);
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    email.setValue("a");
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();
  });

  it('register service should be called with correct form values', () => {

    component.registerForm.controls['username'].setValue('testUsername');
    component.registerForm.controls['password'].setValue('testPassword');
    component.registerForm.controls['email'].setValue('testUser@testEmail.com');

    expect(component.registerForm.valid).toBeTruthy();

    spyOn(userService, 'registerUser').and.returnValue(Observable.of(component.registerForm.value));
    component.registerUser();
    expect(userService.registerUser).toHaveBeenCalled();
    expect(userService.registerUser).toHaveBeenCalledWith({
      username: 'testUsername',
      email: 'testUser@testEmail.com',
      password: 'testPassword'
    })
  });

  it('register should not attempt to register if form is invalid', () => {
    expect(component.registerForm.valid).toBeFalsy();
    spyOn(userService, 'registerUser').and.returnValue(Observable.of(component.registerForm.value));
    component.registerUser();
    expect(userService.registerUser).toHaveBeenCalledTimes(0);
  })

  it('form fields should reset after registering user', () => {
    component.registerForm.controls['username'].setValue('testUsername');
    component.registerForm.controls['password'].setValue('testPassword');
    component.registerForm.controls['email'].setValue('testUser@testEmail.com');

    spyOn(userService, 'registerUser').and.returnValue(Observable.of(component.registerForm.value));
    component.registerUser();
    expect(component.registerForm.controls['username'].value).toBe(null);
    expect(component.registerForm.controls['email'].value).toBe(null);
    expect(component.registerForm.controls['password'].value).toBe(null);

  })
  
});
