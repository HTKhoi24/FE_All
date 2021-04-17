import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1HeaderComponent } from './e1-header.component';

describe('E1HeaderComponent', () => {
  let component: E1HeaderComponent;
  let fixture: ComponentFixture<E1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
