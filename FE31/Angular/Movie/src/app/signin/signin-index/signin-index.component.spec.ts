import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninIndexComponent } from './signin-index.component';

describe('SigninIndexComponent', () => {
  let component: SigninIndexComponent;
  let fixture: ComponentFixture<SigninIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
