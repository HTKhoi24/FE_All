import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2HeaderComponent } from './e2-header.component';

describe('E2HeaderComponent', () => {
  let component: E2HeaderComponent;
  let fixture: ComponentFixture<E2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
