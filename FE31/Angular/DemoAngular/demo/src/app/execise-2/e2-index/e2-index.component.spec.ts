import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2IndexComponent } from './e2-index.component';

describe('E2IndexComponent', () => {
  let component: E2IndexComponent;
  let fixture: ComponentFixture<E2IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
