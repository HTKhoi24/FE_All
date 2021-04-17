import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1ContentComponent } from './e1-content.component';

describe('E1ContentComponent', () => {
  let component: E1ContentComponent;
  let fixture: ComponentFixture<E1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
