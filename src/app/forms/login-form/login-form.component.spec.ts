import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './../../Services/LoginService';
import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let loginService: LoginService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule, 
        CustomMaterialModule, 
        BrowserAnimationsModule],
      declarations: [ LoginFormComponent ],
      providers: [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  })

  it('username invalid', () => {
    let username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
  })

  it('password invalid', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
  })

  it('username field validity', () =>{
    let errors = {};
    let username = component.loginForm.controls['username'];
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
    let password = component.loginForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    password.setValue("a");
    errors = password.errors || {};
    expect(errors['minlength']['requiredLength']).toBe(6);

    password.setValue("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    errors = password.errors || {};
    expect(errors['maxlength']['requiredLength']).toBe(30);
  });

  it('submitted the form calls service login with the username and password', () => {
    component.loginForm.controls['username'].setValue("testUsername");
    component.loginForm.controls['password'].setValue("testPassword");
    expect(component.loginForm.valid).toBeTruthy();

    spyOn(loginService, 'login');
    component.login();
    expect(loginService.login).toHaveBeenCalledWith('testUsername', 'testPassword');

  });

});
