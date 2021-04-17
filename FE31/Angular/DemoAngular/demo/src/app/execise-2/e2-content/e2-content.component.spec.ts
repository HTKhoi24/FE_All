import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2ContentComponent } from './e2-content.component';

describe('E2ContentComponent', () => {
  let component: E2ContentComponent;
  let fixture: ComponentFixture<E2ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
