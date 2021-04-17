import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDirectiveComponent } from './exercise-directive.component';

describe('ExerciseDirectiveComponent', () => {
  let component: ExerciseDirectiveComponent;
  let fixture: ComponentFixture<ExerciseDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
