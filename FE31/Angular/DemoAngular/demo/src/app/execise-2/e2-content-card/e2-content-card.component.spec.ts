import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2ContentCardComponent } from './e2-content-card.component';

describe('E2ContentCardComponent', () => {
  let component: E2ContentCardComponent;
  let fixture: ComponentFixture<E2ContentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2ContentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2ContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
