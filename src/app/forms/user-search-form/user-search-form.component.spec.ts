import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchFormComponent } from './user-search-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

class RouterStub {
  navigate(url){return url;}
}

describe('UserSearchFormComponent', () => {
  let component: UserSearchFormComponent;
  let fixture: ComponentFixture<UserSearchFormComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule, 
        CustomMaterialModule, 
        BrowserAnimationsModule
      ],
      declarations: [ UserSearchFormComponent ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchFormComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid at start', () => {
    expect(component.searchForm.valid).toBeFalsy();
  });

  it('search term invalid when empty', () => {
    expect(component.searchForm.controls['searchTerm'].valid).toBeFalsy();
  });

  it('search term field validity', () => {
    let errors = {};
    let searchTerm = component.searchForm.controls['searchTerm'];
    errors = searchTerm.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should navigate to correct url', () => {
    component.searchForm.controls['searchTerm'].setValue("test");
    spyOn(router, 'navigate');
    component.search();
    expect(router.navigate).toHaveBeenCalledWith(['/user/search', 'test']);
  })
});
